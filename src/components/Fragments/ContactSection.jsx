export default function ContactSection() {
  const whatsappNumber = "6281316429729";
  const message = encodeURIComponent(
    `Halo Fannia Entertainment, Saya ingin melakukan konsultasi terkait layanan yang tersedia.
    Saya ingin mendapatkan informasi lebih lanjut mengenai layanan tersebut, termasuk harga, paket yang ditawarkan, dan ketersediaan.
    
Terima kasih atas perhatian Anda. Saya menantikan balasan dari Anda.`,
  );
  const subject = encodeURIComponent("Konsultasi Layanan");
  const body = encodeURIComponent(
    `Halo Fannia Entertainment,

Saya tertarik dengan layanan yang tersedia.
Saya ingin mendapatkan informasi lebih lanjut mengenai layanan tersebut, termasuk harga, paket yang ditawarkan, dan ketersediaan.

Terima kasih atas perhatian Anda. Saya menantikan balasan dari Anda.
`,
  );
  return (
    <footer
      id="contact"
      className="bg-[#1A1A1A] text-center px-5 md:px-20 py-28  "
    >
      {/* TITLE */}
      <h4 className="font-base text-[#FF5A5A] text-lg md:text-2xl">
        HUBUNGI KAMI
      </h4>

      {/* HEADING */}
      <div className="flex flex-col mt-6 md:mt-10 text-3xl md:text-6xl font-headline leading-tight">
        <span className="text-[#F7F3F0]">Wujudkan Acara</span>
        <span className="text-[#FF5A5A]">Impian Anda</span>
      </div>

      {/* DESC */}
      <p className="font-base text-[#D9D9D9] text-sm md:text-base mt-4 max-w-xl mx-auto">
        Hubungi kami sekarang dan dapatkan konsultasi gratis untuk acara spesial
        Anda
      </p>

      {/* BUTTON */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#FF5A5A] to-[#FF8B5A] px-6 py-3 rounded-full text-white text-sm md:text-base"
        >
          Whatsapp Kami
        </a>
        <a
           href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=fanniaweddingentertainment@gmail.com&su=${subject}&body=${body}`}
  target="_blank"
          rel="noopener noreferrer"
          className="border border-white px-6 py-3 rounded-full text-white text-sm md:text-base"
        >
          Kirim Email
        </a>
      </div>

      
    </footer>
  );
}
