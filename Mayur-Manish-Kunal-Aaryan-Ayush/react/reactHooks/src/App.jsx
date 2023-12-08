import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import UseState from "./components/hooks/UseState"
import Navigation from "./components/Navigation"
import UseEffect from "./components/hooks/UseEffect"
import UseRef from "./components/hooks/UseRef"

export default function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="UseState" element={<UseState />} />
        <Route path="UseEffect" element={<UseEffect />} />
        <Route path="UseRef" element={<UseRef />} />
      </Routes>
    </Router>
  )
}