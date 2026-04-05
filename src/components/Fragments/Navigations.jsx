import { useState } from "react";

export default function Navigations() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between h-20 items-center px-7 shadow sticky top-0 bg-white z-50">
      
      <a href="#" className="flex text-xl font-headline font-bold items-end">
        <span className="text-[#FF8B5A] text-4xl md:text-6xl">F</span>
        <span>annia</span>
        <span className="text-[#00000080]">Entertaiment</span>
      </a>

      <div className="hidden md:flex gap-5 font-primary">
        <a href="">About</a>
        <a href="">Event</a>
        <a href="">Packages</a>
        <a href="">Gallery</a>
        <a href="">Testimoni</a>
        <a href="">Contact</a>
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
          <a href="">About</a>
          <a href="">Event</a>
          <a href="">Packages</a>
          <a href="">Gallery</a>
          <a href="">Testimoni</a>
          <a href="">Contact</a>
        </div>
      )}
    </nav>
  );
}