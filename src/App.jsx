import { BrowserRouter } from "react-router";
import Routers from "./routers/Routers";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Chat from "./components/Fragments/Chats/Chatbots";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return null;
}
function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routers/>
      <Chat/>
    </BrowserRouter>
  );
}

export default App;