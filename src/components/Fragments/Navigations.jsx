import { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Logos from "../../assets/Asset Fannia Entertainment/logos.png"

export default function Navigations() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between h-20 items-center px-7 shadow sticky top-0 bg-white z-50">
        <Link to="/#home"  className="flex text-xl font-headline font-bold items-end">
          <img src={Logos} alt="Logo" />
        </Link>

        <div className="hidden md:flex gap-5 font-primary">
          <Link to="/#about">About</Link>
          <Link to="/#service">Service</Link>
          <Link to="/event#event">Event</Link>
          <Link to="/#packages">Packages</Link>
          <Link to="/#gallery">Gallery</Link>
          <Link to="/#testimony">Testimoni</Link>
          <Link to="/#contact">Contact</Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-5 py-5 md:hidden">
            <Link to="/#about">About</Link>
            <Link to="/event">Event</Link>
            <Link to="/#packages">Packages</Link>
            <Link to="/#gallery">Gallery</Link>
            <Link to="/#testimony">Testimoni</Link>
            <Link to="/#contact">Contact</Link>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
}