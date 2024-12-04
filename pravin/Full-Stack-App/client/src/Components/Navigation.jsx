import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink to={"/"}> <h1 className="logo">LOGO</h1></NavLink>
        <ul>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </ul>
      </nav>
      <hr id="HR" />
      <Outlet />
    </>
  );
};

export default Navigation;
