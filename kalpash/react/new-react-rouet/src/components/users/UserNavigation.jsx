import { NavLink } from "react-router-dom";

export default function UserNavigation() {
  return (
    <nav>
      <div>
        <h3>User Nav</h3>
      </div>

      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'About'}>About</NavLink></li>
      </ul>
    </nav>
  )
}