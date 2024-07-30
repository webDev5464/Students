import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./components/Index";
import UserIndex from "./components/user/UserIndex";
import AdminIndex from "./components/admin/AdminIndex";
import Home from "./components/user/pages/Home";
import About from "./components/user/pages/About";
import AdminHome from "./components/admin/pages/AdminHome";
import AdminAbout from "./components/admin/pages/AbminAbout";

const root = createBrowserRouter([
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
  return <RouterProvider router={root} />;
}
