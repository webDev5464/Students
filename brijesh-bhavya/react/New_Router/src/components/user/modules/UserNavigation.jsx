import { NavLink } from "react-router-dom";
// import { NavigationRouter } from "../../../App";

export default function UserNavigation() {

  // console.log('====================================');
  // console.log(NavigationRouter.routes[0]);
  // console.log('====================================');
  return (
    <nav>
      <div>
        <h2>User Nav</h2>
      </div>

      <ul>
        <li><NavLink to={'/'}>{'Home'}</NavLink></li>
        <li><NavLink to={'About'}>{'About'}</NavLink></li>
        <li><NavLink to={'Contact'}>{'Contact'}</NavLink></li>
      </ul>
    </nav>
  )
}