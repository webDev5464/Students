import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Store } from './redux/Store.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Edit from './Edit.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={createBrowserRouter([
      { path: '/', element: <App /> },
      { path: '/edit', element: <Edit /> },
    ])} />
  </Provider>
)
