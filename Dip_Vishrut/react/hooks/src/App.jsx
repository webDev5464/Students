import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import MyUseState from './Components/MyUseState'
import MyUseEffect from './Components/MyUseEffect'
import MyUseRef from './Components/MyUseRef'
import { createContext, useState } from 'react'
import Home from './Components/Home'

export const MyContext = createContext()

const App = () => {

  const person = "John Doe"

  const [input, setInput] = useState("")
  const [inputData, setInputData] = useState([])

  const InputDataAdd = () => {
    setInputData(input)
    console.log(inputData);
  }


  return (
    <Router>
      <MyContext.Provider value={{ person, input, setInput, InputDataAdd, inputData }}>

        <Navigation />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='MyState' element={<MyUseState />} />
          <Route path='MyUseEffect' element={<MyUseEffect />} />
          <Route path='MyUseRef' element={<MyUseRef />} />
        </Routes>

      </MyContext.Provider>
    </Router>
  )
}

export default App

function Navigation() {
  return (
    <ul>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'MyState'}>UseState</NavLink></li>
      <li><NavLink to={"MyUseEffect"}>UseEffect</NavLink></li>
      <li><NavLink to={"MyUseRef"}>UseRef</NavLink></li>
    </ul>
  )
} 