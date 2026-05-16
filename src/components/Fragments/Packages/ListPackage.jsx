import { useState } from "react";
import { Crown, Gem, Sparkles, Check, ArrowRight } from "lucide-react";

export default function ListPackagesSection() {
  const packages = [
  {
    id: "bronze",
    name: "Bronze Package",
    icon: <Sparkles size={18} />,
    price: "Rp 27.500.000",
    description:
      "Paket sederhana namun tetap elegan untuk intimate wedding.",
    features: [
      "Tenda 100 meter full karpet",
      "Pelaminan 6 meter & bunga segar",
      "Kursi futura 1 set",
      "Make up & busana",
      "Kursi tamu 100 set & cover",
      "Blower 2 unit",
      "Round table 5 pcs",
      "MC professional",
      "Janur 1 jalur",
      "Dokumentasi basic",
    ],
  },

  {
    id: "silver",
    name: "Silver Package",
    icon: <Sparkles size={18} />,
    price: "Rp 30.500.000",
    description:
      "Wedding package modern dengan dekorasi lebih premium dan elegan.",
    features: [
      "Tenda 120 meter full karpet",
      "Pelaminan luxury mini",
      "Kursi futura 1 set",
      "Make up & busana premium",
      "Kursi tamu 120 set & cover",
      "Blower 2 unit",
      "Round table 6 pcs",
      "MC & sound system",
      "Photobooth mini",
      "Dokumentasi standard",
      "Janur 1 jalur",
    ],
  },

  {
    id: "gold",
    name: "Gold Package",
    icon: <Crown size={18} />,
    price: "Rp 35.500.000",
    description:
      "Pilihan paling populer dengan dekorasi premium dan fasilitas lengkap.",
    features: [
      "Tenda 150 meter full karpet",
      "Pelaminan mewah & bunga segar",
      "Kursi futura 1 set",
      "Make up & busana premium",
      "Kursi tamu 150 set & cover",
      "Blower 3 unit",
      "Round table 8 pcs",
      "MC & entertainment",
      "Photobooth area",
      "Dokumentasi cinematic",
      "Janur 2 jalur",
      "Wedding organizer team",
    ],
  },

  {
    id: "ruby",
    name: "Ruby Package",
    icon: <Crown size={18} />,
    price: "Rp 50.500.000",
    description:
      "Paket wedding eksklusif dengan nuansa glamor dan pelayanan lengkap.",
    features: [
      "Tenda 200 meter full karpet",
      "Premium pelaminan modern",
      "Fresh flower decoration",
      "Make up international style",
      "Kursi tamu 200 set & cover",
      "LED backdrop",
      "Live music entertainment",
      "Wedding organizer full team",
      "Photobooth premium",
      "Dokumentasi cinematic HD",
      "Bridal car",
      "Janur premium",
      "VIP family table",
    ],
  },

  {
    id: "emerald",
    name: "Emerald Package",
    icon: <Gem size={18} />,
    price: "Rp 58.800.000",
    description:
      "Luxury wedding package dengan konsep modern dan elegan.",
    features: [
      "Tenda 250 meter full karpet",
      "Luxury fresh flower decoration",
      "VIP guest setup",
      "International MUA",
      "Kursi tamu 250 set & cover",
      "LED lighting & stage",
      "Entertainment full band",
      "Exclusive WO team",
      "Photobooth unlimited",
      "Cinematic wedding video",
      "Bridal car luxury",
      "Live streaming wedding",
      "Family assistant",
    ],
  },

  {
    id: "diamond",
    name: "Diamond Package",
    icon: <Gem size={18} />,
    price: "Rp 70.500.000",
    description:
      "Luxury wedding experience dengan pelayanan paling eksklusif.",
    features: [
      "Tenda 300 meter full karpet",
      "Luxury pelaminan + fresh flower",
      "VIP guest area",
      "Make up international MUA",
      "Kursi tamu 300 set & cover",
      "LED backdrop & lighting",
      "Entertainment full band",
      "Wedding organizer exclusive",
      "Photobooth premium",
      "Cinematic wedding film",
      "Luxury bridal car",
      "Janur premium",
      "Family assistant",
      "Live streaming wedding",
    ],
  },
];

  const [activePackage, setActivePackage] = useState(packages[1]);

  return (
    <section id="list-packages" className="relative bg-[#F6F4F1] py-28 px-5 md:px-16 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FFB38A]/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FFD7B8]/30 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.3em] text-[#C47F5B] text-sm font-medium">
            Premium Wedding Package
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-serif leading-tight text-[#171717]">
            Solusi untuk
            <span className="block italic text-[#D98B66]">Acara Istimewa</span>
          </h2>

          <p className="mt-6 text-gray-500 text-base md:text-lg leading-relaxed">
            Nikmati pengalaman wedding yang elegan, modern, dan dirancang secara
            eksklusif untuk menciptakan momen yang tak terlupakan.
          </p>
        </div>

        {/* Filter */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setActivePackage(pkg)}
              className={`group relative px-7 py-3 rounded-full transition-all duration-300 border backdrop-blur-md
              ${
                activePackage.id === pkg.id
                  ? "bg-gradient-to-r from-[#FF7A5C] to-[#FFB36B] text-white border-transparent shadow-[0_10px_40px_rgba(255,140,90,0.35)]"
                  : "bg-white/70 text-gray-700 border-white hover:bg-white"
              }`}
            >
              <div className="flex items-center gap-2 text-sm md:text-base">
                {pkg.icon}
                {pkg.name}
              </div>
            </button>
          ))}
        </div>
        {/* Main Card */}
        <div
          className="mt-16 bg-white/70 backdrop-blur-xl border border-white/60 
  rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.08)]
  overflow-hidden grid lg:grid-cols-2
  h-[850px]"
        >
          {/* LEFT */}
          <div className="relative p-8 md:p-14 flex flex-col justify-between h-full">
            {/* Blur Accent */}
            <div className="absolute top-10 right-10 w-44 h-44 bg-[#FFD4B8]/40 blur-[90px] rounded-full"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="bg-[#FFF1E8] text-[#E8875E] p-3 rounded-2xl">
                  {activePackage.icon}
                </div>

                <span className="text-xs tracking-[0.2em] uppercase bg-[#FFF2EA] text-[#D78762] px-4 py-2 rounded-full">
                  Most Popular
                </span>
              </div>

              <h3 className="mt-8 text-4xl md:text-6xl font-serif leading-tight text-[#171717]">
                {activePackage.name}
              </h3>

              <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-lg">
                {activePackage.description}
              </p>
            </div>

            <div className="relative z-10">
              <div>
                <span className="text-gray-400 uppercase tracking-widest text-sm">
                  Starting Price
                </span>

                <h4 className="mt-3 text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FF7A5C] to-[#FFB36B] text-transparent bg-clip-text">
                  {activePackage.price}
                </h4>
              </div>

              <button
                className="group mt-10 bg-[#171717] hover:bg-black transition-all duration-300
                text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-lg"
              >
                Konsultasi Sekarang
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-[#FCFAF8] border-l border-[#F1ECE7] p-8 md:p-14 flex flex-col h-full">
            <div>
              <span className="uppercase tracking-[0.25em] text-[#C9A48E] text-sm">
                Included Features
              </span>

              <h4 className="mt-4 text-3xl font-serif text-[#171717]">
                What's Included
              </h4>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 content-start">
              {activePackage.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#F2ECE7]
      rounded-2xl px-5 py-4
      hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="min-w-[38px] h-[38px]
          rounded-xl flex items-center justify-center
          bg-gradient-to-br from-[#FFF0E7] to-[#FFE2D1]
          text-[#E88960]"
                    >
                      <Check size={16} />
                    </div>

                    <p className="text-[15px] leading-relaxed text-gray-700">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
