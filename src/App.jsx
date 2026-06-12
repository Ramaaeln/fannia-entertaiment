import { BrowserRouter } from "react-router";
import Routers from "./routers/Routers";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Chat from "./components/Fragments/Chats/Chatbots";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    // abaikan token oauth
    if (id.includes("access_token")) return;

    const element =
      document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
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