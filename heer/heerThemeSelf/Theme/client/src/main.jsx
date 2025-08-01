import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import { store } from '../redux/store.jsx'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <RouterProvider router={
      createBrowserRouter([
        {
        path:'/',element:<App /> , children :[]
        }
    ])
    }
      
       
 />





  </Provider>


)
