import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navigation from "./components/module/Navigation";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import { createContext } from "react";
import UseContext from "./components/pages/UseContext";

export const myContext = createContext()

function App() {
  const fullName = "Hello World"

  const data = {
    fName: "John",
    lName: "Doe",
    age: 25,
    fullName: function () {
      return this.fName + " " + this.lName
    }
  }

  return (
    <BrowserRouter>
      <myContext.Provider value={{ fullName, data }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Props" element={<Products />} />
          <Route path="Context" element={<UseContext />} />
        </Routes>
      </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
