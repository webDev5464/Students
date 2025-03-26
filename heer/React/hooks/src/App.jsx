// npm i react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navigation from "./Navigation";
import { createContext } from "react";

export const AppContext = createContext()

export default function App() {

  const username = "Jethalal"

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ username }}>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/chagan" element={<About />} />
        </Routes>

      </AppContext.Provider>
    </BrowserRouter>
  )
}
