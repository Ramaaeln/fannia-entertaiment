import GalleryImage from "../../assets/gallery.png";

export default function GallerySection() {
  const dataGallery = [
    {
      image: GalleryImage,
      title: "Wedding",
      subtitle: "The Perfect Union",
    },
    {
      image: GalleryImage,
      title: "Sweet 17",
      subtitle: "Birthday Celebration",
    },
    {
      image: GalleryImage,
      title: "Corporate",
      subtitle: "Annual Gala Night",
    },
    {
      image: GalleryImage,
      title: "Music Event",
      subtitle: "Concert Spectacular",
    },
    {
      image: GalleryImage,
      title: "Wedding",
      subtitle: "Garden Ceremony",
    },
    {
      image: GalleryImage,
      title: "Intimate Engagement",
      subtitle: "One Step Closer to Forever",
    },
  ];

  return (
    <section className="px-5 md:px-20 py-16">
      
      {/* HEADER */}
      <div className="text-center mb-10">
        <span className="font-base text-[#FF8B5A] uppercase text-sm md:text-base">
          Karya Terbaik Kami
        </span>

        <h2 className="font-headline text-3xl md:text-5xl mt-2">
          Gallery <span className="text-[#FF8B5A]">Event</span>
        </h2>

        <p className="text-[#666666] text-sm md:text-base mt-2 max-w-xl mx-auto">
          Setiap momen adalah karya seni yang kami ciptakan bersama Anda
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataGallery.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt=""
              className="w-full h-[220px] md:h-[260px] object-cover group-hover:scale-110 transition duration-300"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
              <span className="text-[#FF8B5A] text-sm uppercase">
                {item.title}
              </span>
              <span className="text-white font-headline text-lg md:text-xl">
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="w-full text-center mt-10">
        <a
          href=""
          className="bg-gradient-to-r from-[#FF8B5A] to-[#FF5A5A] px-6 py-3 rounded-full text-white text-sm md:text-base"
        >
          Lihat Semua Portofolio
        </a>
      </div>
    </section>
  );
}