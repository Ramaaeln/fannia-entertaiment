export default function HeroSection() {
  return (
    <section id="event" className="relative w-full h-[332px] flex items-center justify-center text-center">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="bg-[url('/src/assets/HeroEventSection.png')] w-full h-[332px] bg-cover "></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENT */}
      <div className="relative py-8 z-10 px-5 md:px-20 max-w-3xl flex flex-col items-center gap-6 text-white">
        
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-headline text-[#FF8B5A] font-semibold leading-tight">
          Layanan <span className="text-white">Event</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-sm md:text-base  text-gray-200 max-w-xl">
          One Stop Solution for Your Special Day  
          <br />
          <br />
          Siap membantu Anda menciptakan momen tak terlupakan dengan sentuhan profesional dan elegan
        </p>

        
      </div>
    </section>
  );
}