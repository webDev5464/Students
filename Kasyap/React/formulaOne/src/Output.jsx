import { useContext } from "react"
import { MyContext } from "./App"

export default function Output() {

  const { increment, decrement } = useContext(MyContext)
  return (
    <>
      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </>
  )
}