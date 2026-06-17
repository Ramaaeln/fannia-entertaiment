import Mitra1 from "../../../assets/icons/vendor/i studio.jpg";
import Mitra2 from "../../../assets/icons/vendor/Ayubintang.jpg";
import Mitra3 from "../../../assets/icons/vendor/lahasa.jpg";
import Mitra4 from "../../../assets/icons/vendor/parikesit.jpg";
import Mitra5 from "../../../assets/icons/vendor/Yayasan Ragam Budaya.jpg";

import {
  Sparkles,
} from "lucide-react";

export default function MitraVendorContent() {
  const mitra = [
    {
      name: "Lima Moto",
      logo: Mitra1,
      category: "Fotografer",
    },
    {
      name: "Ayu Bintang Catering",
      logo: Mitra2,
      category: "Catering",
    },
    {
      name: "Lahasa Entertainment",
      logo: Mitra3,
      category: "Entertainment",
    },
    {
      name: "Sanggar Parikesit",
      logo: Mitra4,
      category: "Entertainment",
    },
    {
      name: "Yayasan Ragam Budaya",
      logo: Mitra5,
      category: "Cultural Events",
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
        bg-[#FFB38A]/20 blur-[150px] rounded-full"
      />

      <div
        className="absolute bottom-0 right-0
        w-[350px] h-[350px]
        bg-[#FFD45A]/10 blur-[150px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
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
              Trusted Premium Partners
            </span>
          </div>

          {/* Title */}
          <h2
            className="mt-6 text-4xl md:text-6xl
            font-headline font-medium
            text-[#1B1B1B]"
          >
            Mitra
            <span
              className="ml-3 bg-gradient-to-r
              from-[#FFB36B] via-[#FF8B5A] to-[#FF6A5B]
              bg-clip-text text-transparent italic"
            >
              Vendor
            </span>
          </h2>

          {/* Desc */}
          <p
            className="mt-6 text-sm md:text-lg
            text-gray-500 leading-relaxed"
          >
            Kami bekerja sama dengan vendor profesional dan terpercaya
            untuk menghadirkan pengalaman acara yang elegan,
            berkualitas, dan berkesan.
          </p>
        </div>

        {/* Vendor Grid */}
        <div
          className="mt-20
          grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
          gap-5 md:gap-7"
        >
          {mitra.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden
              bg-white/85 backdrop-blur-xl
              border border-[#F2ECE7]
              rounded-[32px]
              min-h-[280px]
              px-6 py-8
              flex flex-col items-center justify-between
              hover:-translate-y-2
              hover:border-[#FFD7C3]
              hover:shadow-[0_20px_50px_rgba(255,180,130,0.15)]
              transition-all duration-500"
            >
              {/* Glow Hover */}
              <div
                className="absolute inset-0 opacity-0
                group-hover:opacity-100
                transition-all duration-500
                bg-gradient-to-b
                from-[#FFF5EE] to-transparent"
              />

              {/* Category */}
              <div
                className="relative z-10
                text-xs tracking-wide
                text-[#D08962]
                bg-[#FFF4EC]
                border border-[#FFE0CF]
                px-4 py-1.5 rounded-full"
              >
                {item.category}
              </div>

              {/* Logo */}
              <div
                className="relative z-10
                w-28 h-28 rounded-[30px]
                bg-gradient-to-br
                from-[#FFF1E8] to-[#FFE4D5]
                flex items-center justify-center
                shadow-inner"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-16 h-16 object-contain
                  group-hover:scale-110
                  transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
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
                  Trusted partner with premium quality service.
                </p>
              </div>

              {/* Arrow */}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}