import { BrowserRouter } from "react-router";
import Routers from "./routers/Routers";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
      <Routers/>
      <ScrollToHash />
    </BrowserRouter>
  );
}

export default App;