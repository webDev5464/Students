/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <section className="bg-black py-3">
        <ul className="flex">
          <li className="text-white mx-10 text-xl font-bold">
            <NavLink to={'/'}>Create Todo</NavLink>
          </li>
          <li className="text-white mx-10 text-xl font-bold">
            <NavLink to={'ShowTodo'}>Todo's</NavLink>
          </li>
        </ul>
      </section>
    </>
  )
}