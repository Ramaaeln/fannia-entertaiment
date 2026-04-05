import AboutImage from "../../assets/about.png";
import LogosFannia from "../../assets/Fannia Entertainment.png";
import Rectagle from "../../assets/rectagle.png";
import Pengalaman from "../../assets/pengalaman.png";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 px-5 md:px-20 py-16">
      
      <div className="relative">
        <img
          src={AboutImage}
          alt=""
          className="w-full max-w-[500px] h-auto object-cover"
        />

        <img
          src={Pengalaman}
          alt=""
          className="absolute bottom-[-20px] right-[-10px] w-32 md:w-40"
        />
      </div>

      <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
        
        <h1 className="font-base text-lg md:text-xl text-[#FF8B5A]">
          TENTANG KAMI
        </h1>

        <img src={LogosFannia} className="w-60 md:w-80 mx-auto md:mx-0" alt="" />
        <img src={Rectagle} className="w-20" alt="" />

        <p className="text-sm md:text-lg font-base leading-relaxed">
          Fannia Entertainment merupakan Wedding Organizer dan Event Organizer
          yang berfokus pada perencanaan serta pengelolaan berbagai acara
          dengan konsep yang kreatif dan profesional.
          <br /><br />
          Dengan pengalaman lebih dari 5 tahun, kami telah sukses
          menyelenggarakan ratusan acara berkesan dari pernikahan mewah hingga
          corporate event berskala besar.
        </p>

        <a
          href=""
          className="text-white w-fit mx-auto md:mx-0 bg-gradient-to-r from-[#FF5A5A] to-[#FF8B5A] px-6 py-3 rounded-full font-base text-sm md:text-lg"
        >
          Lihat Portofolio
        </a>
      </div>
    </section>
  );
}