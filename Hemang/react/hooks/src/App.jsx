import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./components/pages/Home"
import MyUseState from "./components/hooks/MyUseState"
import MyUseEffect from "./components/hooks/MyUseEffect"
import { createContext } from "react"

export const AppContext = createContext()

const App = () => {
  let x = 5
  return (
    <BrowserRouter>
      <AppContext.Provider value={{ x }}>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="MyUseState" element={<MyUseState />} />
          <Route path="MyUseEffect" element={<MyUseEffect />} />
        </Routes>
      </AppContext.Provider>
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