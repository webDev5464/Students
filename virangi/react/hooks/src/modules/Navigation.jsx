import { NavLink } from "react-router-dom"

function Navigation() {
  return (
    <nav>
      <div>Logo</div>

      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="About">About</NavLink></li>
        <li><NavLink to="Contact">Contact</NavLink></li>
        <li><NavLink to="Chagan">Service</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation
