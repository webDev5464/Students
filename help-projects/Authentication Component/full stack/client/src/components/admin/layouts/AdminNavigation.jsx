import { NavLink } from "react-router-dom";

export default function UserNavigation() {
  return (
    <nav className="bg-slate-800 text-white flex items-center justify-between px-40 py-3">
      <div className="text-2xl font-bold">
        <h3>Logo</h3>
      </div>

      <ul className="flex gap-5 font-bold text-xl">
        <li>
          <NavLink to="/admin">Admin Home</NavLink>
        </li>
        <li>
          <NavLink to="/admin/about">Admin About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
