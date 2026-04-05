import PhoneIcon from "../../assets/phone.png";
import EmailIcon from "../../assets/email.png";
import LocationIcon from "../../assets/location.png";
import Tiktok from "../../assets/tiktok.png";
import Instagram from "../../assets/instagram.png";
import Pesan from "../../assets/pesan.png";

export default function ContactSection() {
  const contactsData = [
    {
      icon: LocationIcon,
      text: "Tangerang Selatan, Banten, Indonesia",
    },
    {
      icon: PhoneIcon,
      text: "+62 812-3456-7890",
    },
    {
      icon: EmailIcon,
      text: "hello@fannia-entertainment.com",
    },
  ];

  const iconSocial = [Tiktok, Instagram, Pesan];

  return (
    <footer className="bg-[#1A1A1A] text-center px-5 md:px-20 py-16">
      
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
          href=""
          className="bg-gradient-to-r from-[#FF5A5A] to-[#FF8B5A] px-6 py-3 rounded-full text-white text-sm md:text-base"
        >
          Whatsapp Kami
        </a>
        <a
          href=""
          className="border border-white px-6 py-3 rounded-full text-white text-sm md:text-base"
        >
          Kirim Email
        </a>
      </div>

      {/* CONTACT INFO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-white">
        {contactsData.map((contact, index) => (
          <div key={index} className="flex items-center justify-center gap-2">
            <img src={contact.icon} alt="" className="w-5 h-5" />
            <span className="text-[#D9D9D9] text-sm">
              {contact.text}
            </span>
          </div>
        ))}
      </div>

      {/* SOCIAL ICON */}
      <div className="flex justify-center gap-5 mt-8">
        {iconSocial.map((icon, index) => (
          <img key={index} src={icon} alt="" className="w-6 h-6 cursor-pointer" />
        ))}
      </div>
    </footer>
  );
}