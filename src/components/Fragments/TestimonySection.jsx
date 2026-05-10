import { useState, useEffect } from "react";
import ProfileTestimony from "../../assets/profileTestimony.png";
import ArrowLeft from "../../assets/icons/arrow-left-s-line.svg";
import ArrowRight from "../../assets/icons/arrow-right-s-line.svg";
export default function TestimonySection() {
  const dataTestimony = [
    {
      image: ProfileTestimony,
      title: "Hilmy & Sasa",
      subtitle: "Wedding - September 2023",
      deskripsi:
        "Fannia Entertainment benar-benar membuat hari pernikahan kami menjadi luar biasa. Setiap detail dipersiapkan dengan sempurna. Sangat direkomendasikan!",
    },
    {
      image: ProfileTestimony,
      title: "Rizky & Aulia",
      subtitle: "Wedding - Januari 2024",
      deskripsi:
        "Pelayanan sangat profesional dan tim sangat membantu. Acara berjalan lancar tanpa kendala.",
    },
    {
      image: ProfileTestimony,
      title: "Andi Corp",
      subtitle: "Corporate Event",
      deskripsi:
        "Event kami jadi sangat berkesan berkat konsep kreatif dari Fannia Entertainment.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? dataTestimony.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === dataTestimony.length - 1 ? 0 : current + 1);
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section
      id="testimony"
      className="bg-gradient-to-b from-[#F7F3F0] to-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20"
    >
      {/* HEADER */}
      <div className="text-center mb-10">
        <span className="font-base text-[#FF8B5A] uppercase text-sm">
          Kata Mereka
        </span>

        <h2 className="font-headline text-3xl md:text-5xl mt-2">
          Testimoni <span className="text-[#FF8B5A]">Klien</span>
        </h2>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-3xl mx-auto">
        {/* CARD */}
        <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-xl rounded-xl p-6 md:p-10 text-center relative min-h-[260px] md:min-h-[280px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">

          {/* QUOTE ICON */}
          <div className="absolute top-4 left-6 text-6xl text-[#FF8B5A]/20 font-serif">
            “
          </div>

          {/* TEXT */}
          <p className="text-[#666666] text-sm md:text-lg mb-10 md:mb-12 transition-all duration-500 ease-in-out">
            {dataTestimony[current].deskripsi}
          </p>

          {/* PROFILE */}
          <div className="absolute bottom-4 left-4 md:left-6 flex items-center gap-3">
            <div className="p-[2px] rounded-full bg-gradient-to-r from-[#FF8B5A] to-[#FF5A5A]">
              <img
                src={dataTestimony[current].image}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                alt=""
              />
            </div>

            <div className="text-left">
              {/* RATING */}
              <div className="text-[#FF8B5A] text-xs">★★★★★</div>

              <h4 className="font-headline text-black text-xs md:text-lg">
                {dataTestimony[current].title}
              </h4>

              <span className="text-[10px] md:text-xs text-gray-500">
                {dataTestimony[current].subtitle}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex items-center justify-center gap-4 mt-6">
        
        {/* PREV */}
        <button
          onClick={prevSlide}
          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-black/20 bg-white shadow rounded-full hover:scale-110 transition"
        >
          <img src={ArrowLeft} alt="Previous" className="opacity-40"/>
        </button>

        <div className="flex gap-2">
          {dataTestimony.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 md:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === current
                  ? "w-6 bg-[#FF5A5A]"
                  : "w-2.5 bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* NEXT */}
        <button
          onClick={nextSlide}
          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-black/20 bg-white shadow rounded-full hover:scale-110 transition"
        >
          <img src={ArrowRight} alt="Next" className="opacity-40"/>
        </button>
      </div>
    </section>
  );
}