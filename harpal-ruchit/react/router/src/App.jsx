import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navigation from "./modules/Navigation";
import UseState from "./Pages/UseState";

export default function App() {
  return (
    <BrowserRouter>

      <Navigation />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<UseState />} path="useState" />
      </Routes>

      {/* <h3>This is a footer</h3> */}

    </BrowserRouter>
  )
}