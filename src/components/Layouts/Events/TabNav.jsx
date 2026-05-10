export default function TabNav({ activeTab, setActiveTab }) {
  return (
    <div className="flex justify-center mt-40 gap-4 flex-wrap">

      <button
        onClick={() => setActiveTab("wedding")}
        className={`px-6 py-2 rounded-full text-sm md:text-base transition ${
          activeTab === "wedding"
            ? "bg-[#FF8B5A] text-white shadow"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Wedding Organizer
      </button>

      <button
        onClick={() => setActiveTab("event")}
        className={`px-6 py-2 rounded-full text-sm md:text-base transition ${
          activeTab === "event"
            ? "bg-[#FF8B5A] text-white shadow"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Event Organizer
      </button>

    </div>
  );
}