import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Home from "./Components/Home"
import { createContext } from "react"

export const MyContext = createContext()

export default function App() {

  let Heading = "Hello World!"

  let personData = {
    fname: "John",
    lname: "Doe"
  }

  return (
    <Router>
      <MyContext.Provider value={{ Heading, personData }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </Router>
  )
}

function Navigation() {
  return (
    <ul>
      <li><NavLink to={'/'}>Home</NavLink></li>
    </ul>
  )
}