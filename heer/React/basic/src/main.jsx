import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App, { AppChild } from './App.jsx'
import "./Style.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AppChild />
  </StrictMode>,
)
