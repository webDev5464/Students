import { Outlet } from "react-router-dom";
import AdminNav from "./modules/AdminNav";

export default function AdminIndex() {
  return (
    <div>
      <AdminNav />
      
      <Outlet />
    </div>
  )
}
