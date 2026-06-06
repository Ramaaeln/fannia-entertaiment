import AboutSection from "../components/Fragments/AboutSection";
import HeroSection from "../components/Fragments/HeroSection"
import MisiSection from "../components/Fragments/MisiSection"
import RecentSection from "../components/Fragments/RecentSection"
import ServiceSection from "../components/Fragments/ServiceSection"
import GallerySection from "../components/Fragments/GallerySection"
import TestimonySection from "../components/Fragments/TestimonySection";
import ContactSection from "../components/Fragments/ContactSection"
import FooterSection from "../components/Fragments/FooterSection";
import Chat from "../components/Fragments/Chats/Chatbots";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <MisiSection/>
      <RecentSection/>
      <ServiceSection/>
      <GallerySection/>
      <TestimonySection/>
      <ContactSection/>
      <Chat/>
      <FooterSection/>
    </div>
  );
}
