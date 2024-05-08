import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="logo">React App</div>

        <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'About'}>About</NavLink></li>
          <li><NavLink to={'Chagan'}>Service</NavLink></li>
          <li><NavLink to={'Contact'}>Contact Us</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation