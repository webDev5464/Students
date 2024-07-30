import { Outlet } from "react-router-dom";
import UserNavigation from "./layouts/UserNavigation";

export default function UserIndex() {
  return (
    <>
      <UserNavigation />
      <main className="p-5">
        <Outlet />
      </main>
    </>
  );
}
