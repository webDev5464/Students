import { useContext } from "react"
// import { MyContext } from "./App"
import { GlobContext } from "./GlobContext"

export default function Home() {

  const {
    Chagan,
    num,
    increment,
    decrement
  } = useContext(GlobContext)

  return (
    <>
      <h1>Hello My name is {Chagan}</h1>

      <br /><br />

      <h1>{num}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}
