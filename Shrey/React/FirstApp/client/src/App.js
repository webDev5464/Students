import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/page/Home'
import About from "./components/page/About"
import Contact from "./components/page/Contact"
import Service from "./components/page/Service"
import Navigation from "./components/module/Navigation"
import './components/style/myCss.css'
import { createContext, useRef } from "react"
import Form from "./components/page/Form"

export const MyContext = createContext()

function App() {

  const changeTheme = useRef()

  const myBtn = () => {
    changeTheme.current.style.backgroundColor = "red"
    changeTheme.current.style.color = "white"
  }

  const heading = {
    mainHeading: "Hello World"
  }


  return (
    <BrowserRouter>
      <MyContext.Provider value={{ myBtn, changeTheme, heading }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home heading="Hello World!" />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Service" element={<Service />} />
          <Route path="Form" element={<Form />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  )
}

export default App