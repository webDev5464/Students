import { NavLink } from "react-router-dom"

function Navigation() {
  return (
    <nav className="userNavigation">
      <div>
        <h2>Web Logo</h2>
      </div>

      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/chagan'}>Service</NavLink></li>
        <li><NavLink to={'/admin'}>Admin</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation