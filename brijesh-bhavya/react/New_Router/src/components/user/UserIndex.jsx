import { Outlet } from "react-router-dom";
import UserNavigation from "./modules/UserNavigation";

export default function UserIndex() {
  return (
    <>
      <UserNavigation />
      <Outlet />
    </>
  )
}