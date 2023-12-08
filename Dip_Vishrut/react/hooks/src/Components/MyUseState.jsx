import { useState } from "react"

const MyUseState = () => {
  return (
    <>
      <ChangeValue />

      <hr />

      <Counter />

      <hr />

      <ThemeChange />
    </>
  )
}

export default MyUseState

function ChangeValue() {

  const [person, setPerson] = useState("Hello")

  return (
    <>
      <h3>{person}</h3>

      <button onClick={() => setPerson("World!")}>Click</button>
    </>
  )
}

// =================

function Counter() {

  const [val, setVal] = useState(0)

  const Decrement = () => {
    // if (val === 0) {
    //   0
    // } else {
    //   setVal(val - 1)
    // }

    val == 0 ? 0 : setVal(val - 1)
  }

  return (
    <>
      <button onClick={Decrement}>Decrement</button>

      <h1>{val}</h1>

      <button onClick={() => setVal(val + 1)}>Increment</button>
    </>
  )
}

// ==================

function ThemeChange() {

  const [theme, setTheme] = useState(true)

  return (
    <div className={theme ? "card dark" : "card light"}>
      <h1>Hello World!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus alias minus nihil nesciunt aperiam debitis sit ea. Dolor, at odio.</p>

      <button onClick={() => setTheme(!theme)}>Change My theme</button>
    </div>
  )
}