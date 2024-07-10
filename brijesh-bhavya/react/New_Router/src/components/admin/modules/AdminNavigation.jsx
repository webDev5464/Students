import { NavLink } from "react-router-dom";

export default function AdminNavigation() {
  return (
    <nav>
      <div>
        <h2>Admin Nav</h2>
      </div>

      <ul>
        <li><NavLink to={'/admin'}>{'Home'}</NavLink></li>
        <li><NavLink to={'/admin/about'}>{'About'}</NavLink></li>
        <li><NavLink to={'/admin/contact'}>{'Contact'}</NavLink></li>
      </ul>
    </nav>
  )
}