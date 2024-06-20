import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.css"
import GlobContext from './Context/GlobContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobContext>
      <App />
    </GlobContext>
  </React.StrictMode>,
)
