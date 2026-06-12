import PhoneIcon from "../../assets/phone.png";
import EmailIcon from "../../assets/email.png";
import LocationIcon from "../../assets/location.png";
import Tiktok from "../../assets/tiktok.png";
import Instagram from "../../assets/instagram.png";
import Pesan from "../../assets/pesan.png";
import { Link } from "react-router-dom";

export default function FooterSection() {
  const contactsData = [
    {
      icon: LocationIcon,
      text: "Gg. Swadaya Jl. Kp. Cibarengkok No.117, RT.03/RW.03, Pengasinan, Kec. Gn. Sindur, Kabupaten Bogor, Jawa Barat 16340",
    },
    {
      icon: PhoneIcon,
      text: "+62 813-1642-9729",
    },
    {
      icon: EmailIcon,
      text: "fanniaweddingentertainment@gmail.com",
    },
  ];

  const iconSocial = [
  {
    icon: Tiktok,
    url: "https://www.tiktok.com/@fannia_ent?_r=1&_t=ZS-95uODiRSp76",
    name: "TikTok",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/fanniaentertainment_official?igsh=eDA5bXhoNjJqanl2",
    name: "Instagram",
  },
  {
    icon: Pesan,
    url: "https://wa.me/6281316429729",
    name: "WhatsApp",
  },
];

  return (
    <footer className="bg-[#0E0E0E] text-white px-5 md:px-20 py-16">
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
        {/* BRAND */}
        <div className="flex flex-col gap-4">
          <div className="text-xl font-headline">
            <span className="text-3xl md:text-4xl text-[#FF8B5A] font-bold">
              F
            </span>
            <span>annia</span> <span>ENTERTAINMENT</span>
          </div>

          <p className="text-sm text-[#D9D9D9] leading-relaxed">
            Wedding & Event Organizer terpercaya yang menghadirkan momen tak
            terlupakan dengan sentuhan kreatif dan profesional.
          </p>

         <div className="flex gap-4 mt-4">
  {iconSocial.map((social, index) => (
    <a
      key={index}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
    >
      <img
        src={social.icon}
        alt={social.name}
        className="w-5 h-5 cursor-pointer hover:scale-110 transition"
      />
    </a>
  ))}
</div>
        </div>

        {/* QUICK LINKS */}
        <div className="font-base">
          <h4 className="uppercase mb-4">Quick Links</h4>
          <div className="flex flex-col gap-3 text-sm text-[#D9D9D9]">
            <Link to="/#about" className="hover:text-white transition">
              About
            </Link>
            <Link to="/event" className="hover:text-white transition">
              Event
            </Link>
            <Link to="/package" className="hover:text-white transition">
              Package
            </Link>
            <Link to="/gallery" className="hover:text-white transition">
              Gallery
            </Link>
            <Link to="/#testimony" className="hover:text-white transition">
              Testimoni
            </Link>
            <Link to="/#contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        {/* SERVICES */}
        <div className="font-base">
          <h4 className="uppercase mb-4">Layanan</h4>
          {/* <div className="flex flex-col gap-3 text-sm text-[#D9D9D9]">
            <Link to="/event" className="hover:text-white transition">
              Event Planning
            </Link>
            <Link to="/event" className="hover:text-white transition">
              Vendor Management
            </Link>
            <Link to="/event" className="hover:text-white transition">
              Creative Concept
            </Link>
            <Link to="/event/wedding" className="hover:text-white transition">
              Wedding Organizer
            </Link>
            <Link to="/event" className="hover:text-white transition">
              Entertainment Services
            </Link>
          </div> */}
          Coming Soon
        </div>

        {/* CONTACT */}
        <div className="font-base">
          <h4 className="uppercase mb-4">Kontak</h4>
          <div className="flex flex-col gap-4">
            {contactsData.map((contact, index) => (
              <div key={index} className="flex items-start gap-3">
                <img src={contact.icon} alt="" className="w-5 h-5 mt-1" />
                <span className="text-sm text-[#D9D9D9]">{contact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-[#2A2A2A] mt-10 pt-6 text-center text-sm text-[#D9D9D9]">
        © 2026 Fannia Entertainment. All rights reserved.
      </div>
    </footer>
  );
}
