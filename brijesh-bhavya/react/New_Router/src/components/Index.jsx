import { NavLink, Outlet } from "react-router-dom";

export default function Index() {
  return (
    <>
      <ParentNav />
      <Outlet />
    </>
  )
}

function ParentNav() {
  return (
    <ul className="flex gap-5 p-2 bg-black text-white border-b-2 border-[#ef4444]">
      <li><NavLink to={'/'}>{'User'}</NavLink></li>
      <li><NavLink to={'/Admin'}>{'Admin'}</NavLink></li>
    </ul>
  )
}