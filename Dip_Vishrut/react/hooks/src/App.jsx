import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import MyUseState from './Components/MyUseState'
import MyUseEffect from './Components/MyUseEffect'
import MyUseRef from './Components/MyUseRef'

const App = () => {
  return (
    <Router>

      <Navigation />

      <Routes>
        <Route path='/' element={<MyUseState />} />
        <Route path='MyUseEffect' element={<MyUseEffect />} />
        <Route path='MyUseRef' element={<MyUseRef />} />
      </Routes>

    </Router>
  )
}

export default App

function Navigation() {
  return (
    <ul>
      <li><NavLink to={'/'}>UseState</NavLink></li>
      <li><NavLink to={"MyUseEffect"}>UseEffect</NavLink></li>
      <li><NavLink to={"MyUseRef"}>UseRef</NavLink></li>
    </ul>
  )
} 