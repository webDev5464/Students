import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import TodoForm from './pages/TodoForm'
import TodoList from './pages/TodoList'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { GlobProvider } from './context/GlobContext';

export default function App() {
  const { theme } = useContext(GlobProvider)
  return (
    <BrowserRouter>
      <Navigation />

      <main className={`${theme == 'light' ? 'bg-white text-black' : 'bg-black text-white'} h-[100vh] pt-14`}>
        <Routes>
          <Route path='/' element={<TodoForm />} />
          <Route path='List' element={<TodoList />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

const Navigation = () => {
  const { themeHandler, theme } = useContext(GlobProvider)

  return (
    <nav className={`${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} flex justify-between py-3 px-10 text-xl fixed w-full`}>
      <div>My Todo's</div>

      <div className='flex relative'>
        <ul className='flex'>
          <li className='mx-5'><NavLink to={'/'}>Add Todo</NavLink></li>
          <li className='mx-5'><NavLink to={'/List'}>Show Todo's</NavLink></li>
        </ul>

        <div>
          <button
            className='absolute top-1'
            onClick={themeHandler}
          >{theme == 'light' ? <FaMoon /> : <FaSun />}</button>
        </div>
      </div>
    </nav>
  )
}