import Recent from "../../assets/recent.png";
export default function RecentSection() {
  const recent = [
    {
      recent: "150+",
      detail: "Event Berhasil",
    },
    {
      recent: "100+",
      detail: "Klient Puas",
    },
    {
      recent: "5+",
      detail: "Tahun Pengalaman",
    },
    {
      recent: "30+",
      detail: "Vendor Partners",
    },
  ];
  return (
    <section>
      <img src={Recent} className="w-full" alt="" />
      <div className="absolute w-full -mt-80 z-4">
          <div  className="flex justify-around mx-20">
        {recent.map((item, index) => (
            <div key={item} className="font-light flex flex-col gap-7 items-center">
            <div className="font-headline text-8xl text-[#FF5A5A]">{item.recent}</div>
            <div className="text-[#F7F3F0] text-2xl">{item.detail}</div>
            </div>
        ))}
          </div>
      </div>
    </section>
  );
}
