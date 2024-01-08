import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./components/pages/Home"
import MyUseState from "./components/hooks/MyUseState"
import MyUseEffect from "./components/hooks/MyUseEffect"

const App = () => {
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

export default App

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'MyUseState'}>useState</NavLink></li>
        <li><NavLink to={'MyUseEffect'}>useEffect</NavLink></li>
      </ul>
    </nav>
  )
}