import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Index from "./components/Index"
import UserIndex from "./components/user/UserIndex"
import AdminIndex from "./components/admin/AdminIndex"
import Home from './components/user/pages/Home'
import Contact from "./components/user/pages/Contact"
import About from "./components/user/pages/About"
import AdminHome from "./components/admin/pages/AdminHome"
import AdminContact from "./components/admin/pages/AdminContact"
import AdminAbout from "./components/admin/pages/AdminAbout"

export const NavigationRouter = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: '/',
        element: <UserIndex />,
        children: [
          { path: '/', element: <Home />, pageName: "home" },
          { path: 'Contact', element: <Contact />, pageName: "contact" },
          { path: 'About', element: <About />, pageName: "About" },
        ]
      },
      {
        path: '/admin',
        element: <AdminIndex />,
        children: [
          { path: '/admin', element: <AdminHome /> },
          { path: '/admin/contact', element: <AdminContact /> },
          { path: '/admin/About', element: <AdminAbout /> }
        ]
      }
    ]
  }
])

export default function App() {
  return (
    <>
      <main className="">
        <RouterProvider router={NavigationRouter} />
      </main>
    </>
  )
}