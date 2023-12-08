import { useContext } from "react"
import { MyContext } from "./App"
import { GlobalContext } from "./GlobContext"

export default function Output() {

  const { person } = useContext(GlobalContext)

  const { increment, decrement } = useContext(MyContext)
  return (
    <>
      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      {person}
    </>
  )
}