import GalleryImage from "../../assets/gallery.png"
export default function GallerySection() {
    const dataGallery = [
      {
        image: GalleryImage,
        title: "Wedding",
        subtitle:
            "The Perfect Union"
    },
      {
        image: GalleryImage,
        title: "Sweet 17",
        subtitle:
            "Birthday Celebration"
    },
      {
        image: GalleryImage,
        title: "Corporate ",
        subtitle:
            "Annual Gala Night"
    },
      {
        image: GalleryImage,
        title: "Music Event",
        subtitle:
            "Concert Spectacular"
    },
      {
        image: GalleryImage,
        title: "Wedding",
        subtitle:
            "Garden Ceremony"
    },
    {
        image: GalleryImage,
        title: "Intimate Engagement",
        subtitle:
            "One Step Closer to Forever"
    },
    ];
    return (
    <section className="h-screen p-30">
      <div className=" text-center p-10">
          <span className="font-base text-[#FF8B5A] font-medium uppercase">Karya Terbaik Kami</span>
          <div className="flex gap-1  justify-center font-headline font-medium text-5xl">
              <span>Gallery</span><span className="text-[#FF8B5A]">Event</span>    
          </div>
          <p className="text-[#666666]">Setiap momen adalah karya seni yang kami ciptakan bersama Anda</p>
      </div>
      <div className="grid grid-cols-3 gap-8 mx-50">
          {dataGallery.map((item) => (
              <div key={item} className="flex flex-col gap-2 w-[380px]  rounded-xl h-[279px]     ">
              <img src={item.image} alt="" className="z-1 w-full bg-cover" />
              <div className="flex flex-col gap-2 -mt-25 ml-10 z-2">
                  <div className="font-base text-[#FF8B5A] font-medium text-lg uppercase">{item.title}</div>
                  <div className="text-white font-headline text-xl">{item.subtitle}</div>
              </div>
              </div>
          ))}
      </div>
      <div className="w-full text-center mt-12">
      <a href="" className="bg-linear-to-l p-3 rounded-full text-white  font-base font-medium from-[#FF8B5A] to-[#FF5A5A]">Lihat Semua Portofolio</a>
      </div>
    </section>
  
    );
  }
  