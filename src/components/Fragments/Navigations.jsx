import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import Logos from "../../assets/Asset Fannia Entertainment/logos.png";

export default function Navigations() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/#about" },
    { name: "Service", path: "/#service" },
    { name: "Event", path: "/event#event" },
    { name: "Packages", path: "/packages" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimoni", path: "/#testimony" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-[#F1ECE7] shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            : "bg-white/60 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="h-20 flex items-center justify-between">
            
            {/* Logo */}
            <Link
              to="/#home"
              className="flex items-center"
            >
              <img
                src={Logos}
                alt="Logo"
                className="h-11 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div
              className="hidden lg:flex items-center gap-2
              bg-[#FAF8F6]/80
              border border-[#EEE7E1]
              rounded-full px-3 py-2"
            >
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-5 py-2 rounded-full
                  text-sm font-medium text-[#4B4B4B]
                  hover:bg-white
                  hover:text-[#E38B68]
                  transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                className="group bg-gradient-to-r
                from-[#FF8A5B] to-[#FFB36B]
                hover:scale-105 transition-all duration-300
                text-white px-6 py-3 rounded-full
                shadow-[0_10px_30px_rgba(255,160,100,0.25)]
                flex items-center gap-2"
              >
                Konsultasi

                <ArrowUpRight
                  size={18}
                  className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
                />
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 rounded-full
              bg-white border border-[#ECE6E0]
              shadow-sm
              flex items-center justify-center
              text-[#333]"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-0 left-0 w-full min-h-screen
          bg-white/95 backdrop-blur-2xl
          transition-all duration-500
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }`}
        >
          <div
            className="flex flex-col items-center justify-center
            min-h-screen gap-8 px-6"
          >
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-headline text-[#2B2B2B]
                hover:text-[#E38B68]
                transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="#contact"
              className="mt-6 bg-gradient-to-r
              from-[#FF8A5B] to-[#FFB36B]
              text-white px-8 py-4 rounded-full
              shadow-[0_10px_30px_rgba(255,160,100,0.25)]"
            >
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <Outlet />
    </div>
  );
}