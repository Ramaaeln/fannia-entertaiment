import ServiceImage1 from "../../assets/service1.png"
import ServiceImage2 from "../../assets/service2.png"
import ServiceImage3 from "../../assets/service3.png"
import ServiceImage4 from "../../assets/service4.png"
import ServiceImage5 from "../../assets/service5.png"
export default function ServiceSection() {
  const dataService = [
    {
      image: ServiceImage1,
      title: "Wedding  Organizer",
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
        "Tim kreatif kami menghadirkan tema dan dekorasi unik yang mencerminkan kepribadian dan keinginan Anda.",
      number: "04",
    },
    {
      image: ServiceImage5,
      title: "Entertainment Services",
      detail:
        "Hiburan berkualitas tinggi dari performer terbaik untuk memeriahkan setiap acara Anda.",
      number: "05",
    },
  ];
  return (
  <section className="h-screen p-30">
    <div className=" text-center p-10">
        <span className="font-base text-[#FF8B5A] font-medium uppercase">apa yang kami tawarkan</span>
        <div className="flex gap-1  justify-center font-headline font-medium text-5xl">
            <span>Layanan</span><span className="text-[#FF8B5A]">Kami</span>    
        </div>
        <p className="text-[#666666]">Kami menyediakan solusi lengkap untuk setiap jenis acara Anda</p>
    </div>
    <div className="grid grid-cols-3 gap-8 mx-50">
        {dataService.map((item) => (
            <div key={item} className="flex flex-col gap-4 w-[380px] p-7 rounded-xl shadow-xl  h-[279px]  bg-[#F7F3F0]   ">
            <img src={item.image} alt="" className="w-10" />
            <div className="flex flex-col gap-7">
                <div className="font-headline text-[#FF8B5A] font-bold text-3xl">{item.title}</div>
                <div className="text-[#00000080]">{item.detail}</div>
            </div>
            <div className="font-headline text-8xl text-[#FF5A5A] absolute my-35 ml-60 opacity-10">{item.number}</div>
            </div>
        ))}
    </div>
  </section>

  );
}
