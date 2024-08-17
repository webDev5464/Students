import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./components/Index";
import UserIndex from "./components/user/UserIndex";
import Home from "./components/user/pages/Home";
import About from "./components/user/pages/About";
import AdminIndex from "./components/admin/AdminIndex";
import AdminHome from "./components/admin/pages/AdminHome";
import AdminAbout from "./components/admin/pages/AdminAbout";
import Register from "./components/user/pages/Register";
import Login from "./components/user/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <UserIndex />,
        children: [
          { path: "/", element: <Home /> },
          { path: "about", element: <About /> },
          { path: "register", element: <Register /> },
          { path: "login", element: <Login /> },
        ],
      },
      {
        path: "/admin",
        element: <AdminIndex />,
        children: [
          { path: "/admin", element: <AdminHome /> },
          { path: "/admin/about", element: <AdminAbout /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
} 
