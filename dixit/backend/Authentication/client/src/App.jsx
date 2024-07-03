import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './Index'
import UserIndex from './users/UserIndex'
import AdminIndex from './admin/AdminIndex'
import AdminHome from './admin/pages/AdminHome'
import AdminAbout from './admin/pages/AdminAbout'
import UserRegister from './users/pages/UserRegister'
import UserLogin from './users/pages/UserLogin'
import UserHome from './users/pages/UserHome'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: '/',
        element: <UserIndex />,
        children: [
          { path: '/', element: <UserHome /> },
          { path: '/Register', element: <UserRegister /> },
          { path: '/login', element: <UserLogin /> },
        ]
      },
      {
        path: '/admin',
        element: <AdminIndex />,
        children: [
          { path: '/admin', element: <AdminHome /> },
          { path: '/admin/about', element: <AdminAbout /> }
        ]
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={Router} />
}