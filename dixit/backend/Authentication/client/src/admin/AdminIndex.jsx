import { Outlet } from "react-router-dom";
import AdminNavigation from "./modules/AdminNavigation";

export default function AdminIndex() {
  return (
    <>
      <AdminNavigation />
      <Outlet />
    </>
  )
}