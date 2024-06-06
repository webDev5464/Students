import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./style/index.css"
import GlobProvider from './GlobProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobProvider>
      <App />
    </GlobProvider>
  </React.StrictMode>,
)
