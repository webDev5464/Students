import { NavLink } from 'react-router-dom'

export default function AdminNav() {
  return (
    <nav className="userNav">
      <div>
        <span>Admin Nav</span>
      </div>

      <ul>
        <li><NavLink to={"/admin"}>Admin Home</NavLink></li>
        <li><NavLink to={"/admin/editUser"}>editUser</NavLink></li>
        <li><NavLink to={"/admin/addProduct"}>addProduct</NavLink></li>
      </ul>
    </nav>
  )
}
