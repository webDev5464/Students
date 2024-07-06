import { Outlet } from "react-router-dom";
import UserNavigation from "./modules/UserNavigation";
import UserContext from "./context/UserContext";

export default function UserIndex() {

  return (
    <UserContext>
      <UserNavigation />
      <Outlet />
    </UserContext>
  )
}