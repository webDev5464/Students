import { Outlet } from "react-router-dom";
import UserNavigation from "./modules/UserNavigation";

export default function UserIndex() {
  return (
    <>
      <h1>UserIndex Page</h1>
      <UserNavigation />

      <Outlet />
    </>
  );
}
