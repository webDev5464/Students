import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Anothor, MyApp, MyFunction } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyApp />
    <MyFunction />
    <Anothor />
  </React.StrictMode>,
)
