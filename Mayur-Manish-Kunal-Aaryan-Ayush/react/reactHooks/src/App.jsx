import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import UseState from "./components/hooks/UseState"
import Navigation from "./components/Navigation"

export default function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="UseState" element={<UseState />} />
      </Routes>
    </Router>
  )
}