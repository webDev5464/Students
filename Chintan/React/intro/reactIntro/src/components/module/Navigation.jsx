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
        <li>
          <NavLink to={"Props"}>Props Method</NavLink>
        </li>
        <li>
          <NavLink to={"Context"}>Context</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
