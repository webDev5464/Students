import { NavLink, Outlet } from "react-router-dom"
import GlobContext from "./context/GlobContext"
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <GlobContext>
      <Navigation />
      <Outlet />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </GlobContext>
  )
}

export default App

const Navigation = () => {
  return (
    <>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'register'}>Register</NavLink></li>
        <li><NavLink to={'login'}>login</NavLink></li>
      </ul>
    </>
  )
}