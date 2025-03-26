import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>

      <div>
        Logo
      </div>

      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/chagan">About</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
      </ul>

    </nav>
  )
}