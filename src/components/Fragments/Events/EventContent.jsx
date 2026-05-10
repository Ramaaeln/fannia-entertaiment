export default function EventContent() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-headline mb-4">
          Event Organizer
        </h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Kami menyediakan layanan event profesional untuk berbagai kebutuhan acara.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-gray-200 h-56 rounded-2xl hover:scale-105 transition duration-300 shadow-md"></div>

          <div className="bg-gray-200 h-56 rounded-2xl hover:scale-105 transition duration-300 shadow-md"></div>

          <div className="bg-gray-200 h-56 rounded-2xl hover:scale-105 transition duration-300 shadow-md"></div>

          <div className="bg-gray-200 h-56 rounded-2xl hover:scale-105 transition duration-300 shadow-md"></div>

        </div>

      </div>
    </section>
  );
}