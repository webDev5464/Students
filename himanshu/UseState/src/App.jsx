import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import { createContext, useState } from "react"
import Navigation from "./pages/Navigation"

export const MyContext = createContext()

const App = () => {

  const person = "John"

  const data = {
    username: "JohnDoe",
    email: "john@gmail.com",
    pass: "123John"
  }

  const [state, setState] = useState(false)

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ person, data, setState, state }}>

        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"Nav"}>Nav</NavLink></li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Nav" element={<Navigation />} />
        </Routes>

        <h1>This is a footer</h1>

      </MyContext.Provider>
    </BrowserRouter>
  )
}

export default App