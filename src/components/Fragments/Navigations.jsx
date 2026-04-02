export default function Navigations() {
  return (
    <nav className="flex justify-between h-20  items-center p-7 shadow sticky top-0 bg-white z-50">
      <a href="#" className="flex text-xl font-headline font-bold items-end">
        <span className="text-[#FF8B5A] text-6xl">F</span>
        <span>annia</span>
        <span className="text-[#00000080]">Entertaiment</span>
      </a>
      <div className="flex gap-5 font-primary">
        <a href="">About</a>
        <a href="">Event</a>
        <a href="">Packages</a>
        <a href="">Gallery</a>
        <a href="">Testimoni</a>
        <a href="">Contact</a>
      </div>
    </nav>
  );
}
