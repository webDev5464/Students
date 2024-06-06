import { Outlet } from "react-router-dom";
import UserNavigation from "./UserNavigation";

export default function UserIndex() {
  return (
    <>
      <UserNavigation />

      <Outlet />
    </>
  )
}