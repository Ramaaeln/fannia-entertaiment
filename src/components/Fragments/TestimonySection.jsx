import { useState } from "react";
import ProfileTestimony from "../../assets/profileTestimony.png";

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

  return (
    <section className="bg-[#F7F3F0] px-5 md:px-20 py-16">
      
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
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 text-center">
          <p className="text-[#666666] text-sm md:text-lg mb-6">
            {dataTestimony[current].deskripsi}
          </p>

          <div className="flex items-center justify-center gap-4">
            <img
              src={dataTestimony[current].image}
              className="w-12 h-12 rounded-full"
              alt=""
            />
            <div className="text-left">
              <h4 className="font-headline text-black text-sm md:text-lg">
                {dataTestimony[current].title}
              </h4>
              <span className="text-xs text-gray-500">
                {dataTestimony[current].subtitle}
              </span>
            </div>
          </div>
        </div>

        {/* BUTTON NAV */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
          {"<"}
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
                    {">"}
        </button>
      </div>

      {/* DOT INDICATOR */}
      <div className="flex justify-center gap-2 mt-6">
        {dataTestimony.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-[#FF5A5A]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}