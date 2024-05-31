import { useState } from "react"

export default function MyUseState() {
  return (
    <>
      <ExampleOne />

      <hr />

      <ExampleTwo />

      <hr />

      <ExampleThree />
    </>
  )
}

function ExampleOne() {
  // const person = "Chagan"

  const [person, setPerson] = useState("Chagan")

  const changeValue = () => {
    setPerson("Magan")
  }

  return (
    <>
      <h1>Hello {person}</h1>
      <button onClick={changeValue}>Click</button>
    </>
  )
}

// ============================================

function ExampleTwo() {

  const [user, setUser] = useState(true)

  return (
    <>
      <h1>Hello {user ? "Chagan" : "Magan"}</h1>

      <button onClick={() => setUser(!user)}>Click Me!</button>
    </>
  )
}

// ============================================

function ExampleThree() {

  const [num, setNum] = useState(0)

  return (
    <>
      <button onClick={() => setNum(num + 1)}>Increment</button>
      <h1>{num}</h1>

      <button onClick={() => setNum(num > 0 ? num - 1 : num)}>Decrement</button>
    </>
  )
}

// Toggle drop down