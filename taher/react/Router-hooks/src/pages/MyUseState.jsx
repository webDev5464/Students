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
  // let title = 'World'

  // title = "magan"
  // const val = true

  const [val, setVal] = useState("Chagan")

  console.log(val);

  const buttonHandler = () => {
    setVal("Magan")
  }

  return (
    <>
      <h1>Hello {val}</h1>

      <button onClick={buttonHandler}>Change Value</button>
    </>
  )
}

function ExampleTwo() {

  const [a, b] = useState(true)

  return (
    <>
      <h1>{a ? "Hello" : "Goodbye"}</h1>

      <button onClick={() => b(!a)}>Change Value</button>
    </>
  )
}

function ExampleThree() {

  const [num, setNum] = useState(0)

  return (
    <>
      <button onClick={() => setNum(num + 1)}>Increment</button>

      <h1>{num}</h1>

      <button onClick={() => setNum(num - 1)}>Decrement</button>
    </>
  )
}