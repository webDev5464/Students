import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './main.css'
import UserIndex from './users/UserIndex.jsx'
import AdminIndex from './admin/AdminIndex.jsx'
import Home from './users/pages/Home.jsx'
import About from './users/pages/About.jsx'
import Service from './users/pages/Service.jsx'

const myRoute = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <UserIndex />,
        children: [
          { path: '/', element: <Home /> },
          { path: '/about', element: <About /> },
          { path: '/chagan', element: <Service /> }
        ]
      },
      {
        path: '/admin',
        element: <AdminIndex />
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRoute} />
  </React.StrictMode>
)
