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
        <li><NavLink to={'MyUseState'}>UseState</NavLink></li>
        <li><NavLink to={'MyUseRef'}>useRef</NavLink></li>
        <li><NavLink to={'MyUseEffect'}>UseEffect</NavLink></li>
      </ul>
    </nav>
  )
}
