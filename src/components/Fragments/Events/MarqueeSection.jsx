import {
  Sparkles,
  Music2,
  Camera,
  Flower2,
  Mic2,
  HeartHandshake,
  PartyPopper,
} from "lucide-react";

export default function MarqueeSection() {
  const items = [
    {
      name: "Wedding MC",
      icon: <Mic2 size={16} />,
    },
    {
      name: "Bridal Package",
      icon: <Sparkles size={16} />,
    },
    {
      name: "Vendor Management",
      icon: <HeartHandshake size={16} />,
    },
    {
      name: "Entertainment",
      icon: <Music2 size={16} />,
    },
    {
      name: "Wedding Planning",
      icon: <PartyPopper size={16} />,
    },
    {
      name: "Dekorasi & Floral",
      icon: <Flower2 size={16} />,
    },
    {
      name: "Dokumentasi",
      icon: <Camera size={16} />,
    },
  ];

  return (
    <section className="relative overflow-hidden py-5 bg-[#FAF7F4] border-y border-[#EFE7E1]">
      
      {/* Blur Accent */}
      <div
        className="absolute left-0 top-0
        w-[300px] h-[200px]
        bg-[#FFB38A]/20 blur-[120px]"
      />

      <div
        className="absolute right-0 bottom-0
        w-[300px] h-[200px]
        bg-[#FFD45A]/10 blur-[120px]"
      />

      {/* Fade Left */}
      <div
        className="pointer-events-none absolute left-0 top-0
        h-full w-24 z-10
        bg-gradient-to-r from-[#FAF7F4] to-transparent"
      />

      {/* Fade Right */}
      <div
        className="pointer-events-none absolute right-0 top-0
        h-full w-24 z-10
        bg-gradient-to-l from-[#FAF7F4] to-transparent"
      />

      {/* Marquee */}
      <div className="marquee flex items-center">
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="group flex items-center gap-3
            shrink-0 whitespace-nowrap
            mx-4"
          >
            {/* Card */}
            <div
              className="flex items-center gap-3
              px-5 py-3 rounded-full
              bg-white/80 backdrop-blur-xl
              border border-[#F1EAE4]
              shadow-[0_5px_20px_rgba(0,0,0,0.04)]
              hover:shadow-[0_10px_30px_rgba(255,170,120,0.12)]
              hover:-translate-y-0.5
              transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-8 h-8 rounded-full
                flex items-center justify-center
                bg-gradient-to-br
                from-[#FFF1E8] to-[#FFE0D0]
                text-[#E58B63]"
              >
                {item.icon}
              </div>

              {/* Text */}
              <span
                className="text-sm md:text-base
                font-medium tracking-wide
                text-[#4B4B4B]"
              >
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}