import "./style.css"
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import UserIndex from './users/UserIndex'
import AdminIndex from './admin/AdminIndex'
import AdminHome from './admin/pages/AdminHome'
import UserHome from './users/pages/UserHome'
import UserRegister from "./users/pages/UserRegister"
import { Provider } from "react-redux"
import { Store } from "./redux/Store"
import UserLogin from "./users/pages/UserLogin"
import AdminLogin from "./admin/pages/AdminLogin"

createRoot(document.getElementById('root')).render(
  <>
    <Provider store={Store}>
      {/* <PersistGate loading={null} persistor={Store}> */}
      <RouterProvider router={createBrowserRouter([
        {
          path: '/', element: <App />, children: [
            {
              path: '/', element: <UserIndex />, children: [
                { path: '/', element: <UserHome /> },
                { path: '/UserRegister', element: <UserRegister /> },
                { path: '/UserLogin', element: <UserLogin /> }
              ]
            },
            {
              path: '/admin', element: <AdminIndex />, children: [
                { path: '/admin', element: <AdminHome /> },
                { path: "/admin/login", element: <AdminLogin /> }
              ]
            },
          ]
        }
      ])} />
      {/* </PersistGate> */}
    </Provider>
  </>
)
