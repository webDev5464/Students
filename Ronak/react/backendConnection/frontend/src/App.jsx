import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"Login"}>Login</NavLink>
        </li>
        <li>
          <NavLink to={"Register"}>Register</NavLink>
        </li>
      </ul>
    </nav>
  )
}