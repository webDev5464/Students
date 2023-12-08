import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import { createContext } from "react"

export const MyContext = createContext()

export default function App() {

  const person = "John Doe"

  return (
    <MyContext.Provider value={{ person }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  )
}