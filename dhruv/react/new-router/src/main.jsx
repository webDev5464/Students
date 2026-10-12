import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserIndex from './user/UserIndex.jsx'
import AdminIndex from './admin/AdminIndex.jsx'
import About from './user/pages/About.jsx'
import Contack from './user/pages/Contack.jsx'
import EditUser from './admin/pages/EditUser.jsx'
import AddProduct from './admin/pages/AddProduct.jsx'
import Home from './user/pages/Home.jsx'
import AdminHome from './admin/pages/AdminHome.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={createBrowserRouter(
    [
      {
        path: '/', element: <App />, children: [
          {
            path: '/', element: <UserIndex />, children: [
              { path: '/', element: <Home /> },
              { path: '/About', element: <About /> },
              { path: '/userCon', element: <Contack /> }
            ]
          },
          {
            path: '/admin', element: <AdminIndex />, children: [
              { path: '/admin', element: <AdminHome /> },
              { path: '/admin/editUser', element: <EditUser /> },
              { path: '/admin/addProduct', element: <AddProduct /> }
            ]
          }
        ]
      }
    ]
  )} />
)
