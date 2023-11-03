import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todo from './Todo'
import Home from './Home'
import Navigation from './Navigation'
import Product from './Product'
import Card from './Card'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='todo' element={<Todo />} />
        <Route path='Product' element={<Product />} />
        <Route path='Card' element={<Card />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App