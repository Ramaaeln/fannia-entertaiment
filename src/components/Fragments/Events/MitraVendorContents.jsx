export default function MitraVendorContent() {
  const mitra = [
    {
      name: "Gao Shan Kitchen",
      logo: "/src/assets/icons/gsk.png",
    },
    {
      name: "Gao Shan Kitchen",
      logo: "/src/assets/icons/gsk.png",
    },
    {
      name: "Gao Shan Kitchen",
      logo: "/src/assets/icons/gsk.png",
    },
    {
      name: "Gao Shan Kitchen",
      logo: "/src/assets/icons/gsk.png",
    },
    {
      name: "Gao Shan Kitchen",
      logo: "/src/assets/icons/gsk.png",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#F9F7F5]">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-sm text-[#FF8B5A] font-medium mb-3">
            Trusted Partners
          </p>

          <h2 className="font-headline text-3xl md:text-5xl mb-4">
            Mitra <span className="text-[#FF5A5A]">Vendor</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Kami bekerja sama dengan vendor-vendor terbaik untuk memberikan
            pengalaman acara yang elegan, profesional, dan berkesan.
          </p>
        </div>

        {/* vendor grid */}
        <div
          className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-5
        "
        >
          {mitra.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-2xl
                border border-gray-200
                p-6
                flex flex-col
                items-center
                justify-center
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {/* logo */}
              <div
                className="
                w-20 h-20
                md:w-24 md:h-24
                rounded-full
                bg-[#F7F3F0]
                flex items-center justify-center
                mb-4
                group-hover:scale-105
                transition
                duration-300
              "
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>

              {/* name */}
              <span
                className="
                text-sm md:text-base
                text-gray-700
                font-medium
                text-center
              "
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
