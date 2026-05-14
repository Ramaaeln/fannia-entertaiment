import Icons1 from "../../../assets/icons/mc.png";
import Icons2 from "../../../assets/icons/makeup.png";
import Icons3 from "../../../assets/icons/lighting.png";
import Icons4 from "../../../assets/icons/weddingdress.png";
import Icons5 from "../../../assets/icons/documentation.png";
import Icons6 from "../../../assets/icons/decoration.png";
import Icons7 from "../../../assets/icons/entertainment.png";
import Icons8 from "../../../assets/icons/team.png";
import Icons9 from "../../../assets/icons/bridalsuit.png";
export default function ServicesWOContents() {
  const ServicesWO = [
    {
      name: "MC",
      image: Icons1,
    },
    {
      name: "Makeup",
      image: Icons2,
    },
    {
      name: "Lighting",
      image: Icons3,
    },
    {
      name: "Wedding Dress",
      image: Icons4,
    },
    {
      name: "Documentation",
      image: Icons5,
    },
    {
      name: "Decoration",
      image: Icons6,
    },
    {
      name: "Entertainment",
      image: Icons7,
    },
    {
      name: "Team Wedding",
      image: Icons8,
    },
    {
      name: "Bridal Suit",
      image: Icons9,
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
