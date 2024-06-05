import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Navigation from "./Navigation";
import MyUseState from "./hooks/MyUseState";
import MyUseRef from "./hooks/MyUseRef";
import MyUseEffect from "./hooks/MyUseEffect";

export default function App() {
  // const person = "Chagan"

  return (
    <BrowserRouter>

      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Chagan" element={<Service />} />
          <Route path="MyUseState" element={<MyUseState />} />
          <Route path="MyUseRef" element={<MyUseRef />} />
          <Route path="MyUseEffect" element={<MyUseEffect />} />
        </Routes>
      </main>

    </BrowserRouter>
  )
}



// npm i react-router-dom