import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MyUseState from "./hooks/MyUseState"

export default function App() {
  return (
    <BrowserRouter>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="MyUseState" element={<MyUseState />} />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
  return (
    <ul>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'MyUseState'}>UseState</NavLink></li>
    </ul>
  )
}