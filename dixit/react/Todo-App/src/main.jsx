import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobContext from './components/Context/GlobContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobContext><App /></GlobContext>
)
