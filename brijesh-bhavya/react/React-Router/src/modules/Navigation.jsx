import { NavLink } from "react-router-dom";
import MyLogo from "../assets/ReactLight.png"

export default function Navigation() {
  return (
    <nav>
      <div>
        <img src={MyLogo} alt="ReactLight" />
      </div>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'MyUseState'}>MyUseState</NavLink></li>
        <li><NavLink to={'MyUseEffect'}>MyUseEffect</NavLink></li>
        <li><NavLink to={'MyUseRef'}>MyUseRef</NavLink></li>
      </ul>
    </nav>
  )
}