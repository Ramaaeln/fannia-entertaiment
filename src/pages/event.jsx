import HeroSection from "../components/Fragments/Events/HeroSection"
import MarqueeSection from "../components/Fragments/Events/MarqueeSection"
import ServiceTabs from "../components/Layouts/Events/ServiceTabs"
export default function EventPage(){
    return(
        <div>
            <HeroSection/>
            <MarqueeSection/>
            <ServiceTabs/>
        </div>
    )
}