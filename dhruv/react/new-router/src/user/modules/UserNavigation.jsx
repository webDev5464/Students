import { NavLink } from "react-router-dom";

export default function UserNavigation() {
  return (
    <nav className="userNav">
      <div>
        <span>User Nav</span>
      </div>

      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/About"}>About</NavLink></li>
        <li><NavLink to={"/userCon"}>userCon</NavLink></li>
      </ul>
    </nav>
  )
}
