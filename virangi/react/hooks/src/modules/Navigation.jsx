import { NavLink } from "react-router-dom"

function Navigation() {
  return (
    <nav>
      <div>Logo</div>

      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="MyUseState">useState</NavLink></li>
        <li><NavLink to="MyUseEffect">useEffect</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation
