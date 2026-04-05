import PhoneIcon from "../../assets/phone.png";
import EmailIcon from "../../assets/email.png";
import LocationIcon from "../../assets/location.png";
import Tiktok from '../../assets/tiktok.png';
import Instagram from '../../assets/instagram.png';
import Pesan from '../../assets/pesan.png';

export default function ContactSection(){
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
      ]
    return(
        <footer className="bg-[#1A1A1A]  text-center  p-30">
      <h4 className="font-base text-[#FF5A5A] text-2xl">HUBUNGI KAMI</h4>
      <div className="flex text-6xl font-headline flex-col mt-10">
        <span className="text-[#F7F3F0] ">Wujudkan Acara</span>
        <span className="text-[#FF5A5A]">Impian Anda</span>
      </div>
      <p className="font-base text-[#D9D9D9] text-sm mt-2">
        Hubungi kami sekarang dan dapatkan konsultasi gratis untuk acara spesial
        Anda
      </p>
      <div className="mt-12 text-white flex gap-12 items-center font-base justify-center">
        <a
          href=""
          className="bg-linear-to-r from-[#FF5A5A] to-[#FF8B5A]  p-4 rounded-full "
        >
          Whatsapp Kami
        </a>
        <a href="" className="border rounded-full p-4  border-white">
          Kirim Email
        </a>
      </div>
      <div className="flex items-center font-base justify-center gap-10">
        {contactsData.map((contact, index) => (
          <div key={index} className="flex items-center gap-2  mt-10">
            <img src={contact.icon} alt={`Icon ${index}`} className="w-5 h-5" />
            <span className="text-[#D9D9D9] text-sm">{contact.text}</span>
          </div>
        ))}
      </div>
    </footer>
    )
}