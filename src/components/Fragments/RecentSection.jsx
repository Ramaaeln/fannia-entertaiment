import Recent from "../../assets/recent.png";

export default function RecentSection() {
  const recent = [
    {
      value: "450+",
      detail: "Provent Trusted",
    },
    {
      value: "650+",
      detail: "Flawless Executions",
    },
    {
      value: "19",
      detail: "Years of Experience",
    },
    {
      value: "10+",
      detail: "Vendor Partners",
    },
  ];

  return (
    <section
      className="relative overflow-hidden
      py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={Recent}
          alt="Recent Background"
          className="w-full h-full object-cover scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient */}
        <div
          className="absolute inset-0
          bg-gradient-to-r
          from-black/80 via-black/60 to-black/70"
        />

        {/* Blur Accent */}
        <div
          className="absolute top-0 left-0
          w-[400px] h-[400px]
          bg-[#FFB38A]/20 blur-[160px] rounded-full"
        />

        <div
          className="absolute bottom-0 right-0
          w-[400px] h-[400px]
          bg-[#FFD45A]/10 blur-[170px] rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2
            bg-white/10 backdrop-blur-md
            border border-white/10
            rounded-full px-5 py-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFD45A]" />

            <span className="text-sm tracking-wide text-[#FFE3A1]">
              Trusted Wedding & Event Organizer
            </span>
          </div>

          {/* Title */}
          <h2
            className="mt-6 text-4xl md:text-6xl
            font-headline text-white
            leading-tight"
          >
            Momen Spesial,
            <span
              className="ml-3 bg-gradient-to-r
              from-[#FFB36B] via-[#FF8B5A] to-[#FFD45A]
              bg-clip-text text-transparent italic"
            >
              Pengalaman Tak Terlupakan
            </span>
          </h2>

          {/* Description */}
          <p
            className="mt-6 text-sm md:text-lg
            text-white/70 leading-relaxed"
          >
            Kami telah membantu banyak klien menciptakan acara yang
            elegan, profesional, dan penuh kesan dengan kualitas layanan
            terbaik.
          </p>
        </div>

        {/* Stats */}
        <div
          className="mt-16
          grid grid-cols-2 lg:grid-cols-4
          gap-5 md:gap-7"
        >
          {recent.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden
              bg-white/10 backdrop-blur-xl
              border border-white/10
              rounded-[32px]
              px-6 py-10
              text-center
              hover:-translate-y-2
              hover:bg-white/15
              transition-all duration-500"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0
                group-hover:opacity-100
                transition-all duration-500
                bg-gradient-to-b
                from-white/10 to-transparent"
              />

              {/* Number */}
              <h3
                className="relative z-10
                text-5xl md:text-6xl
                font-headline font-semibold
                bg-gradient-to-r
                from-[#FFD45A] via-[#FFB36B] to-[#FF8B5A]
                bg-clip-text text-transparent"
              >
                {item.value}
              </h3>

              {/* Label */}
              <p
                className="relative z-10
                mt-4 text-sm md:text-lg
                text-white/75 tracking-wide"
              >
                {item.detail}
              </p>

              {/* Bottom Line */}
              <div
                className="relative z-10
                mt-6 mx-auto
                w-16 h-[2px]
                bg-gradient-to-r
                from-transparent via-[#FFB36B] to-transparent"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}