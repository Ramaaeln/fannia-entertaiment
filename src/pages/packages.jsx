import FooterSection from "../components/Fragments/FooterSection";
import HeroSection from "../components/Fragments/Packages/HeroSection";
import ListPackagesSection from "../components/Fragments/Packages/ListPackage";

export default function PackagesPage(){
    return(
        <div>
            <HeroSection/>
            <ListPackagesSection/>
            <FooterSection/>
        </div>
    )
}