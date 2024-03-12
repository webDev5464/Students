import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import MyUseState from "./components/MyUseState";
import MyUseEffect from "./components/MyUseEffect";
import MyUseRef from "./components/MyUseRef";
import { createContext } from "react";

export const AppContext = createContext()

export default function App() {
  const person = "John Doe"
  return (
    <BrowserRouter>
      <AppContext.Provider value={{
        person
      }}>

        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Service" element={<Service />} />
            <Route path="Chagan" element={<Contact />} />
            <Route path="myUseState" element={<MyUseState />} />
            <Route path="MyUseEffect" element={<MyUseEffect />} />
            <Route path="MyUseRef" element={<MyUseRef />} />
          </Routes>
        </main>

        {/* <h1>This is a footer</h1> */}

      </AppContext.Provider>
    </BrowserRouter>
  )
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'About'}>About</NavLink></li>
        <li><NavLink to={'Service'}>Service</NavLink></li>
        <li><NavLink to={'Chagan'}>Contact</NavLink></li>
        <li><NavLink to={'myUseState'}>myUseState</NavLink></li>
        <li><NavLink to={'MyUseEffect'}>MyUseEffect</NavLink></li>
        <li><NavLink to={'MyUseRef'}>MyUseRef</NavLink></li>
      </ul>
    </nav>
  )
}
