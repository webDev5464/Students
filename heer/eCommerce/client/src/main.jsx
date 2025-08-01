import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { Store } from './redux/Store'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={createBrowserRouter([
      {
        path: '/', element: <App />, children: [

        ]
      }
    ])} />
  </Provider>
)
