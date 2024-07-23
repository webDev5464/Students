import { Outlet } from "react-router-dom";

export default function UserIndex() {
  return (
    <>
      <h1>This is a UserIndex</h1>
      <Outlet />
    </>
  );
}
