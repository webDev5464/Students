import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./style.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Server"
import { Contact } from "./pages/Contact"
import Navigation from "./modules/Navigation"

export default function App() {
  return (
    <BrowserRouter>

      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Chagan" element={<Service />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>

      <h4>Footer</h4>

    </BrowserRouter>
  )
}
