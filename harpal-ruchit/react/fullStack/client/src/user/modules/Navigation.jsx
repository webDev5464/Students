import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
      </ul>
    </div>
  )
}
