import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Navigation() {

  const [navBarActive, setNavBarActive] = useState(false)

  useEffect(() => {
    console.log("Hello")
  }, [navBarActive])

  return (
    <>

      <button onClick={() => setNavBarActive(!navBarActive)}>
        {navBarActive ? <MdOutlineCancel /> : <FaBars />}
      </button>

      {navBarActive ? <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="useState">useState</NavLink></li>
      </ul> : ""}
    </>
  )
}