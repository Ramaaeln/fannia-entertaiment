import ServiceImage1 from "../../assets/service1.png";
import ServiceImage2 from "../../assets/service2.png";
import ServiceImage3 from "../../assets/service3.png";
import ServiceImage4 from "../../assets/service4.png";
import ServiceImage5 from "../../assets/service5.png";

export default function ServiceSection() {
  const dataService = [
    {
      image: ServiceImage1,
      title: "Wedding Organizer",
      detail:
        "Kami merancang pernikahan impian Anda dari awal hingga akhir dengan konsep yang personal dan berkesan.",
      number: "01",
    },
    {
      image: ServiceImage2,
      title: "Event Planning",
      detail:
        "Perencanaan menyeluruh untuk semua jenis acara dari skala kecil hingga event besar dan mewah.",
      number: "02",
    },
    {
      image: ServiceImage3,
      title: "Vendor Management",
      detail:
        "Jaringan vendor terpercaya yang kami kelola untuk memastikan kualitas terbaik di setiap acara.",
      number: "03",
    },
    {
      image: ServiceImage4,
      title: "Creative Concept",
      detail:
        "Tim kreatif kami menghadirkan tema dan dekorasi unik yang mencerminkan kepribadian Anda.",
      number: "04",
    },
    {
      image: ServiceImage5,
      title: "Entertainment Services",
      detail:
        "Hiburan berkualitas tinggi dari performer terbaik untuk memeriahkan setiap acara.",
      number: "05",
    },
  ];

  return (
    <section className="px-5 md:px-20 py-16">
      
      {/* HEADER */}
      <div className="text-center mb-10">
        <span className="font-base text-[#FF8B5A] uppercase text-sm md:text-base">
          Apa yang Kami Tawarkan
        </span>

        <h2 className="font-headline text-3xl md:text-5xl mt-2">
          Layanan <span className="text-[#FF8B5A]">Kami</span>
        </h2>

        <p className="text-[#666666] text-sm md:text-base mt-2 max-w-xl mx-auto">
          Kami menyediakan solusi lengkap untuk setiap jenis acara Anda
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataService.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#F7F3F0] p-6 rounded-xl shadow-md overflow-hidden group"
          >
            {/* NUMBER (BACKGROUND) */}
            <span className="absolute top-4 right-4 text-5xl md:text-7xl font-headline text-[#FF5A5A] opacity-10">
              {item.number}
            </span>

            {/* ICON */}
            <img src={item.image} alt="" className="w-10 mb-4" />

            {/* CONTENT */}
            <h3 className="font-headline text-xl md:text-2xl text-[#FF8B5A] mb-2">
              {item.title}
            </h3>

            <p className="text-[#00000080] text-sm md:text-base leading-relaxed">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}