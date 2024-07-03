/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";

export default function Index() {
  return (
    <>
      {/* <GlobNavigation /> */}
      <Outlet />
    </>
  )
}

function GlobNavigation() {
  return (
    <>
      <li><NavLink to={'/'}>User</NavLink></li>
      <li><NavLink to={'/admin'}>Admin</NavLink></li>
    </>
  )
}