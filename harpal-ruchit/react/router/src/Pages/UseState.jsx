import { useState } from "react";
import MyProps from "./MyProps";

export default function UseState() {

  return (
    <>
      <ExampleOne />

      <hr />

      <ExampleTwo />

      <hr />

      <ExampleThree />

      <MyProps myValue={{ heading: "Eearbud", title: "boat", price: 3999 }} />
    </>
  )
}

function ExampleOne() {
  const [user, setUser] = useState("chagan");

  return (
    <>
      <h1>{user}</h1>

      <button onClick={() => setUser("magan")}>Change name</button>
    </>
  )
}

function ExampleTwo() {

  const [num, setNum] = useState(0)

  return (
    <>
      <button onClick={() => setNum(num + 1)}>Increment</button>
      <h1>{num}</h1>
      <button onClick={() => num == 0 ? setNum(num) : setNum(num - 1)}>Decrement</button>
    </>
  )
}

function ExampleThree() {

  const [theme, setTheme] = useState({
    color: "",
    background: "",
  })

  return (
    <>
      <input type="text" onChange={(e) => setTheme({ ...theme, color: e.target.value })} />
      <br />
      <input type="text" onChange={(e) => setTheme({ ...theme, background: e.target.value })} />

      <h1 style={{ color: theme.color, backgroundColor: theme.background }}>Hello World!</h1>
    </>
  )
}