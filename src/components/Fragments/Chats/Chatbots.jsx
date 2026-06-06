import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MessageCircle, Send, X, Bot } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(() => {
    return JSON.parse(localStorage.getItem("fannia_chat_open")) || false;
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [pernahLihatMenu, setPernahLihatMenu] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("fannia_pernah_lihat_menu")) || false
    );
  });

  const [lastState, setLastState] = useState(() => {
    return localStorage.getItem("fannia_last_state") || "none";
  });

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("fannia_messages");

    return saved
      ? JSON.parse(saved)
      : [
          {
            sender: "bot",
            text: "Halo 👋 Ada yang bisa kami bantu?",
          },
        ];
  });

  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("fannia_messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("fannia_last_state", lastState);
  }, [lastState]);

  useEffect(() => {
    localStorage.setItem(
      "fannia_pernah_lihat_menu",
      JSON.stringify(pernahLihatMenu),
    );
  }, [pernahLihatMenu]);

  useEffect(() => {
    localStorage.setItem("fannia_chat_open", JSON.stringify(isOpen));
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const currentMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: currentMessage,
      },
    ]);

    setMessage("");

    try {
      setLoading(true);

      const { data } = await axios.post(`${API_URL}/api/chat`, {
        message: currentMessage,
        pernah_lihat_menu: pernahLihatMenu,
        last_state: lastState,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.text,
          wa_text: data.wa_text,
        },
      ]);

      setLastState(data.next_state);
      setPernahLihatMenu(data.pernah_lihat_menu);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Maaf, terjadi kesalahan saat menghubungi server.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed z-50 flex items-center justify-center
            rounded-full text-white
            bg-gradient-to-r from-[#FF5A5A] to-[#FF8B5A]
            shadow-[0_10px_30px_rgba(255,138,90,0.35)]
            transition-all duration-300 hover:scale-105

            bottom-4 right-4 h-14 w-14
            sm:bottom-6 sm:right-6 sm:h-16 sm:w-16
          "
        >
          <MessageCircle size={26} />
        </button>
      )}

      {isOpen && (
        <div
          className="
            fixed z-50 flex flex-col overflow-hidden
            bg-white border border-[#FFE0D1]
            shadow-[0_20px_50px_rgba(255,138,90,0.25)]

            bottom-0 left-0 right-0
            h-[100dvh] w-full
            rounded-none

            sm:bottom-24 sm:right-6 sm:left-auto
            sm:h-[600px] sm:w-[380px]
            sm:rounded-3xl
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-[#FF5A5A] to-[#FF8B5A] px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Bot size={20} />
              </div>

              <div>
                <h3 className="font-semibold">Fannia Entertainment</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1 transition hover:bg-white/20"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="min-h-0 flex-1 overflow-y-auto bg-[#FFF8F5] p-4">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-[#FF5A5A] to-[#FF8B5A] text-white"
                        : "border border-[#FFE0D1] bg-white text-gray-800"
                    }`}
                  >
                    {msg.text}

                    {msg.wa_text && (
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(
                          msg.wa_text,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 block rounded-xl bg-green-500 px-3 py-2 text-center text-sm text-white transition hover:bg-green-600"
                      >
                        WhatsApp Admin
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl border border-[#FFE0D1] bg-white px-4 py-3 text-sm">
                    Mengetik...
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-[#FFE0D1] bg-white p-3 pb-[max(env(safe-area-inset-bottom),12px)]">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                placeholder="Tulis pesan..."
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none transition focus:border-[#FF8B5A]"
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FF5A5A] to-[#FF8B5A] px-4 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}