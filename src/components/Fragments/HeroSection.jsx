export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      
      <div className="absolute inset-0">
        <div className="bg-[url('./assets/hero.jpg')] w-full h-full bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 px-5 md:px-20 max-w-4xl flex flex-col gap-6">
        
        <span className="text-lg md:text-2xl font-headline text-[#FFD45A]">
          ✦ Wedding & Event Organizer
        </span>

        <h1 className="flex flex-col text-3xl md:text-6xl font-headline text-white leading-tight">
          <span>Create Your</span>
          <span className="text-[#FF885A]">Dream Wedding</span>
          <span>& Memorable Events</span>
        </h1>

        <p className="text-sm md:text-xl text-white leading-relaxed max-w-xl">
          Kami membantu merancang berbagai acara seperti pernikahan,
          ulang tahun, dan event spesial dengan konsep kreatif serta
          perencanaan yang profesional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 font-base">
          <a
            href=""
            className="text-white bg-gradient-to-r from-[#FF5A5A] to-[#FF8B5A] px-6 py-3 rounded-full text-sm md:text-lg text-center"
          >
            Lihat Layanan
          </a>
          <a
            href=""
            className="text-white border px-6 py-3 rounded-full text-sm md:text-lg text-center"
          >
            Konsultasi Sekarang
          </a>
        </div>

      </div>
    </section>
  );
}