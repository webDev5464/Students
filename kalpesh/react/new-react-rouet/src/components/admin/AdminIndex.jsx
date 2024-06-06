import { Outlet } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";

export default function AdminIndex() {
  return (
    <>
      <AdminNavigation />

      <Outlet />
    </>
  )
}