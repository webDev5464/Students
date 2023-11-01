import { useState } from "react"

export default function UseState() {
  const [val, setVal] = useState(0)

  const increment = () => {
    setVal(val + 1)
  }

  const decrement = () => {
    setVal(val == 0 ? 0 : val - 1)
  }
  return (
    <>
      <h2>increment end decrement</h2>
      <button onClick={increment}>+</button>
      <h3>{val}</h3>
      <button onClick={decrement}>-</button>
    </>
  )
}