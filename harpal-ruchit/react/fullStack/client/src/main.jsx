import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Store } from './redux/Store.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './user/pages/Register.jsx'
import UserIndex from './user/UserIndex.jsx'
import Home from './user/pages/Home.jsx'
import Login from './user/pages/Login.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={createBrowserRouter([{
      path: '/', element: <App />, children: [{
        path: '/', element: <UserIndex />, children: [
          { path: '/', element: <Home /> },
          { path: '/register', element: <Register /> },
          { path: '/login', element: <Login /> }
        ]
      }]
    }])} />
  </Provider>
)
