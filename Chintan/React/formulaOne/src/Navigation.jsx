import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <ul>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'todo'}>Todo</NavLink></li>
      <li><NavLink to={'Product'}>Product</NavLink></li>
    </ul>
  )
}
