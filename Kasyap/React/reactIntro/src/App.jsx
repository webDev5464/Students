import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/models/Home"
import About from "./components/models/About"
import Service from "./components/models/Service"
import Navigation from "./components/modules/Navigation"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
