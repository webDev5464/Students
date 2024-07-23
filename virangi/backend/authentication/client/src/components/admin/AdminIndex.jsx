import { Outlet } from "react-router-dom";

export default function AdminIndex() {
  return (
    <>
      <h1>This is a AdminIndex</h1>
      <Outlet />
    </>
  );
}
