import ProfileTestimony from "../../assets/profileTestimony.png";
export default function TestimonySection() {
  const dataTestimony = [
    {
      image: ProfileTestimony,
      title: "Hilmy & Sasa",
      subtitle: "Wedding - September 2023",
      deskripsi:
        "Fannia Entertainment benar-benar membuat hari pernikahan kami menjadi luar biasa. Setiap detail dipersiapkan dengan sempurna. Sangat direkomendasikan!",
    },
  ];
  return (
    <section className=" bg-[#F7F3F0] p-30">
      <div className=" text-center p-10">
        <span className="font-base text-[#FF8B5A] font-medium uppercase">
          Kata Mereka
        </span>
        <div className="flex gap-1  justify-center font-headline font-medium text-5xl">
          <span>Testimoni</span>
          <span className="text-[#FF8B5A]">Klien</span>
        </div>
      </div>
      <div className="flex justify-center  w-full">
        {dataTestimony.map((item) => (
          <div
            key={item}
            className=" flex flex-col w-[980px] h-[284px] shadow-lg gap-2 bg-white p-20  rounded-xl"
          >
            <div className="flex flex-col gap-2  ml-10 z-2">
              <p className="text-[#666666] font-headline text-xl">
                {item.deskripsi}
              </p>
              <div className="flex items-center gap-4">
                <img src={item.image} className="w-12 h-12" alt="" />
                <div className="flex flex-col gap-2">
                <h4 className="font-headline text-black font-medium text-lg ">
                  {item.title}
                </h4>
                <span className="text-black font-base text-xs">
                  {item.subtitle}
                </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
