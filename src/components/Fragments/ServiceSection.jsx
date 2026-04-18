import ServiceImage1 from "../../assets/service1.png";
import ServiceImage2 from "../../assets/service2.png";
import ServiceImage3 from "../../assets/service3.png";
import ServiceImage4 from "../../assets/service4.png";
import ServiceImage5 from "../../assets/service5.png";
import Background from "../../assets/ServicesBg.png";

export default function ServiceSection() {
  const dataService = [
    // {
    //   image: ServiceImage1,
    //   title: "Wedding Organizer",
    //   detail:
    //     "Kami merancang pernikahan impian Anda dari awal hingga akhir dengan konsep yang personal dan berkesan.",
    //   number: "01",
    // },
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
    <section id="service" className="px-5  md:px-20 pt-26">
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

      <div className="grid grid-cols-1 gap-6 font-headline">
        <div className="w-full max-w-[1150px] mx-auto hover:scale-[1.02] transition duration-300 ease-in-out relative rounded-xl shadow-md overflow-hidden group">
          <div className="group-hover:bg-[#FF8B5A]/40 transition duration-300 ease-in-out absolute inset-0 rounded-xl z-10"></div>

          <img src={Background} className="w-full" alt="" />

          <span className="absolute bottom-2 right-4 text-4xl sm:text-6xl md:text-8xl lg:text-9xl group-hover:text-white z-20 opacity-70 font-headline text-[#FF5A5A]">
            01
          </span>

          <h3 className="absolute left-4 bottom-6 sm:bottom-8 md:bottom-7 group-hover:bottom-20 md:group-hover:bottom-24 text-lg sm:text-2xl md:text-4xl lg:text-6xl font-headline text-[#FF8B5A] group-hover:text-[#FF5A5A] transition-all duration-500 z-20">
            Wedding Organizer
          </h3>

          <p className="absolute opacity-0 group-hover:opacity-100 bottom-6 sm:bottom-8 md:bottom-7 left-4 text-xs sm:text-sm md:text-base lg:text-xl text-white transition duration-300 z-20 leading-relaxed">
            Kami merancang pernikahan impian Anda dari awal hingga akhir <br />
            dengan konsep yang personal dan berkesan
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:mx-75 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-6">
        {dataService.map((item, index) => (
          <div
            key={index}
            className="relative hover:transform-gpu hover:-skew-1 hover:translate-1 hover:scale-105 group-hover:opacity-0 transition delay-150 duration-300 ease-in-out  bg-[#F7F3F0] p-6 rounded-xl shadow-md overflow-hidden group"
          >
            <div className="absolute -z-1  bg-[url('./assets/ServicesBg.png')] opacity-0 group-hover:opacity-70 w-[500px] h-[500px]  top-0 right-0">s</div>
            <span className="absolute  top-4 right-4 text-5xl md:text-7xl font-headline text-[#FF5A5A] group-hover:text-[#F7F3F0] opacity-40">
              {item.number}
            </span>

            <img
              src={item.image}
              alt=""
              className="group-hover:sepia w-10 mb-4"
            />

            <h3 className="font-headline text-xl z-4 md:text-2xl text-[#FF8B5A] group-hover:text-shadow-lg group-hover:font-bold group-hover:text-[#FF5A5A] mb-2">
              {item.title}
            </h3>

            <p className="group-hover:text-shadow-lg text-[#00000080] group-hover:text-white text-sm  md:text-base leading-relaxed">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>  
  );
}
