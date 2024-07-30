import { Outlet } from "react-router-dom";
import AdminNavigation from "./modules/AdminNavigation";

export default function AdminIndex() {
  return (
    <>
      <h1>AdminIndex Page</h1>
      <AdminNavigation />
      <Outlet />
    </>
  );
}
