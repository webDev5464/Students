import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import MyUseRef from "./hooks/UseRef";
import MyUseState from "./hooks/UseState";
import MyUseEffect from "./hooks/MyUseEffect";
import Home from "./Home";

export default function App() {


  const productList = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
    },
  ]

  return (
    <BrowserRouter>
      <Navigation />

      {
        productList.map((x) => (
          <div key={x.id}>
            <p>{x.name}</p>
          </div>
        ))
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="UseState" element={<MyUseState />} />
        <Route path="UseRef" element={<MyUseRef />} />
        <Route path="UseEffect" element={<MyUseEffect />} />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
  return (
    <ul>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'UseState'}>UseState</NavLink></li>
      <li><NavLink to={'UseRef'}>UseRef</NavLink></li>
      <li><NavLink to={'UseEffect'}>UseEffect</NavLink></li>
    </ul>
  )
}