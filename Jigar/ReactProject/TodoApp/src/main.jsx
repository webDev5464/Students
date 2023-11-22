import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoProvider from './components/modules/TodoProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
  </TodoProvider>
)
