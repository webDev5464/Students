import { createContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import { useState } from "react"
import RenderData from "./RenderData"
import Navigation from "./Navigation"

export const MyContext = createContext()

export default function App() {

  const [value, setValue] = useState(5)

  const increment = () => {
    setValue(value + 1)
  }

  const decrement = () => {
    setValue(value == 0 ? 0 : value - 1)
  }

  return (
    <MyContext.Provider value={{ value, setValue, increment, decrement }}>
      <BrowserRouter>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="RenderData" element={<RenderData />} />
        </Routes>

      </BrowserRouter>
    </MyContext.Provider>
  )
}