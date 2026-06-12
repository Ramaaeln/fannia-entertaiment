import Gallery1 from "../../../assets/Gallery 13.jpg";
import Gallery2 from "../../../assets/Gallery 14.jpg";
import Gallery3 from "../../../assets/Gallery 16.jpg";
import Gallery4 from "../../../assets/Gallery 15.jpg";
import Gallery5 from "../../../assets/Gallery 12.jpg";
import Gallery6 from "../../../assets/Gallery 11.jpeg";

import {
  Sparkles,
} from "lucide-react";

export default function GallerySection() {
  const galleries = [
    {
      image: Gallery1,
      title: "Luxury Wedding",
      category: "Wedding",
    },
    {
      image: Gallery2,
      title: "Elegant Decoration",
      category: "Decoration",
    },
    {
      image: Gallery3,
      title: "Romantic Venue",
      category: "Venue",
    },
    {
      image: Gallery4,
      title: "Corporate Event",
      category: "Event",
    },
    {
      image: Gallery5,
      title: "Entertainment Show",
      category: "Entertainment",
    },
    {
      image: Gallery6,
      title: "Wedding Moment",
      category: "Photography",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden
      bg-[#FAF7F4]
      py-24 px-5 md:px-10"
    >
      {/* Blur Accent */}
      <div
        className="absolute top-0 left-0
        w-[350px] h-[350px]
        bg-[#FFB38A]/20 blur-[150px] rounded-full"
      />

      <div
        className="absolute bottom-0 right-0
        w-[350px] h-[350px]
        bg-[#FFD45A]/10 blur-[150px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2
            bg-white border border-[#EFE7E1]
            rounded-full px-5 py-2 shadow-sm"
          >
            <Sparkles size={14} className="text-[#E58B63]" />

            <span className="text-sm tracking-wide text-[#C9845E]">
              Memorable Moments
            </span>
          </div>

          {/* Title */}
          <h2
            className="mt-6 text-4xl md:text-6xl
            font-headline font-medium
            text-[#1B1B1B]"
          >
            Event
            <span
              className="ml-3 bg-gradient-to-r
              from-[#FFB36B] via-[#FF8B5A] to-[#FF6A5B]
              bg-clip-text text-transparent italic"
            >
              Gallery
            </span>
          </h2>

          {/* Desc */}
          <p
            className="mt-6 text-sm md:text-lg
            text-gray-500 leading-relaxed"
          >
            Dokumentasi acara terbaik yang penuh kehangatan,
            kemewahan, dan kebahagiaan bersama klien kami.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className="mt-20
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-6"
        >
          {galleries.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden
              rounded-[32px]
              h-[450px]
              cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover
                group-hover:scale-110
                transition-all duration-700"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0
                bg-gradient-to-t
                from-black/80 via-black/20 to-transparent"
              />

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 opacity-0
                group-hover:opacity-100
                bg-black/20 backdrop-blur-[2px]
                transition-all duration-500"
              />

              {/* Content */}
              <div
                className="absolute bottom-0 left-0
                w-full p-7 z-10"
              >
                {/* Category */}
                <div
                  className="inline-flex items-center
                  bg-white/10 backdrop-blur-xl
                  border border-white/10
                  rounded-full px-4 py-1.5"
                >
                  <span className="text-xs text-[#FFE3A1] tracking-wide">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <div
                  className="mt-4 flex items-center
                  justify-between gap-4"
                >
                  <h3
                    className="text-2xl font-headline
                    text-white"
                  >
                    {item.title}
                  </h3>

                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}