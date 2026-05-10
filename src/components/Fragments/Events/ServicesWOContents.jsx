export default function ServicesWOContents() {
  const ServicesWO = [
    {
      name: "MC",
      image: "/src/assets/icons/mc.png",
    },
    {
      name: "Makeup",
      image: "/src/assets/icons/makeup.png",
    },
    {
      name: "Lighting",
      image: "/src/assets/icons/lighting.png",
    },
    {
      name: "Wedding Dress",
      image: "/src/assets/icons/weddingdress.png",
    },
    {
      name: "Documentation",
      image: "/src/assets/icons/documentation.png",
    },
    {
      name: "Decoration",
      image: "/src/assets/icons/decoration.png",
    },
    {
      name: "Entertainment",
      image: "/src/assets/icons/entertainment.png",
    },
    {
      name: "Team Wedding",
      image: "/src/assets/icons/team.png",
    },
    {
      name: "Bridal Suit",
      image: "/src/assets/icons/bridalsuit.png",
    },
  ];

  return (
    <section className="bg-[#F7F3F0] py-16 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-headline font-medium mb-4">
            Layanan <span className="text-[#FF8B5A]">Ala Carte WO</span>
          </h1>

          <p className="font-base text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Pilih dan sesuaikan setiap detail kebutuhan acara Anda tanpa batasan
            paket.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {ServicesWO.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                border border-gray-200
                rounded-2xl
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                flex flex-col
                items-center
                justify-center
                p-6
                min-h-[160px]
                group
              "
            >
              <img
                src={item.image}
                alt={item.name}
                className="
                  w-14 h-14 object-contain
                  mb-4
                  group-hover:scale-110
                  transition
                  duration-300
                "
              />

              <span className="text-gray-700 text-sm md:text-base text-center font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
