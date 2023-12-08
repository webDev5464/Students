import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'UseState'}>UseState</NavLink></li>
        <li><NavLink to={'UseEffect'}>UseEffect</NavLink></li>
        <li><NavLink to={'MyUseRef'}>UseRef</NavLink></li>
      </ul>
    </>
  )
}