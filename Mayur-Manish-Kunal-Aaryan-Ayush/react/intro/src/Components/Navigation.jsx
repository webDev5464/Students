import { NavLink } from "react-router-dom"

export default function Navigation() {
  return (
    <nav>
      <div>
        <h2>MyFirstReact</h2>
      </div>
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"Magan"}>About</NavLink></li>
        <li><NavLink to={"Service"}>Service</NavLink></li>
      </ul>
    </nav>
  )
}
