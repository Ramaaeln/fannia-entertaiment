import GalleryBg from "../../../assets/HeroEventSection.png";
import {
  Sparkles,
  ArrowDown,
} from "lucide-react";

export default function GalleryHeroSection() {
  return (
    <section
      id="gallery-hero"
      className="relative overflow-hidden
      w-full min-h-screen
      flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={GalleryBg}
          alt="Gallery Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Gradient */}
        <div
          className="absolute inset-0
          bg-gradient-to-b
          from-black/60 via-black/40 to-black/80"
        />

        {/* Blur Accent */}
        <div
          className="absolute top-0 left-0
          w-[400px] h-[400px]
          bg-[#FFB38A]/20 blur-[150px] rounded-full"
        />

        <div
          className="absolute bottom-0 right-0
          w-[400px] h-[400px]
          bg-[#FFD45A]/10 blur-[160px] rounded-full"
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10
        max-w-5xl mx-auto
        px-5 md:px-10
        text-center"
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2
          bg-white/10 backdrop-blur-xl
          border border-white/10
          rounded-full px-5 py-2"
        >
          <Sparkles size={14} className="text-[#FFD45A]" />

          <span className="text-sm tracking-wide text-[#FFE3A1]">
            Elegant Wedding & Event Moments
          </span>
        </div>

        {/* Title */}
        <h1
          className="mt-8 text-5xl md:text-7xl
          font-headline text-white
          leading-tight"
        >
          Our
          <span
            className="ml-4 bg-gradient-to-r
            from-[#FFB36B] via-[#FF8B5A] to-[#FFD45A]
            bg-clip-text text-transparent italic"
          >
            Gallery
          </span>
        </h1>

        {/* Description */}
        <p
          className="mt-8 text-sm md:text-xl
          text-white/75 leading-relaxed
          max-w-3xl mx-auto"
        >
          Kumpulan momen terbaik yang telah kami ciptakan bersama
          para klien dengan sentuhan elegan, hangat, dan penuh makna.
        </p>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="#gallery"
            className="group
            inline-flex items-center gap-3
            bg-gradient-to-r
            from-[#FF8A5B] to-[#FFB36B]
            text-white px-8 py-4 rounded-full
            shadow-[0_10px_30px_rgba(255,160,100,0.25)]
            hover:scale-105 transition-all duration-300"
          >
            Explore Gallery

            <ArrowDown
              size={18}
              className="group-hover:translate-y-1 transition-all"
            />
          </a>
        </div>
      </div>
    </section>
  );
}