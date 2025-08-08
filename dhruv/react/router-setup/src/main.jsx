import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import GlobComponent from './GlobComponent.jsx'

createRoot(document.getElementById('root')).render(
  <GlobComponent>
    <App />
  </GlobComponent>
)
