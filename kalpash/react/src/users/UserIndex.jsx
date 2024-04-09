import { Outlet } from "react-router-dom"
import Navigation from "./modules/Navigation"
import '../main.css'

function UserIndex() {
  return (
    <>
      {/* <h1>Navigation</h1> */}
      <Navigation />
      <Outlet />
      {/* <h3>Footer</h3> */}
    </>
  )
}

export default UserIndex