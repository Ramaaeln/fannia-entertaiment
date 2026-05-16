import MisiImage from "../../assets/misi.png";
import {
  Sparkles,
  Check,
} from "lucide-react";

export default function MisiSection() {
  const datas = [
    {
      headline: "Kreativitas Tanpa Batas",
    },
    {
      headline: "Profesionalisme Tinggi",
    },
    {
      headline: "Kepuasan Klien Utama",
    },
  ];

  return (
    <section
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

      <div
        className="relative z-10
        max-w-7xl mx-auto
        grid lg:grid-cols-2
        gap-16 items-center"
      >
        {/* IMAGE */}
        <div className="relative group order-2 lg:order-1">
          
          {/* Glow */}
          <div
            className="absolute -inset-4
            bg-gradient-to-r
            from-[#FFB36B]/20 to-[#FFD45A]/10
            blur-3xl rounded-[40px]"
          />

          {/* Image Card */}
          <div
            className="relative overflow-hidden
            rounded-[40px]
            border border-white/40
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            <img
              src={MisiImage}
              alt="Misi Kami"
              className="w-full h-[550px]
              object-cover
              group-hover:scale-105
              transition-all duration-700"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0
              bg-gradient-to-t
              from-black/30 via-transparent to-transparent"
            />
          </div>

          {/* Floating Card */}
          <div
            className="absolute -bottom-6 right-6
            bg-white/90 backdrop-blur-xl
            border border-[#F1EAE4]
            rounded-3xl
            px-6 py-5
            shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
          >
            <h3
              className="text-3xl font-headline
              bg-gradient-to-r
              from-[#FFB36B] to-[#FF8B5A]
              bg-clip-text text-transparent"
            >
              100%
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Client Satisfaction
            </p>
          </div>
        </div>

        {/* TEXT */}
        <div className="order-1 lg:order-2">
          
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2
            bg-white border border-[#EFE7E1]
            rounded-full px-5 py-2 shadow-sm"
          >
            <Sparkles size={14} className="text-[#E58B63]" />

            <span className="text-sm tracking-wide text-[#C9845E]">
              Our Mission & Commitment
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mt-6 text-4xl md:text-6xl
            font-headline font-medium
            leading-tight text-[#1B1B1B]"
          >
            Komitmen Kami
            <span
              className="block mt-2
              bg-gradient-to-r
              from-[#FFB36B] via-[#FF8B5A] to-[#FF6A5B]
              bg-clip-text text-transparent italic"
            >
              untuk Anda
            </span>
          </h2>

          {/* Description */}
          <p
            className="mt-8 text-sm md:text-lg
            text-gray-500 leading-relaxed"
          >
            Kami berkomitmen menghadirkan pengalaman acara yang
            elegan, berkesan, dan penuh makna untuk setiap klien.
            Setiap detail dirancang dengan dedikasi tinggi agar
            momen spesial Anda menjadi kenangan yang tak terlupakan.
            <br />
            <br />
            Dari tahap perencanaan hingga pelaksanaan, tim profesional
            kami memastikan seluruh proses berjalan sempurna dengan
            standar kualitas terbaik.
          </p>

          {/* List */}
          <div className="mt-10 flex flex-col gap-5">
            {datas.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl
                  bg-gradient-to-br
                  from-[#FFF1E8] to-[#FFE4D5]
                  flex items-center justify-center
                  text-[#E58B63]
                  group-hover:scale-105
                  transition-all duration-300"
                >
                  <Check size={18} />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="text-lg md:text-xl
                    font-semibold text-[#2B2B2B]"
                  >
                    {item.headline}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Premium quality service with elegant experience.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}