import FAQSection from "../FAQSection";
import FooterSection from "../FooterSection";
import MitraVendorContent from "./MitraVendorContents";
import ServicesWOContents from "./ServicesWOContents";
import WorkProcess from "./WorkProcessContent";
import HeroImage from "../../../assets/EventImageWO.png";
import Images1 from "../../../assets/WOImages2.png";
import Images2 from "../../../assets/WOImages3.png";
import Images3 from "../../../assets/WOImages4.png";
import Images4 from "../../../assets/WOImages5.png";
import Images5 from "../../../assets/WOImages6.png";


export default function WeddingContent() {
  const weddingContent = [
    {
      title: "Rias Busana",
      description: "Make-up artist profesional untuk pengantin dan keluarga.",
      features: ["MUA", "Gaun pengantin", "Stylist", "Aksesoris"],
      images: Images1,
    },
    {
      title: "Dekorasi & Tenda",
      description:
        "Transformasi ruang pesta dengan tema impian, dari estetik hingga megah.",
      features: ["Garden", "Modern", "Classic", "Bohemian"],
      images: Images2,
    },
    {
      title: "Dokumentasi",
      description:
        "Tim Foto & Videografer untuk mengabadikan momen once-in-a-lifetime.",
      features: ["Foto", "Videografi"],
      images: Images3,
    },
    {
      title: "Entertainment",
      description: "Live music, sound system, dan pengisi acara.",
      features: ["Live music", "Sound system", "Pengisi acara"],
      images: Images4,
    },
    {
      title: "Master of Ceremony",
      description: "MC berpengalaman yang menghidupkan suasana acara.",
      features: ["MC"],
      images: Images5,
    },
  ];

  return (
    <section className="w-full  ">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl text-center font-headline mb-4">
          Wedding Organizer
        </h2>

        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
          Kami membantu mewujudkan pernikahan impian Anda dengan konsep elegan dan berkesan.
        </p>

        {/* HERO IMAGE */}
        <div className="relative rounded-3xl overflow-hidden">

          <img
            src={HeroImage}
            alt="Wedding Organizer"
            className="w-full h-[350px] md:h-[600px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40" />

          {/* LEFT CONTENT */}
          <div className="absolute bottom-6 left-6 md:left-12 max-w-2xl text-white z-10">

            <h2 className="text-2xl md:text-5xl text-[#FF5A5A] font-headline mb-4">
              Full Wedding Planning
            </h2>

            <p className="text-sm md:text-base leading-relaxed mb-5">
              Perencanaan menyeluruh dari konsultasi pertama hingga momen terakhir
              di hari H. Kami hadir di setiap langkah perjalanan cinta Anda.
            </p>

            <div className="flex flex-wrap gap-2 text-xs md:text-sm">
              {[
                "Konsultasi personal",
                "Budget management",
                "Venue booking",
                "Timeline lengkap",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* PRICE */}
          <div className="absolute bottom-6 right-6 md:right-12 text-right z-10">
            <p className="text-xl md:text-3xl text-[#FF5A5A] font-headline">
              Start From
            </p>

            <h2 className="text-5xl md:text-8xl text-[#FF5A5A] font-headline leading-none">
              40
              <span className="text-lg md:text-3xl"> Jt</span>
            </h2>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {weddingContent.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group"
            >
              <img
                src={item.images}
                alt={item.title}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              {/* content */}
              <div className="absolute bottom-0 p-5 z-10 text-white">

                <h3 className="text-xl text-[#FF5A5A] font-headline mb-2">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs">
                  {item.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OTHER COMPONENTS */}
        

      </div>
          <ServicesWOContents />

          <WorkProcess />
          <MitraVendorContent/>
          <FAQSection/>
          <FooterSection/>
    </section>
  );
}