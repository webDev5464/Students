import { NavLink } from "react-router-dom";

export default function UserNavigation() {
  return (
    <nav className="bg-slate-800 text-white flex items-center justify-between px-40 py-3">
      <div className="text-2xl font-bold">
        <h3>Logo</h3>
      </div>

      <ul className="flex gap-5 font-bold text-xl">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">about</NavLink>
        </li>
        <li>
          <NavLink to={"register"}>Register</NavLink>
        </li>
        <li>
          <NavLink to={"login"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
