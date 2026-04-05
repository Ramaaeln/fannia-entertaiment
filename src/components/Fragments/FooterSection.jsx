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
  const iconSocial = [
    {
      icon: Tiktok,
    },
    {
      icon: Instagram,
    },
    {
      icon: Pesan,
    },
  ];
  return (
    <footer className="bg-[#0E0E0E]  text-center  p-30">
      <div className="font-headline  text-left grid grid-cols-4 text-white">
        {/* Tagline */}
        <div className="flex flex-col mr-24">
          <div className="text-xl">
            <span className="text-4xl text-[#FF8B5A] font-bold">F</span>
            <span>annia</span> <span>ENTERTAINMENT</span>
          </div>
          <p>
            Wedding & Event Organizer terpercaya yang menghadirkan momen tak
            terlupakan dengan sentuhan kreatif dan profesional.
          </p>
          <div className="flex mt-12">
            {iconSocial.map((icon, index) => (
              <img
                key={index}
                src={icon.icon}
                alt={`Icon ${index}`}
                className="w-6 h-6 mt-4 mr-4"
              />
            ))}
          </div>
        </div>
        {/* Quick Links */}
        <div className="text-justify font-base">
          <span className="uppercase">Quick Links</span>
          <div className="flex flex-col gap-4 mt-8">
            <a href="">About</a>
            <a href="">Event</a>
            <a href="">Package</a>
            <a href="">Gallery</a>
            <a href="">Testimoni</a>
            <a href="">Contact</a>
          </div>
        </div>

        {/* Service */}
        <div className="text-justify font-base">
          <span className="uppercase">Layanan</span>
          <div className="flex flex-col mt-8 gap-4">
            <a href="">Event Planning</a>
            <a href="">Vendor Management</a>
            <a href="">Creative Concept</a>
            <a href="">Wedding Organizer</a>
            <a href="">Entertainment Services</a>
          </div>
        </div>

        {/* Contact */}
        <div className="font-base">
          <span>KONTAK</span>
          {contactsData.map((contact, index) => (
            <div key={index} className="flex items-center mt-8 gap-4 ">
              <img
                src={contact.icon}
                alt={`Icon ${index}`}
                className="w-5 h-5"
              />
              <span className="text-[#D9D9D9] text-sm">{contact.text}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
