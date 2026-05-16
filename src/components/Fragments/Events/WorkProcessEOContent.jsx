const workSteps = [
  {
    title: "Konsultasi",
    desc: "Diskusi gratis untuk mematangkan konsep dan visi acara Anda.",
  },
  {
    title: "Perencanaan",
    desc: "Penyusunan detail agenda, anggaran, dan pemilihan vendor terbaik.",
  },
  {
    title: "Persiapan",
    desc: "Produksi teknis, set-up panggung, dan koordinasi menyeluruh.",
  },
  {
    title: "Eksekusi",
    desc: "Pendampingan penuh di hari-H agar acara berjalan tanpa kendala.",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-20 bg-[#EFEBE8] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">

        {/* heading */}
        <p className="uppercase font-base font-medium tracking-[4px] text-[#FF7A59] text-sm mb-3">
          Cara Kerja Kami
        </p>

        <h2 className="text-3xl md:text-5xl font-headline mb-16">
          Proses{" "}
          <span className="text-[#FF7A59]">
            Mudah & Jelas
          </span>
        </h2>

        {/* process */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* line desktop */}
          <div className="
            hidden lg:block
            absolute
            top-14
            left-0
            w-full
            h-[2px]
            bg-[#FF7A59]/40
          " />

          {workSteps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center"
            >

              {/* number */}
              <div className="relative">

                <div className="
                  bg-[#EFEBE8]
                  px-5
                  relative
                  z-10
                ">
                  <h1 className="
                    text-6xl
                    md:text-7xl
                    lg:text-8xl
                    font-light
                    font-headline
                    text-[#FF7A59]
                    leading-none
                  ">
                    {String(index + 1).padStart(2, "0")}
                  </h1>
                </div>
              </div>

              {/* card */}
              <div className="
                mt-6
                bg-white/60
                backdrop-blur-sm
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                max-w-[260px]
              ">

                <h3 className="font-headline text-xl mb-3">
                  {step.title}
                </h3>

                <p className="
                  font-headline
                  text-gray-500
                  text-sm
                  leading-relaxed
                ">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}