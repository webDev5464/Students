import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MyUseState from "./hooks/MyUseState"
import MyUseEffect from "./hooks/MyUseEffect"

export default function App() {
  return (
    <BrowserRouter>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="MyUseState" element={<MyUseState />} />
        <Route path="MyUseEffect" element={<MyUseEffect />} />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'MyUseState'}>UseState</NavLink></li>
        <li><NavLink to={'MyUseEffect'}>UseEffect</NavLink></li>
      </ul>
    </nav>
  )
}