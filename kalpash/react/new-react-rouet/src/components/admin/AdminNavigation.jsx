import { NavLink } from "react-router-dom";

export default function AdminNavigation() {
  return (
    <nav>
      <div>
        <h3>Admin Nav</h3>
      </div>

      <ul>
        <li><NavLink to={'/Admin'}>Home</NavLink></li>
        <li><NavLink to={'/Admin/About'}>About</NavLink></li>
      </ul>
    </nav>
  )
}