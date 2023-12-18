import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Service from "./components/Service"
import Navigation from "./components/Navigation"

const App = () => {
  return (
    <BrowserRouter>
      {/* Write html */}
      <Navigation />

      <main>
        <Routes>
          {/* Component route setup */}
          <Route path="/" element={<Home />} />
          <Route path="Chagan" element={<About />} />
          <Route path="Service" element={<Service />} />
        </Routes>
      </main>

      <p>Footer</p>
      {/* Write html */}
    </BrowserRouter>
  )
}

export default App