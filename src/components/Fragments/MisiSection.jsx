import MisiImage from "../../assets/misi.png";
import Rectagle from "../../assets/rectagle.png";

export default function MisiSection() {
  const datas = [
    { headline: "Kreativitas Tanpa Batas" },
    { headline: "Profesionalisme Tinggi" },
    { headline: "Kepuasan Klien Utama" },
  ];

  return (
    <section className="flex flex-col justify-center  md:flex-row items-center gap-10 bg-[#F7F3F0] px-5 md:px-20 py-16">
      
      {/* TEXT */}
      <div className="flex flex-col  gap-6 max-w-xl text-center md:text-left">
        
        <span className="font-base text-[#FF8B5A] text-sm md:text-lg">
          MISI KAMI
        </span>

        <h2 className="font-headline font-semibold text-3xl md:text-5xl leading-tight">
          <span className="text-[#666666] block">Komitmen Kami</span>
          <span className="text-[#FF5A5A] block">untuk Anda</span>
        </h2>

        <img src={Rectagle} alt="" className="w-10 mx-auto md:mx-0" />

        <p className="text-sm md:text-lg text-[#666666] leading-relaxed">
          Kami berkomitmen untuk menghadirkan pengalaman acara yang tak
          terlupakan bagi setiap klien. Setiap detail dirancang dengan
          penuh cinta, presisi, dan dedikasi tinggi agar momen spesial Anda
          menjadi kenangan abadi.
          <br /><br />
          Tim profesional kami bekerja keras dari tahap perencanaan hingga
          eksekusi, memastikan setiap aspek berjalan sempurna karena bagi
          kami, kepuasan Anda adalah keberhasilan kami.
        </p>

        {/* LIST */}
        <div className="flex flex-col gap-3 mt-4">
          {datas.map((item, index) => (
            <div key={index} className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-[#FF8B5A]">✦</span>
              <span className="text-[#666666] text-sm md:text-lg">
                {item.headline}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE */}
      <div >
        <img
          src={MisiImage}
          alt=""
          className="w-full max-w-[400px] md:max-w-[480px] h-auto object-cover"
        />
      </div>

    </section>
  );
}