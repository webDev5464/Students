import { NavLink } from "react-router-dom";
import "./style/Navigation.module.css"

function Navigation() {
  return (
    <>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"About"}>About</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
