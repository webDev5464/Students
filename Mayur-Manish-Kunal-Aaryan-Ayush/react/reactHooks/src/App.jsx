import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import UseState from "./components/hooks/UseState"
import Navigation from "./components/Navigation"
import UseEffect from "./components/hooks/UseEffect"
import UseRef from "./components/hooks/UseRef"
import { createContext, useState } from "react"

export const MyContext = createContext()

export default function App() {
  const [theme, setTheme] = useState(true)

  const themeButton = () => setTheme(!theme)

  let chagan = "Hello Magan"

  return (
    <MyContext.Provider value={{ chagan, theme, themeButton }}>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="UseState" element={<UseState />} />
          <Route path="UseEffect" element={<UseEffect />} />
          <Route path="UseRef" element={<UseRef />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  )
}