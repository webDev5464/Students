import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./modules/Navigation";
import MyUseState from "./pages/MyUseState";
import MyUseEffect from "./pages/MyUseEffect";
import { createContext } from "react";

export const AppContext = createContext()

export default function App() {
  const username = "Chagan"

  const data = [
    {
      heading: "THis is a heading",
      title: "This is a title",
      price: 100
    },
    {
      heading: "This is another heading",
      title: "This is another title",
      price: 200
    },
    {
      heading: "This is a third heading",
      title: "This is a third title",
      price: 300
    }
  ]

  return (
    <AppContext.Provider value={{ username, data }}>
      <BrowserRouter>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myUseState" element={<MyUseState />} />
          <Route path="/myUseEffect" element={<MyUseEffect />} />
        </Routes>

        {/* <h2>This is a my globe component</h2> */}

      </BrowserRouter>
    </AppContext.Provider>
  )
}

// npm i react-router-dom
// npm i react-icons