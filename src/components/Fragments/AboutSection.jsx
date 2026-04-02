import AboutImage from "../../assets/about.png"
import LogosFannia from "../../assets/Fannia Entertainment.png"
import Rectagle from "../../assets/rectagle.png"
import Pengalaman from "../../assets/pengalaman.png"
export default function AboutSection() {
  return (
    <section className="h-screen flex  ">
      <img
        src={AboutImage}
        alt=""
        className="w-[586px] h-[631px] object-cover mt-20 ml-15"
      />
        <div className="absolute my-[32%] mx-[27%]"><img src={Pengalaman} alt="" /></div>
      <div className="mt-30 ml-20">
        <div className="flex flex-col gap-5">
          <h1 className="font-base text-xl text-[#FF8B5A]">TENTANG KAMI</h1>
          <img src={LogosFannia} width={400} alt="" />
          <img src={Rectagle} width={100} alt="" />
        </div>
        <div className="flex flex-col gap-20">
          <p className="text-lg mt-7 font-base">
            Fannia Entertainment merupakan Wedding Organizer dan <br /> Event Organizer
            yang berfokus pada perencanaan serta <br /> pengelolaan berbagai acara
            dengan konsep yang kreatif <br /> dan profesional.
            <br /> <br />
            Dengan pengalaman lebih dari 5 tahun, kami telah sukses <br />
            menyelenggarakan ratusan acara berkesan dari <br /> pernikahan mewah hingga
            corporate event berskala besar.
          </p>
          <a href="" className="text-white w-fit bg-gradient-to-r from-[#FF5A5A] to-[#FF8B5A] p-4 rounded-full font-base text-lg">Lihat Portofolio</a>
        </div>
      </div>
    </section>
  );
}
