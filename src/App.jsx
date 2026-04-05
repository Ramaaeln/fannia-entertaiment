import AboutSection from "./components/Fragments/AboutSection";
import ContactSection from "./components/Fragments/ContactSection";
import FooterSection from "./components/Fragments/FooterSection";
import GallerySection from "./components/Fragments/GallerySection";
import HeroSection from "./components/Fragments/HeroSection";
import MisiSection from "./components/Fragments/MisiSection";
import Navigations from "./components/Fragments/Navigations";
import RecentSection from "./components/Fragments/RecentSection";
import ServiceSection from "./components/Fragments/ServiceSection";
import TestimonySection from "./components/Fragments/TestimonySection";
function App() {
  return (
    <div>
      <Navigations />
      <HeroSection/>
      <AboutSection/>
      <MisiSection/>
      <RecentSection/>
      <ServiceSection/>
      <GallerySection/>
      <TestimonySection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}

export default App;