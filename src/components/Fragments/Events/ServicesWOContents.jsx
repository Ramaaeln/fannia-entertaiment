import Icons1 from "../../../assets/icons/mc.png";
import Icons2 from "../../../assets/icons/makeup.png";
import Icons3 from "../../../assets/icons/lighting.png";
import Icons4 from "../../../assets/icons/weddingdress.png";
import Icons5 from "../../../assets/icons/documentation.png";
import Icons6 from "../../../assets/icons/decoration.png";
import Icons7 from "../../../assets/icons/entertainment.png";
import Icons8 from "../../../assets/icons/team.png";
import Icons9 from "../../../assets/icons/bridalsuit.png";

import { ArrowUpRight } from "lucide-react";

export default function ServicesWOContents() {
  const ServicesWO = [
    {
      name: "MC",
      image: Icons1,
    },
    {
      name: "Makeup",
      image: Icons2,
    },
    {
      name: "Lighting",
      image: Icons3,
    },
    {
      name: "Wedding Dress",
      image: Icons4,
    },
    {
      name: "Documentation",
      image: Icons5,
    },
    {
      name: "Decoration",
      image: Icons6,
    },
    {
      name: "Entertainment",
      image: Icons7,
    },
    {
      name: "Team Wedding",
      image: Icons8,
    },
    {
      name: "Bridal Suit",
      image: Icons9,
    },
  ];

  return (
    <section
      className="relative overflow-hidden
      bg-[#FAF7F4]
      py-24 px-5 md:px-10"
    >
      {/* Blur Accent */}
      <div
        className="absolute top-0 left-0
        w-[350px] h-[350px]
        bg-[#FFB38A]/20 blur-[140px] rounded-full"
      />

      <div
        className="absolute bottom-0 right-0
        w-[350px] h-[350px]
        bg-[#FFD45A]/10 blur-[140px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2
            bg-white border border-[#EFE7E1]
            rounded-full px-5 py-2
            shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFB36B]" />

            <span className="text-sm tracking-wide text-[#C9835E]">
              Premium Wedding Service
            </span>
          </div>

          {/* Title */}
          <h1
            className="mt-6 text-4xl md:text-6xl
            font-headline font-medium
            leading-tight text-[#1A1A1A]"
          >
            Layanan
            <span
              className="ml-3 bg-gradient-to-r
              from-[#FFB36B] via-[#FF8B5A] to-[#FF6A5B]
              bg-clip-text text-transparent italic"
            >
              Ala Carte WO
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-6 text-sm md:text-lg
            text-gray-500 leading-relaxed"
          >
            Pilih layanan sesuai kebutuhan acara Anda dengan fleksibilitas
            penuh dan sentuhan profesional yang elegan.
          </p>
        </div>

        {/* Grid */}
        <div
          className="mt-20
          grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
          gap-5 md:gap-7"
        >
          {ServicesWO.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden
              bg-white/85 backdrop-blur-xl
              border border-[#F2ECE7]
              rounded-[28px]
              min-h-[220px]
              px-6 py-8
              flex flex-col items-center justify-between
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_20px_50px_rgba(255,170,120,0.15)]
              hover:border-[#FFD8C2]"
            >
              {/* Gradient Hover */}
              <div
                className="absolute inset-0 opacity-0
                group-hover:opacity-100
                transition-all duration-500
                bg-gradient-to-b
                from-[#FFF6F0] to-transparent"
              />

              {/* Icon Circle */}
              <div
                className="relative z-10
                w-24 h-24 rounded-[28px]
                bg-gradient-to-br
                from-[#FFF1E8] to-[#FFE4D5]
                flex items-center justify-center
                shadow-inner"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-contain
                  group-hover:scale-110
                  transition-all duration-500"
                />
              </div>

              {/* Text */}
              <div className="relative z-10 text-center mt-7">
                <h3
                  className="text-[#2B2B2B]
                  text-base md:text-lg
                  font-semibold"
                >
                  {item.name}
                </h3>

                <p
                  className="mt-2 text-sm
                  text-gray-500 leading-relaxed"
                >
                  Professional wedding service with elegant experience.
                </p>
              </div>

              {/* Arrow */}
              <div
                className="relative z-10 mt-6
                w-10 h-10 rounded-full
                bg-[#FAF7F4]
                border border-[#EFE7E1]
                flex items-center justify-center
                text-[#D08962]
                group-hover:bg-gradient-to-r
                group-hover:from-[#FF8A5B]
                group-hover:to-[#FFB36B]
                group-hover:text-white
                transition-all duration-500"
              >
                <ArrowUpRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}