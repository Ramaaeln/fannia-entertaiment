import { useState } from "react";
import WeddingContent from "../../Fragments/Events/WeddingContent";
import EventContent from "../../Fragments/Events/EventContent";
import TabNav from "./TabNav";

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("wedding");

  return (
    <section className="">
      
      {/* NAV */}
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* CONTENT */}
      <div className="mt-10 transition-all   duration-500 ease-in-out">
        {activeTab === "wedding" && <WeddingContent />}
        {activeTab === "event" && <EventContent />}
      </div>

    </section>
  );
}