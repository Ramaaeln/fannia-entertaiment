import HeroBg from "../../assets/hero.jpg";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HeroBg})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/40" />

        {/* Blur Accent */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#FFB38A]/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FFD45A]/10 blur-[160px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3
            bg-white/10 backdrop-blur-md
            border border-white/15
            rounded-full px-5 py-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFD45A]" />

            <span className="text-sm md:text-base tracking-wide text-[#FFE4A8]">
              Wedding & Event Organizer
            </span>
          </div>

          {/* Heading */}
          <h1
            className="mt-8 flex flex-col
            text-5xl md:text-7xl lg:text-8xl
            font-headline text-white leading-[0.95]"
          >
            <span>Create Your</span>

            <span
              className="bg-gradient-to-r
              from-[#FFD45A] via-[#FF9B6A] to-[#FF6A5B]
              bg-clip-text text-transparent italic"
            >
              Dream Wedding
            </span>

            <span>& Memorable Events</span>
          </h1>

          {/* Description */}
          <p
            className="mt-8 max-w-2xl
            text-base md:text-xl
            text-white/75 leading-relaxed"
          >
            Kami membantu merancang pernikahan dan berbagai acara spesial
            dengan konsep elegan, modern, serta pelayanan profesional untuk
            menciptakan momen yang tak terlupakan.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            
            {/* Primary Button */}
            <a
              href="#service"
              className="group inline-flex items-center justify-center gap-3
              bg-gradient-to-r from-[#FF7A5C] to-[#FFB36B]
              hover:scale-105 transition-all duration-300
              text-white px-8 py-4 rounded-full
              shadow-[0_15px_40px_rgba(255,140,90,0.35)]"
            >
              Lihat Layanan

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3
              bg-white/10 hover:bg-white/15
              border border-white/15
              backdrop-blur-md
              text-white px-8 py-4 rounded-full
              transition-all duration-300"
            >
              <div
                className="w-9 h-9 rounded-full
                bg-white/15 flex items-center justify-center"
              >
                <Play size={14} fill="white" />
              </div>

              Konsultasi Sekarang
            </a>
          </div>

          {/* Bottom Info */}
          <div className="mt-12 flex flex-wrap gap-5">
            {[
              ["150+", "Wedding Event"],
              ["5★", "Premium Service"],
              ["100%", "Happy Client"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10
                backdrop-blur-md rounded-3xl
                px-6 py-5 min-w-[170px]"
              >
                <h3 className="text-3xl font-bold text-white">
                  {value}
                </h3>

                <p className="mt-1 text-sm tracking-wide text-white/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-40
        bg-gradient-to-t from-[#0F0F0F] to-transparent"
      />
    </section>
  );
}