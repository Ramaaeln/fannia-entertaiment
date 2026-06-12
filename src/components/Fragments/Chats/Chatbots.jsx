import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  MessageCircle,
  Send,
  X,
  Bot,
  Sparkles,
  Phone,
  Camera,
  Mic,
  PartyPopper,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(() => {
    return JSON.parse(localStorage.getItem("fannia_chat_open")) || false;
  });

  const [showTeaser, setShowTeaser] = useState(false);
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
            text: "Halo 👋 Selamat datang di Fannia Entertainment.\n\nKami siap membantu Anda menemukan layanan terbaik ✨ Silakan pilih menu di bawah atau ketik pertanyaan Anda ya!",
            wa_number: "6281316429729",
            wa_text: "Halo Admin Fannia Entertainment, saya mau tanya-tanya nih.",
            actions: [
              { label: "💎 Paket & Harga", value: "paket dan harga" },
              { label: "🥳 Layanan & Servis", value: "layanan" },
              { label: "🏢 Profil Perusahaan", value: "profil" },
              { label: "📞 Kontak & Lokasi", value: "kontak" }
            ],
          },
        ];
  });

  const messagesEndRef = useRef(null);

  const quickActions = [
    {
      icon: Mic,
      label: "Sewa MC",
      message: "Saya ingin informasi paket MC",
    },
    {
      icon: Camera,
      label: "Foto & Video",
      message: "Saya ingin informasi paket foto dan video",
    },
    {
      icon: PartyPopper,
      label: "Event Organizer",
      message: "Saya ingin informasi layanan event organizer",
    },
    {
      icon: Sparkles,
      label: "Wedding Package",
      message: "Saya ingin informasi paket wedding",
    },
  ];

  useEffect(() => {
    localStorage.setItem("fannia_messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("fannia_chat_open", JSON.stringify(isOpen));
  }, [isOpen]);

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
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      setShowTeaser(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowTeaser(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const sendMessage = async (customMessage = null) => {
    const currentMessage = (customMessage || message).trim();

    if (!currentMessage || loading) return;

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
          wa_number: data.wa_number,
          actions: data.actions || [],
        },
      ]);

      if (data.next_state) setLastState(data.next_state);
      if (data.pernah_lihat_menu !== undefined) setPernahLihatMenu(data.pernah_lihat_menu);

    } catch (error) {
      console.error("Koneksi backend gagal:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Maaf kak, sistem kami sedang mengalami gangguan koneksi. Hubungi kami langsung melalui WhatsApp ya untuk respon cepat! 🙏",
          wa_text: `Halo Admin Fannia Entertainment, saya ingin bertanya mengenai: "${currentMessage}"`,
          wa_number: "6281316429729",
          actions: [
            { label: "⬅️ Coba Kembali", value: "halo" }
          ],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickAction = (actionMessage) => {
    sendMessage(actionMessage);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Teaser */}
      {!isOpen && showTeaser && (
        <div
          className="
            fixed
            bottom-24
            right-4
            z-40
            max-w-[260px]
            rounded-2xl
            border border-[#FFE4D6]
            bg-white
            p-4
            shadow-[0_15px_40px_rgba(255,138,90,0.18)]
            animate-in
            fade-in
            slide-in-from-bottom-4
            duration-300
            sm:right-6
          "
        >
          <button
            onClick={() => setShowTeaser(false)}
            className="
              absolute
              right-2
              top-2
              rounded-md
              p-1
              text-gray-400
              hover:bg-gray-100
            "
          >
            <X size={14} />
          </button>

          <div className="flex items-start gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-[#FF5A5A]
                to-[#FF9A62]
                text-white
              "
            >
              <Bot size={18} />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-800">
                Butuh bantuan memilih layanan?
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Tim Fannia siap membantu Anda ✨
              </p>

              <button
                onClick={() => {
                  setIsOpen(true);
                  setShowTeaser(false);
                }}
                className="
                  mt-3
                  rounded-xl
                  bg-gradient-to-r
                  from-[#FF5A5A]
                  to-[#FF9A62]
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-white
                  transition
                  hover:opacity-90
                "
              >
                Mulai Chat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed
            bottom-4
            right-4
            z-50
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            text-white
            bg-gradient-to-r
            from-[#FF5A5A]
            to-[#FF9A62]
            shadow-[0_15px_35px_rgba(255,138,90,0.4)]
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-[0_20px_45px_rgba(255,138,90,0.55)]
            sm:bottom-6
            sm:right-6
          "
        >
          <span
            className="
              absolute
              inset-0
              rounded-full
              animate-ping
              bg-[#FF8A5A]
              opacity-20
            "
          />
          <MessageCircle size={28} className="relative" />
        </button>
      )}

      {/* Chat Container */}
      {isOpen && (
        <div
          className="
            fixed
            bottom-0
            left-0
            right-0
            z-50
            flex
            h-[100dvh]
            w-full
            flex-col
            overflow-hidden
            bg-white
            sm:bottom-24
            sm:left-auto
            sm:right-6
            sm:h-[680px]
            sm:w-[400px]
            sm:rounded-[32px]
            sm:border
            sm:border-[#FFE7DB]
            sm:shadow-[0_25px_60px_rgba(255,138,90,0.22)]
            animate-in
            fade-in
            zoom-in-95
            duration-300
          "
        >
          {/* Decorative Background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="
                absolute
                -top-20
                -right-20
                h-56
                w-56
                rounded-full
                bg-gradient-to-r
                from-[#FFD6C7]
                to-[#FFEBDD]
                opacity-40
                blur-3xl
              "
            />
            <div
              className="
                absolute
                -bottom-16
                -left-16
                h-44
                w-44
                rounded-full
                bg-gradient-to-r
                from-[#FFDCCF]
                to-[#FFF2EA]
                opacity-40
                blur-3xl
              "
            />
          </div>

          {/* Header */}
          <div
            className="
              relative
              z-10
              flex
              items-center
              justify-between
              bg-gradient-to-r
              from-[#FF5A5A]
              via-[#FF7A5A]
              to-[#FF9A62]
              px-5
              py-4
              text-white
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                  backdrop-blur-md
                "
              >
                <Bot size={22} />
              </div>

              <div>
                <h3 className="font-semibold">Fannia Assistant ✨</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-300" />
                  <p className="text-xs opacity-90">Online • Siap membantu</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-xl p-2 transition hover:bg-white/20"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="relative z-10 min-h-0 flex-1 overflow-y-auto bg-[#FFF9F7] p-4">
            {/* Quick Actions (Hanya muncul jika room baru/bersih) */}
            {messages.length <= 1 && (
              <div className="mb-5">
                <p className="mb-3 text-sm font-medium text-gray-600">
                  Pilih layanan yang Anda butuhkan:
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleQuickAction(action.message)}
                        className="
                          flex items-center gap-2
                          rounded-2xl
                          border border-[#FFE2D5]
                          bg-white
                          p-3
                          text-left
                          transition-all
                          hover:-translate-y-1
                          hover:border-[#FFB38E]
                          hover:shadow-md
                        "
                      >
                        <div
                          className="
                            flex h-9 w-9 items-center justify-center
                            rounded-xl
                            bg-gradient-to-r
                            from-[#FF5A5A]
                            to-[#FF9A62]
                            text-white
                          "
                        >
                          <Icon size={18} />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {action.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "bot" ? (
                    <div className="flex max-w-[90%] items-end gap-2">
                      <div
                        className="
                          flex h-9 w-9 shrink-0 items-center justify-center
                          rounded-full
                          bg-gradient-to-r
                          from-[#FF5A5A]
                          to-[#FF9A62]
                          text-white
                        "
                      >
                        <Bot size={16} />
                      </div>

                      <div
                        className="
                          rounded-3xl rounded-bl-md
                          border border-[#FFE2D5]
                          bg-white
                          px-4 py-3
                          text-sm
                          text-gray-800
                          shadow-sm
                          whitespace-pre-line
                        "
                      >
                        {msg.text}

                        {/* Rendering Actions Pilihan Menu Dinamis dari JSON */}
                        {msg.actions?.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {msg.actions.map((action, idx) => (
                              <button
                                key={idx}
                                onClick={() => sendMessage(action.value)}
                                className="
                                  rounded-full
                                  border border-[#FFD7C5]
                                  bg-white
                                  px-3 py-1.5
                                  text-xs font-medium
                                  text-gray-700
                                  transition
                                  hover:border-[#FF9A62]
                                  hover:bg-[#FFF5F0]
                                "
                              >
                                {action.label}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Rendering CTA Tombol Hijau WhatsApp */}
                        {msg.wa_text && msg.wa_number && (
                          <div
                            className="
                              mt-4
                              rounded-2xl
                              border border-green-200
                              bg-green-50
                              p-3
                            "
                          >
                            <p className="mb-2 text-xs text-green-700">
                              Butuh respon lebih cepat?
                            </p>

                            <a
                              href={`https://wa.me/${msg.wa_number}?text=${encodeURIComponent(
                                msg.wa_text,
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                flex items-center justify-center gap-2
                                rounded-xl
                                bg-green-500
                                px-4 py-2
                                text-sm font-medium text-white
                                transition
                                hover:bg-green-600
                              "
                            >
                              <Phone size={16} />
                              WhatsApp Admin
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="
                        max-w-[85%]
                        rounded-3xl rounded-br-md
                        bg-gradient-to-r
                        from-[#FF5A5A]
                        to-[#FF9A62]
                        px-4 py-3
                        text-sm
                        text-white
                        shadow-md
                        whitespace-pre-line
                      "
                    >
                      {msg.text}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-end gap-2">
                    <div
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-full
                        bg-gradient-to-r
                        from-[#FF5A5A]
                        to-[#FF9A62]
                        text-white
                      "
                    >
                      <Bot size={16} />
                    </div>

                    <div
                      className="
                        flex gap-1
                        rounded-3xl rounded-bl-md
                        border border-[#FFE2D5]
                        bg-white
                        px-4 py-3
                      "
                    >
                      <span className="animate-bounce">•</span>
                      <span
                        className="animate-bounce"
                        style={{ animationDelay: "0.15s" }}
                      >
                        •
                      </span>
                      <span
                        className="animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                      >
                        •
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Chat */}
          <div className="relative z-10 border-t border-[#FFE7DB] bg-white p-3 pb-[max(env(safe-area-inset-bottom),12px)]">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                placeholder="Tulis pesan..."
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="
                  flex-1
                  rounded-2xl
                  border border-gray-200
                  px-4 py-3
                  text-sm
                  outline-none
                  transition
                  focus:border-[#FF8A5A]
                  focus:ring-2
                  focus:ring-[#FFD4BF]
                "
              />

              <button
                onClick={() => sendMessage()}
                disabled={loading}
                className="
                  flex items-center justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#FF5A5A]
                  to-[#FF9A62]
                  px-5
                  text-white
                  transition
                  hover:opacity-90
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
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
