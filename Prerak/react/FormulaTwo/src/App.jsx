import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import UseState from "./components/UseState"
import Navigation from "./components/Navigation"
import UseEffect from "./components/UseEffect"
import MyUseRef from "./components/MyUseRef"

export default function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="UseState" element={<UseState />} />
        <Route path="UseEffect" element={<UseEffect />} />
        <Route path="MyUseRef" element={<MyUseRef />} />
      </Routes>
    </Router>
  )
}
