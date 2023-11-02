import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./components/pages/Home"
import UseState from "./components/pages/UseState"
import JsLogic from "./components/pages/JsLogic"
import UseEffect from "./components/pages/UseEffect"
import UseRef from "./components/pages/UseRef"

export default function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="UseState" element={<UseState />} />
        <Route path="JsLogic" element={<JsLogic />} />
        <Route path="UseEffect" element={<UseEffect />} />
        <Route path="UseRef" element={<UseRef />} />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
  let x = "Home"
  return (
    <nav>
      <ul>
        <li><NavLink to={'/'}> {x} </NavLink></li>
        <li><NavLink to={'UseState'}>UseState</NavLink></li>
        <li><NavLink to={'JsLogic'}>JsLogic</NavLink></li>
        <li><NavLink to={'UseEffect'}>UseEffect</NavLink></li>
        <li><NavLink to={'UseRef'}>UseRef</NavLink></li>
      </ul>
    </nav>
  )
}