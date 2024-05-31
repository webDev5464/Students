import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div>
        <h1>Logo</h1>
      </div>

      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'About'}>About</NavLink></li>
        <li><NavLink to={'Chagan'}>Service</NavLink></li>
      </ul>
    </nav>
  )
}
