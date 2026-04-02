import AboutSection from "./components/Fragments/AboutSection";
import GallerySection from "./components/Fragments/GallerySection";
import HeroSection from "./components/Fragments/HeroSection";
import MisiSection from "./components/Fragments/MisiSection";
import Navigations from "./components/Fragments/Navigations";
import RecentSection from "./components/Fragments/RecentSection";
import ServiceSection from "./components/Fragments/ServiceSection";
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
    </div>
  );
}

export default App;