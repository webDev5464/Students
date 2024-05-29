import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Service from "./components/Service"
import Navigation from "./modules/Navigation"

const App = () => {
  return (
    <BrowserRouter>

      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Chagan" element={<Service />} />
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App

// npm i react-router-dom