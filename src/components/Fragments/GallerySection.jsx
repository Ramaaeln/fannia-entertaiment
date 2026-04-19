import GalleryImage from "../../assets/gallery.png";
import Image1 from "../../assets/Gallery 1.png"
import Image2 from "../../assets/Gallery 2.png"
import Image3 from "../../assets/Gallery 3.png"
import Image4 from "../../assets/Gallery 4.png"

export default function GallerySection() {
  const dataGallery = {
    datas1: [
      {
        images: Image1,
      },
      {
        images: Image3,
      }
    ],
    datas2:[
      {
        images: Image2,
      },
      {
        images: Image4,
      },
    ],
    datas3: [
      {
        images: Image1,
      },
      {
        images: Image3,
      }
    ],
    datas4:[
      {
        images: Image2,
      },
      {
        images: Image4,
      },
    ],

  };

  return (
    <section className="px-5 md:px-20 py-16 h-full">
      
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
      <div className="grid grid-cols-2 mx-[280px] md:grid-cols-4 gap-4">
    <div className="grid gap-4 h-fit w-fit" >
        {dataGallery.datas1.map((datas, index)=>{
          return(
        <div key={index} className="hover:scale-103 transition-all duration-300 delay-150 ease-in-out opacity-80 hover:opacity-100 hover:shadow-lg">
            <img className="h-auto max-w-full rounded" src={datas.images} alt=""/>
        </div>
      );})}
    </div>

    <div className="grid gap-4 mt-20 h-fit w-fit">
      {dataGallery.datas2.map((datas2,index2)=>{return(
        <div key={index2} className="hover:scale-103  transition-all duration-300 delay-150 ease-in-out opacity-80  hover:opacity-100 hover:shadow-lg">
            <img className="h-auto max-w-full rounded " src={datas2.images} alt=""/>
        </div>
        )})}
    </div>

    <div className="grid gap-4 h-fit w-fit ">
    {dataGallery.datas3.map((datas3,index3)=>{return(
        <div key={index3} className="hover:scale-103  transition-all duration-300 delay-150 ease-in-out opacity-80 hover:opacity-100 hover:shadow-lg">
            <img className="h-auto max-w-full rounded-base" src={datas3.images} alt=""/>
        </div>
        )})}
    </div>
    <div className="grid gap-4 mt-20 h-fit w-fit">
    {dataGallery.datas4.map((datas4,index4)=>{return(
        <div key={index4} className="hover:scale-103 transition-all duration-300 delay-150 ease-in-out opacity-80 hover:opacity-100 hover:shadow-lg">
            <img className="h-auto max-w-full rounded-base" src={datas4.images} alt=""/>
        </div>
        )})}
        
    </div>
</div>

      {/* BUTTON */}
      <div className="w-full text-center pt-20">
        <a
          href=""
          className="
          hover:scale-110 transition-all duration-300 delay-150 ease-in-out  hover:shadow-lg
          bg-gradient-to-r from-[#FF8B5A] to-[#FF5A5A] px-6 py-3 rounded-full text-white text-sm md:text-base"
        >
          Lihat Semua Gallery
        </a>
      </div>
    </section>
  );
}