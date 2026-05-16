import { Route, Routes } from "react-router";
import Navigations from "../components/Fragments/Navigations";
import HomePage from "../pages/home";
import EventPage from "../pages/event";
import PackagesPage from "../pages/packages";
import GalleryPage from "../pages/gallery";

export default function Routers(){
    return(
        <Routes>
            <Route element={<Navigations/>}>
                <Route path="/" element={<HomePage/>} />
                <Route path="event" element={<EventPage/>} />
                <Route path="packages" element={<PackagesPage/>} />
                <Route path="gallery" element={<GalleryPage/>} />
            </Route>
        </Routes>
    )
}