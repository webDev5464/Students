import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <>
      <h1>Index Page</h1>

      <Outlet />
    </>
  );
}
