import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobContext from './GlobContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobContext>
    <App />
  </GlobContext>
)
