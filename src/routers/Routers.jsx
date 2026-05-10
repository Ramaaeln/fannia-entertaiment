import { Route, Routes } from "react-router";
import Navigations from "../components/Fragments/Navigations";
import HomePage from "../pages/home";
import EventPage from "../pages/event";

export default function Routers(){
    return(
        <Routes>
            <Route element={<Navigations/>}>
                <Route path="/" element={<HomePage/>} />
                <Route path="event" element={<EventPage/>} />
            </Route>
        </Routes>
    )
}