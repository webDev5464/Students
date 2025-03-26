import { useState } from "react"

export default function About() {
  return (
    <>
      <ExampleOne />
      <hr />
      <ExampleTwo />
    </>
  )
}

function ExampleOne() {
  // useState

  // const [user, setUser] = useState("chagan")
  const [user, setUser] = useState(true)

  // const user = "chagan"

  // const changeName = () => {
  //   setUser("Magan")
  // }

  return (
    <>
      <h1>Hello {user ? "Chagan" : "Magan"}</h1>

      {/* <button onClick={() => setUser("Magan")}>Click Me!</button> */}
      <button onClick={() => setUser(!user)}>Click Me!</button>
    </>
  )
}

function ExampleTwo() {

  const [num, setNum] = useState(0)

  return (
    <>
      <button onClick={() => setNum(num + 1)}>Increment</button>
      <h1>{num}</h1>
      <button onClick={() => setNum(num <= 0 ? 0 : num - 1)}>Decrement</button>
    </>
  )
}
