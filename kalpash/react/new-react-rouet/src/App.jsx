import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserIndex from "./components/users/UserIndex"
import Home from "./components/users/pages/Home"
import About from "./components/users/pages/About"
import AdminIndex from "./components/admin/AdminIndex"
import AdminHome from "./components/admin/pages/AdminHome"
import AdminAbout from "./components/admin/pages/AdminAbout"

const root = createBrowserRouter([
  {
    path: '/',
    element: <UserIndex />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'About', element: <About /> }
    ]
  },
  {
    path: '/admin',
    element: <AdminIndex />,
    children: [
      { path: '/admin', element: <AdminHome /> },
      { path: '/admin/About', element: <AdminAbout /> },
    ]
  }
])

export default function App() {
  return <RouterProvider router={root} />
}