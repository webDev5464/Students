import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navigation from "./modules/Navigation"
import MyUseState from "./hooks/MyUseState"
import MyUseEffect from "./hooks/MyUseEffect"
import MyUseRef from "./hooks/MyUseRef"
import ChildOne from "./hooks/ChildOne"
import ChildTwo from "./hooks/ChildTwo"
import { createContext } from "react"

export const AppContext = createContext()

const App = () => {

  const person = "My name is chagan."

  const user = "User is verified"

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ person, user }}>

        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="MyUseState" element={<MyUseState />} />
            <Route path="MyUseEffect" element={<MyUseEffect />} />

            <Route path="MyUseRef" element={<MyUseRef />} >
              <Route path="childOne" element={<ChildOne />} />
              <Route path="childTwo" element={<ChildTwo />} />
            </Route>

          </Routes>
        </main>

      </AppContext.Provider>
    </BrowserRouter>
  )
}

export default App

// npm i react-router-dom