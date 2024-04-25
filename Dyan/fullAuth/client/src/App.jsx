import { NavLink, Outlet } from "react-router-dom"

const App = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App

const Navigation = () => {
  return (
    <>
      <ul>
        <li><NavLink to={'/'}>Register</NavLink></li>
        <li><NavLink to={'login'}>login</NavLink></li>
      </ul>
    </>
  )
}