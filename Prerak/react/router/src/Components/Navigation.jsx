import { NavLink } from "react-router-dom"

export default function Navigation() {
  return (
    <nav>
      <div>
        <h3>myFirst React Site</h3>
      </div>
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"About"}>About</NavLink></li>
        <li><NavLink to={"Service"}>Service</NavLink></li>
      </ul>
    </nav>
  )
}