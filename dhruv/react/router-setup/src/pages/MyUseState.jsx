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
      <hr />
      <Task />
    </>
  )

}

function ExampleOne() {
  const [user, setUser] = useState("Chagan")

  return (
    <div>
      <h1>{user}</h1>
      <button onClick={() => setUser("Magan")}>Change Name</button>
    </div>
  )
}

function ExampleTwo() {
  const [user, setUser] = useState(true)

  return (
    <>
      <h1>{user ? "Chagan" : "Magan"}</h1>
      <button onClick={() => setUser(!user)}>Toggle Value</button>
    </>
  )
}

function ExampleThree() {
  const [theme, setTheme] = useState(true)

  return (
    <>
      <h1 className={theme ? "light" : "dark"}>This is a heading</h1>
      <button onClick={() => setTheme(!theme)}>Dark</button>
    </>
  )
}

function ExampleFour() {
  const [val, setVal] = useState({
    backgroundColor: "",
    color: ""
  })

  const inputHandler = (e) => {
    const { name, value } = e.target

    setVal({ ...val, [name]: value })
  }

  return (
    <>
      <input type="text" placeholder="background-color" name="backgroundColor" onChange={inputHandler} />
      <input type="text" placeholder="color" name="color" onChange={inputHandler} />

      <h1 style={val}>Hello World!</h1>
    </>
  )
}

function Task() {
  // Task: not going -1 value
  // num == 0 ? 0 : num - 1

  const [num, setNum] = useState(0)

  const incrementHandler = () => {
    setNum(num + 1)
  }

  return (
    <>
      <button onClick={incrementHandler}>Increment</button>
      <h1>{num}</h1>
      <button onClick={() => setNum(num == 0 ? 0 : num - 1)}>Decrement</button>
    </>
  )
}