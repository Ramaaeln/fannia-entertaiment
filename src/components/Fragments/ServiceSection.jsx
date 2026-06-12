import ServiceImage1 from "../../assets/ServicesBg.jpg";
import ServiceImage2 from "../../assets/service2.png";
import ServiceImage3 from "../../assets/service3.png";
import ServiceImage4 from "../../assets/service4.png";
import ServiceImage5 from "../../assets/service5.png";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function ServiceSection() {
  const dataService = [
    {
      image: ServiceImage1,
      title: "Wedding Organizer",
      detail:
        "Kami merancang pernikahan impian Anda dari awal hingga akhir dengan konsep personal dan elegan.",
      number: "01",
    },
    {
      image: ServiceImage2,
      title: "Event Planning",
      detail:
        "Perencanaan acara profesional dari intimate event hingga luxury celebration.",
      number: "02",
    },
    {
      image: ServiceImage3,
      title: "Vendor Management",
      detail:
        "Vendor terpercaya dengan kualitas terbaik untuk memastikan acara berjalan sempurna.",
      number: "03",
    },
    {
      image: ServiceImage4,
      title: "Creative Concept",
      detail:
        "Konsep kreatif modern dan dekorasi eksklusif yang mencerminkan karakter Anda.",
      number: "04",
    },
    {
      image: ServiceImage5,
      title: "Entertainment",
      detail:
        "Entertainment premium untuk menciptakan pengalaman acara yang lebih hidup.",
      number: "05",
    },
  ];

  return (
    <section
      id="service"
      className="relative overflow-hidden
      bg-[#FAF7F4]
      py-24 px-5 md:px-10"
    >
      {/* Blur Accent */}
      <div
        className="absolute top-0 left-0
        w-[350px] h-[350px]
        bg-[#FFB38A]/20 blur-[150px] rounded-full"
      />

      <div
        className="absolute bottom-0 right-0
        w-[350px] h-[350px]
        bg-[#FFD45A]/10 blur-[150px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2
            bg-white border border-[#EFE7E1]
            rounded-full px-5 py-2 shadow-sm"
          >
            <Sparkles size={14} className="text-[#E58B63]" />

            <span className="text-sm tracking-wide text-[#C9845E]">
              Premium Wedding & Event Service
            </span>
          </div>

          {/* Title */}
          <h2
            className="mt-6 text-4xl md:text-6xl
            font-headline font-medium
            text-[#1B1B1B]"
          >
            Layanan
            <span
              className="ml-3 bg-gradient-to-r
              from-[#FFB36B] via-[#FF8B5A] to-[#FF6A5B]
              bg-clip-text text-transparent italic"
            >
              Kami
            </span>
          </h2>

          {/* Desc */}
          <p
            className="mt-6 text-sm md:text-lg
            text-gray-500 leading-relaxed"
          >
            Kami menyediakan solusi lengkap untuk menghadirkan acara
            yang elegan, berkesan, dan profesional.
          </p>
        </div>

        {/* Main Featured Card */}
        <div
          className="mt-20 relative overflow-hidden
          rounded-[40px]
          min-h-[520px]
          group"
        >
          {/* Background */}
          <img
            src={ServiceImage1}
            alt="Wedding Organizer"
            className="absolute inset-0 w-full h-full object-cover
            group-hover:scale-105 transition-all duration-700"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0
            bg-gradient-to-t
            from-black via-black/50 to-black/20"
          />

          {/* Blur Accent */}
          <div
            className="absolute top-0 right-0
            w-[300px] h-[300px]
            bg-[#FFB38A]/20 blur-[120px]"
          />

          {/* Content */}
          <div
            className="relative z-10
            h-full flex flex-col justify-end
            p-8 md:p-14"
          >
            <span
              className="absolute top-8 right-8
              text-7xl md:text-9xl
              font-headline text-white/10"
            >
              01
            </span>

            <div
              className="max-w-3xl
              translate-y-6
              group-hover:translate-y-0
              transition-all duration-500"
            >
              <div
                className="inline-flex items-center gap-2
                bg-white/10 backdrop-blur-md
                border border-white/10
                rounded-full px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#FFD45A]" />

                <span className="text-sm text-[#FFE3A1] tracking-wide">
                  Featured Service
                </span>
              </div>

              <h3
                className="text-4xl md:text-7xl
                font-headline text-white leading-tight"
              >
                Wedding Organizer
              </h3>

              <p
                className="mt-6 text-white/75
                text-sm md:text-lg
                leading-relaxed max-w-2xl"
              >
                Kami merancang pernikahan impian Anda dengan konsep
                eksklusif, detail elegan, dan pengalaman yang tak terlupakan.
              </p>

              <a
                href="#service1"
                className="group/btn mt-8
                inline-flex items-center gap-3
                bg-gradient-to-r
                from-[#FF8A5B] to-[#FFB36B]
                text-white px-7 py-4 rounded-full
                shadow-[0_10px_30px_rgba(255,160,100,0.25)]
                hover:scale-105 transition-all duration-300"
              >
                Explore Service

                <ArrowUpRight
                  size={18}
                  className="group-hover/btn:-translate-y-0.5
                  group-hover/btn:translate-x-0.5
                  transition-all"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Grid Cards */}
        <div
        id="service1"
          className="-mt-8 pt-26
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-6"
        >
          {dataService.slice(1).map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden
              bg-white/85 backdrop-blur-xl
              border border-[#F2ECE7]
              rounded-[30px]
              p-7 min-h-[320px]
              flex flex-col justify-between
              hover:-translate-y-2
              hover:border-[#FFD7C3]
              hover:shadow-[0_20px_50px_rgba(255,180,130,0.15)]
              transition-all duration-500"
            >
              {/* Number */}
              <span
                className="absolute top-5 right-5
                text-6xl font-headline
                text-[#F4E7DD]"
              >
                {item.number}
              </span>

              {/* Icon */}
              <div
                className="w-20 h-20 rounded-[24px]
                bg-gradient-to-br
                from-[#FFF1E8] to-[#FFE4D5]
                flex items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 object-contain
                  group-hover:scale-110
                  transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="mt-10">
                <h3
                  className="text-2xl font-headline
                  text-[#2B2B2B]"
                >
                  {item.title}
                </h3>

                <p
                  className="mt-4 text-sm md:text-base
                  text-gray-500 leading-relaxed"
                >
                  {item.detail}
                </p>
              </div>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}