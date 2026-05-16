import { Link } from "react-router";
import HeroBg from "../../../assets/HeroSectionPackages.png";
import { ArrowDownRight } from "lucide-react";
import ListPackagesSection from "./ListPackage";

export default function HeroSection() {
  return (
    <section id="/packages" className="relative h-screen overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HeroBg})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

        {/* Blur Accent */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFB38A]/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FFD45A]/10 blur-[180px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-5xl">
          
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2
            bg-white/10 border border-white/20
            backdrop-blur-md rounded-full
            px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFD45A]" />

            <span className="text-sm md:text-base tracking-wide text-[#FFE3A1]">
              Investasi Terbaik untuk Acara Anda
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-headline text-white
            text-5xl md:text-8xl
            leading-[1.05] tracking-tight"
          >
            Pilih
            <span
              className="mx-4 bg-gradient-to-r
              from-[#FFB36B] via-[#FF885A] to-[#FFD45A]
              bg-clip-text text-transparent italic"
            >
              Paket
            </span>
            Anda
          </h1>

          {/* Description */}
          <p
            className="mt-8 max-w-2xl mx-auto
            text-white/75 text-base md:text-xl
            leading-relaxed"
          >
            Semua paket telah dirancang secara eksklusif dengan layanan
            profesional, konsultasi tanpa batas, dan koordinasi penuh di hari
            spesial Anda.
          </p>
          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/packages#list-packages" 
              className="group bg-gradient-to-r
              from-[#FF7A5C] to-[#FFB36B]
              hover:scale-105 transition-all duration-300
              text-white px-8 py-4 rounded-full
              shadow-[0_15px_40px_rgba(255,140,90,0.35)]
              flex items-center justify-center gap-3"
            >
              Lihat Paket

              <ArrowDownRight
                size={18}
                className="group-hover:translate-x-1 group-hover:translate-y-1 transition"
              />
            </Link>

            <button
              className="bg-white/10 hover:bg-white/15
              border border-white/20
              backdrop-blur-md
              text-white px-8 py-4 rounded-full
              transition-all duration-300"
            >
              Konsultasi Sekarang
            </button>
          </div>

          {/* Bottom Stats */}
          <div
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6
            max-w-3xl mx-auto"
          >
            {[
              ["150+", "Wedding Event"],
              ["100%", "Happy Client"],
              ["5★", "Premium Service"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10
                backdrop-blur-md rounded-3xl py-6"
              >
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  {value}
                </h3>

                <p className="mt-2 text-sm text-white/60 tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
``