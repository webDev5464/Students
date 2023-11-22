import { createContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import { useState } from "react"

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
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  )
}