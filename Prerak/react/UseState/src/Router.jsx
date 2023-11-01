import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./components/pages/Home"

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
      </ul>
    </nav>
  )
}