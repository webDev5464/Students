// npm i react-router-dom

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./Pages/Home"
import Service from "./Pages/Service"
import Contact from "./Pages/Contact"
import About from "./Pages/About"

function App() {
  return (
    <BrowserRouter>

      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Service" element={<Service />} />
          <Route path="Chagan" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>

      <h5>This is a Footer</h5>

    </BrowserRouter>
  )
}

export default App

function Navigation() {
  return (
    <nav>
      <div>
        <h2>Logo</h2>
      </div>

      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'Service'}>Service</NavLink></li>
        <li><NavLink to={'Chagan'}>Contact</NavLink></li>
        <li><NavLink to={'about'}>About</NavLink></li>
      </ul>
    </nav>
  )
}