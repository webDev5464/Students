import { NavLink } from "react-router-dom";

export default function UserNavigation() {
  return (
    <>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'about'}>About</NavLink></li>
      </ul>
    </>
  )
}