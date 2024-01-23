/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const LogicContext = createContext()

export default function GlobContext({ children }) {

  const [data, setData] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("https://dynamic-api-webdev5464.onrender.com/api/products").then(x => x.json()).then(x => setData(x))
  }, [])

  const addToCart = (id) => {
    const find = data.find(val => val._id === id)
    setCart([...cart, find])
  }

  return (
    <LogicContext.Provider value={{ data, addToCart, cart }}>
      {children}
    </LogicContext.Provider>
  )
}