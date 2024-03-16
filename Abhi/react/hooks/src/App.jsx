import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"

export default function App() {
  return (
    <BrowserRouter>

      <Navigation />

      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Chagan" element={<About />} />
          <Route path="Service" element={<Service />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

const Navigation = () => {
  return (
    <nav>
      <div className="webLogo">
        WebLogo
      </div>

      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'Chagan'}>About</NavLink></li>
        <li><NavLink to={'Service'}>Service</NavLink></li>
      </ul>
    </nav>
  )
}