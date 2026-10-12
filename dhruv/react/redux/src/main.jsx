import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux"
import { Store } from './redux/Store.jsx'
import './style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Register.jsx'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={createBrowserRouter([
      {
        path: '/', element: <App />, children: [
          { path: '/', element: <Home /> },
          { path: '/register', element: <Register /> }
        ]
      },
    ])} />
  </Provider>
)
