import FooterSection from "../components/Fragments/FooterSection";
import GallerySection from "../components/Fragments/Gallery/GallerySection";
import GalleryHeroSection from "../components/Fragments/Gallery/HeroSection";

export default function GalleryPage(){
    return(
        <div>
            <GalleryHeroSection/>
            <GallerySection/>
            <FooterSection/>
        </div>
    )
}