import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-20 py-2">
      <div className="text-3xl">My Todo</div>
      <ul className="flex gap-10">
        <li className="text-xl"><NavLink to={'/'}>Create Todo</NavLink></li>
        <li className="text-xl"><NavLink to={'todoList'}>Todo List</NavLink></li>
      </ul>
    </nav>
  )
}
