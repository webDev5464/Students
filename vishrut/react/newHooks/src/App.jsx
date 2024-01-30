import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./components/Home"
import LogicProvider from "./components/LogicProvider"

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Logic" element={<LogicProvider />} />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
  return (
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="Logic">Logic</NavLink></li>
    </ul>
  )
}