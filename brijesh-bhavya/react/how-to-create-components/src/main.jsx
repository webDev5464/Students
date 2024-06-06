import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { AnotherFunc, HelloFunc } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AnotherFunc />
    <HelloFunc />
  </React.StrictMode>,
)
