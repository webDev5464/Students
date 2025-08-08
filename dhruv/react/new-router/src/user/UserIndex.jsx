import { Outlet } from "react-router-dom";

export default function UserIndex() {
  return (
    <div>
      <h1>This is a user home page</h1>
      <Outlet />
    </div>
  )
}
