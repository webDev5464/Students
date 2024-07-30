import { Outlet } from "react-router-dom";
import UserNavigation from "./layouts/UserNavigation";
import PopupMessage from "./layouts/PopupMessage";

export default function UserIndex() {
  return (
    <>
      <UserNavigation />
      <main className="p-5">
        <Outlet />
      </main>
      <PopupMessage />
    </>
  );
}
