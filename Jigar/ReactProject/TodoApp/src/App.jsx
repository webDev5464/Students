import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoController from './components/pages/TodoController'

const App = () => {
  return (
    <BrowserRouter>

      <main className='m-5'>
        <Routes>
          <Route path='/' element={<TodoController />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App