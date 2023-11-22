import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import "./components/styles/index.css"
import ContextProvider from './components/pages/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <Router />
  </ContextProvider>
)
