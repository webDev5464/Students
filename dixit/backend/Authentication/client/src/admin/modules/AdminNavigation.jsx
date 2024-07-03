import { NavLink } from "react-router-dom";

export default function AdminNavigation() {
  return (
    <ul>
      <li><NavLink to={'/admin'}>Home</NavLink></li>
      <li><NavLink to={'/admin/about'}>About</NavLink></li>
    </ul>
  )
}