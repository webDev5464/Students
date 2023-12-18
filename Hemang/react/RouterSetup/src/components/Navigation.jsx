import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
      <div>
        <h2>Heading</h2>
      </div>

      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'Chagan'}>About</NavLink></li>
        <li><NavLink to={'Service'}>Service</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation