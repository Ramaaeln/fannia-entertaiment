import PhoneIcon from "../../assets/phone.png";
import EmailIcon from "../../assets/email.png";
import LocationIcon from "../../assets/location.png";
import Tiktok from "../../assets/tiktok.png";
import Instagram from "../../assets/instagram.png";
import Pesan from "../../assets/pesan.png";

export default function FooterSection() {
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
    <footer className="bg-[#0E0E0E] text-white px-5 md:px-20 py-16">
      
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
        
        {/* BRAND */}
        <div className="flex flex-col gap-4">
          <div className="text-xl font-headline">
            <span className="text-3xl md:text-4xl text-[#FF8B5A] font-bold">F</span>
            <span>annia</span> <span>ENTERTAINMENT</span>
          </div>

          <p className="text-sm text-[#D9D9D9] leading-relaxed">
            Wedding & Event Organizer terpercaya yang menghadirkan momen tak
            terlupakan dengan sentuhan kreatif dan profesional.
          </p>

          <div className="flex gap-4 mt-4">
            {iconSocial.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt=""
                className="w-5 h-5 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="font-base">
          <h4 className="uppercase mb-4">Quick Links</h4>
          <div className="flex flex-col gap-3 text-sm text-[#D9D9D9]">
            <a href="">About</a>
            <a href="">Event</a>
            <a href="">Package</a>
            <a href="">Gallery</a>
            <a href="">Testimoni</a>
            <a href="">Contact</a>
          </div>
        </div>

        {/* SERVICES */}
        <div className="font-base">
          <h4 className="uppercase mb-4">Layanan</h4>
          <div className="flex flex-col gap-3 text-sm text-[#D9D9D9]">
            <a href="">Event Planning</a>
            <a href="">Vendor Management</a>
            <a href="">Creative Concept</a>
            <a href="">Wedding Organizer</a>
            <a href="">Entertainment Services</a>
          </div>
        </div>

        {/* CONTACT */}
        <div className="font-base">
          <h4 className="uppercase mb-4">Kontak</h4>
          <div className="flex flex-col gap-4">
            {contactsData.map((contact, index) => (
              <div key={index} className="flex items-start gap-3">
                <img src={contact.icon} alt="" className="w-5 h-5 mt-1" />
                <span className="text-sm text-[#D9D9D9]">
                  {contact.text}
                </span>
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