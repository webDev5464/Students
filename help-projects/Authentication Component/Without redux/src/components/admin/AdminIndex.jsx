import { Outlet } from "react-router-dom";
import AdminNavigation from "./layouts/AdminNavigation";

export default function AdminIndex() {
  return (
    <>
      <AdminNavigation />
      <main className="p-5">
        <Outlet />
      </main>
    </>
  );
}
