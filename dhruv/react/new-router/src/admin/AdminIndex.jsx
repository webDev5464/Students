import { Outlet } from "react-router-dom";

export default function AdminIndex() {
  return (
    <div>
      <h1>THis is a AdminIndex</h1>
      <Outlet />
    </div>
  )
}
