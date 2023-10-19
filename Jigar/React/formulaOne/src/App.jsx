import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UseState from "./components/pages/UseState"
import About from "./components/pages/About"
import Service from "./components/pages/Service"
import Navigation from "./components/module/Navigation"

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<UseState />} />
        <Route path="About" element={<About />} />
        <Route path="Service" element={<Service />} />
      </Routes>
    </Router>
  )
}

export default App