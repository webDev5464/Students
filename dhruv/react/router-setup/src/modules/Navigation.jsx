import { NavLink } from "react-router-dom"
import { FaReact } from "react-icons/fa";
import { MdHome } from "react-icons/md";

function Navigation() {
  return (
    <nav>
      <div>
        <h3><FaReact /></h3>
      </div>

      <ul>
        <li><NavLink to="/"><MdHome /></NavLink></li>
        <li><NavLink to="/myUseState">UseState</NavLink></li>
        <li><NavLink to="/myUseEffect">UseEffect</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation
