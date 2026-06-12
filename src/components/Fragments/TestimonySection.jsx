import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Sparkles,
  Star,
  LogIn,
  MessageSquarePlus,
} from "lucide-react";

import ProfileTestimony from "../../assets/profileTestimony.png";
import DefaultAvatar from "../../assets/icons/default-avatar.png";
import axios from "axios";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../contexts/AuthContext";

export default function TestimonySection() {
  const [current, setCurrent] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const { user, loading } = useAuth();

  // Pastikan index selalu valid
  useEffect(() => {
    if (testimonials.length > 0 && current >= testimonials.length) {
      setCurrent(0);
    }
  }, [testimonials.length, current]);

  const activeTestimonial =
    testimonials.length > 0
      ? testimonials[Math.min(current, testimonials.length - 1)]
      : null;

  const prevSlide = () => {
    if (testimonials.length === 0) return;

    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (testimonials.length === 0) return;

    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const loginGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const showMessage = (type, text) => {
    setNotification({ type, text });

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const submitTestimony = async () => {
    try {
      if (submitting) return;

      if (!message.trim()) {
        showMessage("error", "Testimoni tidak boleh kosong");
        return;
      }

      setSubmitting(true);

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        showMessage("error", "Anda harus login untuk mengirim testimoni");
        return;
      }

      await axios.post(
        `${import.meta.env.VITE_URL}/testimonials`,
        {
          message: message.trim(),
        },
        {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        },
      );

      setMessage("");
      setOpenModal(false);

      showMessage("success", "Testimoni berhasil dikirim");
    } catch (error) {
      console.error(error);
      showMessage("error", "Gagal mengirim testimoni");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    if (window.location.hash.includes("access_token")) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_URL}/testimonials`);

        setTestimonials(res.data || []);
      } catch (error) {
        console.error("Fetch testimonial error:", error);
      }
    };

    fetchTestimonials();

    const channel = supabase
      .channel("testimonials")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "testimonials",
        },
        () => {
          fetchTestimonials();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (testimonials.length === 0) {
    return (
      <section id="testimony" className="py-24 text-center">
        Belum ada testimoni
      </section>
    );
  }
  return (
    <section
      id="testimony"
      className="relative overflow-hidden
      bg-gradient-to-b
      from-[#FAF7F4] to-white
      py-24 px-5 md:px-10"
    >
      {/* Blur Accent */}
      <div
        className="absolute top-0 left-0
        w-[350px] h-[350px]
        bg-[#FFB38A]/20 blur-[150px] rounded-full"
      />

      <div
        className="absolute bottom-0 right-0
        w-[350px] h-[350px]
        bg-[#FFD45A]/10 blur-[150px] rounded-full"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2
            bg-white border border-[#EFE7E1]
            rounded-full px-5 py-2 shadow-sm"
          >
            <Sparkles size={14} className="text-[#E58B63]" />

            <span className="text-sm tracking-wide text-[#C9845E]">
              Client Experience
            </span>
          </div>

          {/* Title */}
          <h2
            className="mt-6 text-4xl md:text-6xl
            font-headline font-medium
            text-[#1B1B1B]"
          >
            Testimoni
            <span
              className="ml-3 bg-gradient-to-r
              from-[#FFB36B] via-[#FF8B5A] to-[#FF6A5B]
              bg-clip-text text-transparent italic"
            >
              Klien
            </span>
          </h2>

          {/* Desc */}
          <p
            className="mt-6 text-sm md:text-lg
            text-gray-500 leading-relaxed"
          >
            Kepuasan klien adalah prioritas utama kami dalam menciptakan acara
            yang elegan dan berkesan.
          </p>
          <div className="mt-8 flex justify-center">
            {loading ? (
              <div className="flex flex-col items-center gap-4">
                <div
                  className="
        w-16 h-16
        rounded-full
        bg-gray-200
        animate-pulse"
                />

                <div
                  className="
        w-32 h-4
        rounded-full
        bg-gray-200
        animate-pulse"
                />
              </div>
            ) : !user ? (
              <button
                onClick={loginGoogle}
                className="
      inline-flex items-center gap-2
      px-6 py-3 rounded-full
      bg-gradient-to-r
      from-[#FF8A5B]
      to-[#FFB36B]
      text-white
      shadow-lg
      hover:scale-105
      transition-all duration-300"
              >
                <LogIn size={18} />
                Login dengan Google
              </button>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <img
                  src={
                    user?.user_metadata?.picture
                      ? user.user_metadata.picture
                      : DefaultAvatar
                  }
                  onError={(e) => {
                    e.currentTarget.src = DefaultAvatar;
                  }}
                  alt="profile"
                  className="w-16 h-16 rounded-full object-cover"
                />

                <h4 className="font-semibold">
                  {user?.user_metadata?.name || "Guest"}
                </h4>

                <div className="flex gap-3">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="
          inline-flex items-center gap-2
          px-6 py-3 rounded-full
          bg-gradient-to-r
          from-[#FF8A5B]
          to-[#FFB36B]
          text-white"
                  >
                    <MessageSquarePlus size={18} />
                    Tulis Testimoni
                  </button>

                  <button
                    onClick={logout}
                    className="
          px-5 py-3 rounded-full
          border border-gray-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

            {notification && (
  <div
    className={`
      max-w-2xl
      mx-auto
      mb-8
      px-5
      py-4
      mt-8
      rounded-2xl
      border
      text-center
      transition-all
      ${
        notification.type === "success"
          ? "bg-[#FFF8F3] border-[#FFD9C7] text-[#C9845E]"
          : "bg-red-50 border-red-200 text-red-600"
      }
    `}
  >
    {notification.text}
  </div>
)}
        {/* Testimonial Card */}
        <div className="mt-20 relative">
          <div
            className="relative overflow-hidden
            bg-white/85 backdrop-blur-2xl
            border border-[#F2ECE7]
            rounded-[40px]
            p-8 md:p-14
            min-h-[420px]
            shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >
            {/* Glow */}
            <div
              className="absolute top-0 right-0
              w-[250px] h-[250px]
              bg-[#FFB38A]/10 blur-[120px]"
            />

            {/* Quote */}
            <div
              className="absolute top-8 right-8
              text-[#FFE0D0]"
            >
              <Quote size={80} strokeWidth={1.5} />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className="fill-[#FFB36B] text-[#FFB36B]"
                />
              ))}
            </div>

            {/* Text */}
            <p
              className="mt-8
              text-xl md:text-3xl
              leading-relaxed
              text-[#2B2B2B]
              font-light max-w-4xl"
            >
              “{activeTestimonial?.message}”
            </p>

            {/* Bottom */}
            <div
              className="mt-14 flex flex-col md:flex-row
              items-start md:items-center
              justify-between gap-8"
            >
              {/* Profile */}
              <div className="flex items-center gap-5">
                {/* Image */}
                <div
                  className="p-[3px] rounded-full
                  bg-gradient-to-r
                  from-[#FFB36B] to-[#FF8B5A]"
                >
                  <img
                    src={activeTestimonial?.user_avatar || DefaultAvatar}
                    onError={(e) => {
                      e.currentTarget.src = DefaultAvatar;
                    }}
                    alt={activeTestimonial?.user_name || "Guest"}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <h4
                    className="text-xl font-semibold
                    text-[#1B1B1B]"
                  >
                    {activeTestimonial?.user_name || "Guest"}
                  </h4>

                  <p
                    className="mt-1 text-sm
                    text-gray-500 tracking-wide"
                  >
                    {activeTestimonial?.created_at &&
                      new Date(activeTestimonial.created_at).toLocaleDateString(
                        "id-ID",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        },
                      )}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                {/* Prev */}
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full
                  bg-[#FAF7F4]
                  border border-[#EFE7E1]
                  flex items-center justify-center
                  text-[#D08962]
                  hover:bg-gradient-to-r
                  hover:from-[#FF8A5B]
                  hover:to-[#FFB36B]
                  hover:text-white
                  transition-all duration-300"
                >
                  <ArrowLeft size={20} />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`transition-all duration-300 rounded-full ${
                        current === index
                          ? "w-8 h-3 bg-gradient-to-r from-[#FF8A5B] to-[#FFB36B]"
                          : "w-3 h-3 bg-[#E6DED8]"
                      }`}
                    />
                  ))}
                </div>

                {/* Next */}
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full
                  bg-[#FAF7F4]
                  border border-[#EFE7E1]
                  flex items-center justify-center
                  text-[#D08962]
                  hover:bg-gradient-to-r
                  hover:from-[#FF8A5B]
                  hover:to-[#FFB36B]
                  hover:text-white
                  transition-all duration-300"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div
          className="
    fixed inset-0 z-[999]
    flex items-center justify-center
    bg-black/50 px-5"
        >
          <div
            className="
      bg-white
      rounded-3xl
      p-8
      w-full
      max-w-lg"
          >
            <h3 className="text-2xl font-semibold">Tulis Testimoni</h3>

            <p className="text-gray-500 mt-2">
              Bagikan pengalaman Anda bersama Fannia Entertainment.
            </p>

            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis testimoni..."
              className="
        mt-5
        w-full
        border
        rounded-xl
        p-4
        resize-none
        outline-none"
            />

            <div
              className="
        mt-6
        flex
        justify-end
        gap-3"
            >
              <button
                onClick={() => setOpenModal(false)}
                className="
          px-5 py-2
          border
          rounded-xl"
              >
                Batal
              </button>

              <button
                onClick={submitTestimony}
                disabled={submitting}
                className="
    px-5 py-2
    rounded-xl
    bg-gradient-to-r
    from-[#FF8A5B]
    to-[#FFB36B]
    text-white
    disabled:opacity-50
    disabled:cursor-not-allowed"
              >
                {submitting ? "Mengirim..." : "Kirim"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
