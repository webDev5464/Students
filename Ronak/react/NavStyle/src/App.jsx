import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Service from "./components/Service"
import Navigation from "./components/Navigation"

export default function App() {
  return (
    <BrowserRouter>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Chagan" element={<About />} />
        <Route path="Service" element={<Service />} />
      </Routes>

      <h3>This is a footer</h3>

    </BrowserRouter>
  )
}