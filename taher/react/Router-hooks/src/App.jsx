// npm i react-router-dom

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import MyUseState from "./pages/MyUseState";
import MyUseEffect from "./pages/MyUseEffect";
import MyUseRef from "./pages/MyUseRef";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="MyUseState" element={<MyUseState />} />
          <Route path="MyUseEffect" element={<MyUseEffect />} />
          <Route path="MyUseRef" element={<MyUseRef />} />
        </Routes>
      </main>

      {/* <footer>THis is a footer</footer> */}
    </BrowserRouter>
  );
}
