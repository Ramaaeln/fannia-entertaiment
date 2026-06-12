import GalleryImage from "../../assets/gallery.png";
import Image1 from "../../assets/Gallery 1.png";
import Image2 from "../../assets/Gallery 2.png";
import Image3 from "../../assets/Gallery 3.png";
import Image4 from "../../assets/Gallery 4.png";
import Image5 from "../../assets/Gallery 5.jpg";
import Image6 from "../../assets/Gallery 6.jpg";
import Image7 from "../../assets/Gallery 7.jpg";
import Image8 from "../../assets/Gallery 8.jpg";
import Image9 from "../../assets/Gallery 9.jpg";
import Image10 from "../../assets/Gallery 10.jpg";

export default function GallerySection() {
  const dataGallery = {
    datas1: [{ images: Image7 }, { images: Image3 }],
    datas2: [{ images: Image8 }, { images: Image4 }],
    datas3: [{ images: Image10 }, { images: Image9 }],
    datas4: [{ images: Image5 }, { images: Image6 }],
  };

  return (
    <section id="gallery" className="px-4 sm:px-6 md:px-20 py-16">
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-2 md:px-0 md:mx-[280px]">
        
        {/* COLUMN 1 */}
        <div className="grid gap-4">
          {dataGallery.datas1.map((item, index) => (
            <div
              key={index}
              className="hover:scale-105 transition-all duration-300 ease-in-out opacity-80 hover:opacity-100 hover:shadow-lg"
            >
              <img
                className="w-full h-full object-cover rounded"
                src={item.images}
                alt=""
              />
            </div>
          ))}
        </div>

        {/* COLUMN 2 */}
        <div className="grid gap-4 md:mt-20">
          {dataGallery.datas2.map((item, index) => (
            <div
              key={index}
              className="hover:scale-105 transition-all duration-300 ease-in-out opacity-80 hover:opacity-100 hover:shadow-lg"
            >
              <img
                className="w-full h-full object-cover rounded"
                src={item.images}
                alt=""
              />
            </div>
          ))}
        </div>

        {/* COLUMN 3 */}
        <div className="grid gap-4">
          {dataGallery.datas3.map((item, index) => (
            <div
              key={index}
              className="hover:scale-105 transition-all duration-300 ease-in-out opacity-80 hover:opacity-100 hover:shadow-lg"
            >
              <img
                className="w-full h-full object-cover rounded"
                src={item.images}
                alt=""
              />
            </div>
          ))}
        </div>

        {/* COLUMN 4 */}
        <div className="grid gap-4 md:mt-20">
          {dataGallery.datas4.map((item, index) => (
            <div
              key={index}
              className="hover:scale-105 transition-all duration-300 ease-in-out opacity-80 hover:opacity-100 hover:shadow-lg"
            >
              <img
                className="w-full h-full object-cover rounded"
                src={item.images}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <div className="w-full text-center pt-20">
        <a
          href="/gallery"
          className="hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-lg bg-gradient-to-r from-[#FF8B5A] to-[#FF5A5A] px-6 py-3 rounded-full text-white text-sm md:text-base"
        >
          Lihat Semua Gallery
        </a>
      </div>
    </section>
  );
}