import Recent from "../../assets/recent.png";

export default function RecentSection() {
  const recent = [
    { value: "150+", detail: "Event Berhasil" },
    { value: "100+", detail: "Klien Puas" },
    { value: "5+", detail: "Tahun Pengalaman" },
    { value: "30+", detail: "Vendor Partners" },
  ];

  return (
    <section className="relative w-full">
      
      {/* BACKGROUND */}
      <img
        src={Recent}
        alt=""
        className="w-full h-[300px] md:h-[400px] object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 flex items-center">
        
        {/* CONTENT */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full px-5 md:px-20 text-center">
          {recent.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              
              <span className="font-headline text-3xl md:text-6xl text-[#FF5A5A]">
                {item.value}
              </span>

              <span className="text-[#F7F3F0] text-sm md:text-xl">
                {item.detail}
              </span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}