import HeroEventBg from "/src/assets/HeroEventSection.png";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="event"
      className="relative overflow-hidden
      h-[420px] md:h-[520px]
      flex items-center justify-center text-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HeroEventBg})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Gradient */}
        <div
          className="absolute inset-0
          bg-gradient-to-b from-black/40 via-black/50 to-black/75"
        />

        {/* Blur Accent */}
        <div
          className="absolute top-[-120px] left-[-100px]
          w-[350px] h-[350px]
          bg-[#FFB38A]/20 blur-[140px] rounded-full"
        />

        <div
          className="absolute bottom-[-120px] right-[-100px]
          w-[350px] h-[350px]
          bg-[#FFD45A]/10 blur-[150px] rounded-full"
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10
        px-6 md:px-10
        max-w-4xl
        flex flex-col items-center"
      >
        {/* Badge */}
        <div
          className="mb-7 inline-flex items-center gap-3
          bg-white/10 border border-white/15
          backdrop-blur-md
          rounded-full px-5 py-2.5"
        >
          <Sparkles size={15} className="text-[#FFD45A]" />

          <span className="text-sm tracking-wide text-[#FFE3A1]">
            Premium Event Organizer
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-5xl md:text-7xl
          font-headline font-semibold
          leading-[1.05] tracking-tight"
        >
          <span
            className="bg-gradient-to-r
            from-[#FFB36B] via-[#FF8B5A] to-[#FFD45A]
            bg-clip-text text-transparent italic"
          >
            Layanan
          </span>

          <span className="text-white ml-4">
            Event
          </span>
        </h1>

        {/* Description */}
        <p
          className="mt-8 max-w-2xl
          text-sm md:text-lg
          text-white/75 leading-relaxed"
        >
          One Stop Solution for Your Special Day.
          <br className="hidden md:block" />
          Kami siap membantu menciptakan momen yang elegan,
          berkesan, dan tak terlupakan dengan pelayanan profesional.
        </p>

        {/* Bottom Line */}
        <div
          className="mt-10 w-32 h-[2px]
          bg-gradient-to-r
          from-transparent via-[#FFB36B] to-transparent"
        />
      </div>
    </section>
  );
}