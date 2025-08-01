import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import UserIndex from './users/UserIndex'
import Home from './users/pages/Home'
import About from './users/pages/About'
import AdminHome from './admin/pages/AdminHome'
import AdminINdex from './admin/AdminINdex'
import AdminLogin from './admin/pages/AdminLogin'
import Register from './users/pages/Register'
import FetchingData from './users/pages/FetchingData'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(
      [
        {
          element: <App />, path: '/', children: [
            {
              element: <UserIndex />, path: '/', children: [
                { element: <Home />, path: '/' },
                { element: <About />, path: '/about' },
                { element: <Register />, path: '/register' },
                { element: <FetchingData />, path: "/FetchingData" }
              ]
            },
            {
              element: <AdminINdex />, path: '/admin', children: [
                { element: <AdminHome />, path: '/admin' },
                { element: <AdminLogin />, path: '/admin/login' }
              ]
            }
          ]
        }
      ]
    )} />
  </StrictMode>
)
