import { useState } from "react"

export default function MyUseState() {
  return (
    <>
      <ExampleOne />
      <hr />
      <ExampleTwo />
      <hr />
      <ExampleThree />
      <hr />
      <ExampleFour />
    </>
  )
}

function ExampleOne() {
  // const person = "Chagan"

  const [person, setPerson] = useState("Chagan")

  // const changeHandler = () => {
  //   setPerson("Magan")
  // }
  return (
    <>
      <h1>Hello {person}</h1>

      <button onClick={() => setPerson("Magan")}>Change</button>
    </>
  )
}

function ExampleTwo() {

  const [user, setUser] = useState(true)

  return (
    <>
      <h1>Hello {user ? "Chagan" : "Magan"}</h1>

      <button onClick={() => setUser(!user)}>Change Value</button>
    </>
  )
}

function ExampleThree() {
  const [num, setNum] = useState(0)

  const increase = () => {
    setNum(num + 1)
  }

  return (
    <>
      <button onClick={increase}>Increment</button>
      <h1>Number : {num}</h1>

      {/* Fix The bug */}
      <button onClick={() => setNum(num - 1)}>Decrement</button>
    </>
  )
}

function ExampleFour() {

  const [themeValue, setThemeValue] = useState({
    color: "",
    bgColor: ""
  })

  const getInputValue = (e) => {
    setThemeValue({ ...themeValue, [e.target.name]: e.target.value })
    console.log(themeValue);
  }

  // const arr = { a: [1, 2], b: [3, 4], c: [5, 6] }
  // console.log({ val: [...arr.a, ...arr.b] });

  return (
    <>
      <p>Write your theme.</p>
      <span>Background : </span>
      <input type="text" onChange={getInputValue} name="bgColor" />
      <span> Text Color : </span>
      <input type="text" onChange={getInputValue} name="color" />

      <div className="card" style={{
        backgroundColor: themeValue.bgColor,
        color: themeValue.color
      }}>
        <h1>Hello World!</h1>
        <p>This is a title</p>
      </div>
    </>
  )
}
