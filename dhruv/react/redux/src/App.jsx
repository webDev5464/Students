import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function App() {

  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  )
}
