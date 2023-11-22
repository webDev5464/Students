import { useState } from "react"

export default function UseState() {
  return (
    <>
      <Counter />
    </>
  )
}



function Counter() {

  const [val, setVal] = useState(0)

  const increment = () => {
    setVal(val + 1)
  }

  const decrement = () => {
    setVal(val == 0 ? 0 : val - 1)
  }

  return (
    <>
      <h1>{val}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}