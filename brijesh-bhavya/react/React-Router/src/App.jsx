import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./modules/Navigation";
import MyUseState from "./Hooks/MyUseState";
import MyUseEffect from "./Hooks/MyUseEffect";
import MyUseRef from "./Hooks/MyUseRef";



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

    </BrowserRouter>
  )
}

// npm i react-router-dom