import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
  return (
    <u>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'cart'}>Cart</NavLink></li>
    </u>
  )
}