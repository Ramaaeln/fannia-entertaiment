export default function MarqueeSection() {
  const items = [
    "Wedding MC",
    "Bridal Package",
    "Vendor Management",
    "Entertainment",
    "Wedding Planning",
    "Dekorasi & Floral",
    "Dokumentasi",
  ];

  return (
    <div className="marquee-container relative overflow-hidden bg-gradient-to-r from-[#FF5A5A] to-[#FF8B5A] py-4">

      {/* fade kiri */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#FF5A5A] to-transparent z-10" />

      {/* fade kanan */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#FF8B5A] to-transparent z-10" />

      <div className="marquee">

        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center shrink-0 whitespace-nowrap mx-8 text-white"
          >
            <span className="text-lg">✦</span>

            <span className="ml-3 text-sm md:text-base font-medium">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}