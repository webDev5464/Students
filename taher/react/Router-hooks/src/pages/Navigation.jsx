import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div>
        <h3 className="Logo">Logo</h3>
      </div>

      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'MyUseState'}>useState</NavLink></li>
      </ul>
    </nav>
  )
}
