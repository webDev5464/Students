import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Navigation from "./Navigation";

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
        </Routes>
      </main>

    </BrowserRouter>
  )
}



// npm i react-router-dom