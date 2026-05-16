import { useState, useEffect } from "react";

import ProfileTestimony from "../../assets/profileTestimony.png";

import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

export default function TestimonySection() {
  const dataTestimony = [
    {
      image: ProfileTestimony,
      title: "Hilmy & Sasa",
      subtitle: "Wedding • September 2023",
      deskripsi:
        "Fannia Entertainment benar-benar membuat hari pernikahan kami menjadi luar biasa. Setiap detail dipersiapkan dengan sangat sempurna dan profesional.",
    },

    {
      image: ProfileTestimony,
      title: "Rizky & Aulia",
      subtitle: "Wedding • Januari 2024",
      deskripsi:
        "Pelayanan sangat profesional dan tim sangat membantu dari awal hingga akhir acara. Semua berjalan lancar tanpa kendala.",
    },

    {
      image: ProfileTestimony,
      title: "Andi Corp",
      subtitle: "Corporate Event",
      deskripsi:
        "Konsep acara yang kreatif dan elegan membuat event perusahaan kami terasa lebih premium dan berkesan.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(
      current === 0
        ? dataTestimony.length - 1
        : current - 1
    );
  };

  const nextSlide = () => {
    setCurrent(
      current === dataTestimony.length - 1
        ? 0
        : current + 1
    );
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

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
            Kepuasan klien adalah prioritas utama kami dalam
            menciptakan acara yang elegan dan berkesan.
          </p>
        </div>

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
              “{dataTestimony[current].deskripsi}”
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
                    src={dataTestimony[current].image}
                    alt={dataTestimony[current].title}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <h4
                    className="text-xl font-semibold
                    text-[#1B1B1B]"
                  >
                    {dataTestimony[current].title}
                  </h4>

                  <p
                    className="mt-1 text-sm
                    text-gray-500 tracking-wide"
                  >
                    {dataTestimony[current].subtitle}
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
                  {dataTestimony.map((_, index) => (
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
    </section>
  );
}