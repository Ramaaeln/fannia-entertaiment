export default function HeroSection() {
  return (
    <section>
      <div className="bg-black/65 absolute w-full h-[1080px]   z-4"></div>
      <div className="absolute  z-5 ml-30   mt-60 flex flex-col gap-10">
        <span className="text-3xl font-headline text-[#FFD45A]">
          {" "}
          ✦ Wedding & Event Organizer
        </span>
        <span className="text-6xl font-headline text-white"> Create Your</span>
        <div className="flex flex-col">
          <span className="text-6xl font-headline text-[#FF885A]">
            {" "}
            Dream Wedding
          </span>
          <span className="text-6xl font-headline text-white">
            {" "}
            & Memorable Events
          </span>
        </div>
        <p className="font-headline text-white text-2xl">
          Kami membantu merancang berbagai acara seperti <br /> pernikahan,
          ulang tahun, <br />
          dan event spesial dengan konsep kreatif serta perencanaan <br /> yang
          profesional.
        </p>
        <div className=" flex  gap-10 items-center font-base">
          <a
            href=""
            className="text-white bg-linear-to-r from-[#FF5A5A] to-[#FF8B5A] p-4 rounded-full text-xl"
          >
            Lihat Layanan
          </a>
          <a href="" className="text-white rounded-full border p-4 text-xl">
            Konsultasi Sekarang
          </a>
        </div>
      </div>
      <div className="bg-[url('./assets/hero.jpg')] w-full h-[1080px] -mt-40 z-2 bg-no-repeat bg-cover"></div>
    </section>
  );
}
