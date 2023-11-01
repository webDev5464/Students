import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Service from "./Components/Service"
import Navigation from "./Components/Navigation"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <div className="parent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Service" element={<Service />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App