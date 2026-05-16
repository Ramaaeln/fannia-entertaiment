import Icons1 from "../../../assets/icons/mc.png";
import Icons2 from "../../../assets/icons/makeup.png";
import Icons3 from "../../../assets/icons/lighting.png";
import Icons4 from "../../../assets/icons/weddingdress.png";
import Icons5 from "../../../assets/icons/documentation.png";
import Icons6 from "../../../assets/icons/decoration.png";
import Icons7 from "../../../assets/icons/entertainment.png";
import Icons8 from "../../../assets/icons/team.png";
import Icons9 from "../../../assets/icons/bridalsuit.png";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function ServicesEOContent() {
  const ServicesEO = [
    {
      name: "Professional MC",
      image: Icons1,
    },
    {
      name: "Makeup Artist",
      image: Icons2,
    },
    {
      name: "Lighting Setup",
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
      name: "Event Team",
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
      bg-gradient-to-b from-[#FAF7F4] to-[#F6F1EC]
      py-24 px-5 md:px-10"
    >
      {/* Blur Accent */}
      <div
        className="absolute top-0 right-0
        w-[400px] h-[400px]
        bg-[#FFB38A]/20 blur-[150px] rounded-full"
      />

      <div
        className="absolute bottom-0 left-0
        w-[350px] h-[350px]
        bg-[#FFD45A]/10 blur-[140px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2
            bg-white/80 backdrop-blur-xl
            border border-[#EFE7E1]
            rounded-full px-5 py-2 shadow-sm"
          >
            <Sparkles size={14} className="text-[#E58B63]" />

            <span className="text-sm tracking-wide text-[#C9845E]">
              Premium Event Organizer
            </span>
          </div>

          {/* Title */}
          <h1
            className="mt-6 text-4xl md:text-6xl
            font-headline font-medium
            leading-tight text-[#1B1B1B]"
          >
            Layanan
            <span
              className="ml-3 bg-gradient-to-r
              from-[#FFB36B] via-[#FF8B5A] to-[#FF6A5B]
              bg-clip-text text-transparent italic"
            >
              Ala Carte EO
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-6 text-sm md:text-lg
            text-gray-500 leading-relaxed"
          >
            Sesuaikan kebutuhan event Anda dengan layanan profesional,
            fleksibel, dan elegan untuk menciptakan pengalaman acara terbaik.
          </p>
        </div>

        {/* Grid */}
        <div
          className="mt-20
          grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
          gap-5 md:gap-7"
        >
          {ServicesEO.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden
              bg-white/90 backdrop-blur-xl
              border border-[#F2ECE7]
              rounded-[30px]
              min-h-[240px]
              px-6 py-8
              flex flex-col items-center justify-between
              transition-all duration-500
              hover:-translate-y-2
              hover:border-[#FFD7C3]
              hover:shadow-[0_20px_50px_rgba(255,180,130,0.15)]"
            >
              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0
                group-hover:opacity-100
                transition-all duration-500
                bg-gradient-to-b
                from-[#FFF5EE] to-transparent"
              />

              {/* Icon Box */}
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

              {/* Content */}
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
                  Elegant service for premium event experiences.
                </p>
              </div>

              {/* Button */}
              <div
                className="relative z-10 mt-6
                w-11 h-11 rounded-full
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