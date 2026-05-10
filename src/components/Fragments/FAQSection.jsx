import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Apakah bisa request konsep wedding custom?",
      answer:
        "Tentu. Kami membantu menyesuaikan konsep acara mulai dari dekorasi, rundown, entertainment, hingga detail kecil sesuai impian Anda.",
    },
    {
      question: "Apakah tersedia paket all-in wedding?",
      answer:
        "Ya, kami menyediakan paket lengkap mulai dari venue, dekorasi, dokumentasi, MUA, entertainment, hingga wedding organizer.",
    },
    {
      question: "Berapa lama persiapan wedding biasanya?",
      answer:
        "Rata-rata persiapan berlangsung 3–12 bulan tergantung skala acara dan kebutuhan pasangan.",
    },
    {
      question: "Apakah bisa menggunakan vendor dari luar?",
      answer:
        "Bisa. Kami fleksibel jika Anda ingin menggunakan vendor pilihan pribadi dan tetap membantu proses koordinasinya.",
    },
    {
      question: "Apakah melayani acara di luar kota?",
      answer:
        "Ya, kami melayani wedding dan event di berbagai kota sesuai kebutuhan klien.",
    },
  ];

  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-20 h-screen px-4 md:px-8 bg-[#F9F7F5]">
      <div className="max-w-4xl mx-auto">
        {/* heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-sm text-[#FF8B5A] font-medium mb-3">
            FAQ
          </p>

          <h2 className="text-3xl md:text-5xl font-headline mb-4">
            Pertanyaan yang{" "}
            <span className="text-[#FF5A5A]">Sering Ditanyakan</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Temukan jawaban untuk pertanyaan umum seputar layanan wedding
            organizer kami.
          </p>
        </div>

        {/* faq list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border border-gray-200
                  rounded-2xl
                  overflow-hidden
                  shadow-sm
                  transition-all
                  duration-300
                "
              >
                {/* question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    text-left
                    p-5
                    md:p-6
                  "
                >
                  <span className="font-headline text-base md:text-lg text-gray-800">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`
                      w-5 h-5 text-[#FF5A5A]
                      transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* answer */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                      px-5
                      md:px-6
                      pb-5
                      md:pb-6
                      text-sm
                      md:text-base
                      text-gray-500
                      leading-relaxed
                    "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
