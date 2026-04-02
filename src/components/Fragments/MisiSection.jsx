import MisiImage from "../../assets/misi.png"
import Rectagle from "../../assets/rectagle.png"
export default function MisiSection() {
  const datas = [
    {
      headline: "Kreativitas Tanpa Batas",
    },
    {
      headline: "Profesionalisme Tinggi",
    },
    {
      headline: "Kepuasan Klien Utama",
    },
  ];
  return (
    <section className="flex justify-around bg-[#F7F3F0] p-40 h-screen">
      <div className="mt-20">
        <span className="font-base text-[#FF8B5A] text-lg">MISI KAMI</span>
        <div className="flex font-headline font-semibold text-6xl  flex-col">
          <span className="text-[#666666]">Komitment Kami</span>
          <span className="text-[#FF5A5A]">untuk Anda</span>
          <img src={Rectagle} alt="" className="mt-7 w-10" />
          <p className="text-xl font-base font-light text-[#666666] mt-5">
            Kami berkomitmen untuk menghadirkan pengalaman <br /> acara yang tak
            terlupakan bagi setiap klien. Setiap detail <br /> dirancang dengan
            penuh cinta, presisi, dan dedikasi tinggi <br /> agar momen spesial
            Anda menjadi kenangan abadi. <br /> <br /> Tim profesional kami
            bekerja keras dari tahap <br />
            perencanaan hingga eksekusi, memastikan setiap aspek <br /> berjalan
            sempurna karena bagi kami, kepuasan Anda <br /> adalah keberhasilan
            kami.
          </p>
        </div>
          {datas.map((datas, index) => (
            <div key={datas} className="text-xl flex mt-5 ">
              <span className="text-[#FF8B5A]">✦</span>
              <span className="text-[#666666]">{datas.headline}</span>
            </div>
          ))}
      </div>
      <img src={MisiImage} alt="" className="w-[480px] h-[524px]" />
    </section>
  );
}
