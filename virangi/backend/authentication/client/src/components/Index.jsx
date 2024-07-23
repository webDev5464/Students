import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <>
      <h1>This is a Index</h1>

      <Outlet />
    </>
  );
}
