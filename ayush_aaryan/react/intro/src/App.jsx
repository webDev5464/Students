import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Service from "./Components/Service"
import Navigation from "./Components/Navigation"

export default function App() {
  return (
    <BrowserRouter>

      <Navigation />

      {/* ------- */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Magan" element={<About />} />
          <Route path="Service" element={<Service />} />
        </Routes>
      </div>
      {/* ------- */}
    </BrowserRouter>
  )
}