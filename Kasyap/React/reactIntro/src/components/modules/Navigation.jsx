import { NavLink } from "react-router-dom"
import "../styles/navigation.module.css"

function Navigation() {
  return (
    <div>
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"About"}>About</NavLink></li>
        <li><NavLink to={"Service"}>Service</NavLink></li>
      </ul>
    </div>
  )
}

export default Navigation