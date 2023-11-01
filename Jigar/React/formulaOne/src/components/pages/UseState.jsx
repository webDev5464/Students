import { useState } from "react"

export default function UseState() {
  const [theme, setTheme] = useState()

  const [val, setVal] = useState(0)

  const increaseVal = () => {
    setVal(val + 1)
  }

  const decrementVal = () => {
    setVal(val == 0 ? 0 : val - 1)
  }

  return (
    <>
      <div className={theme ? "dark" : "light"}>
        <h1>Hello React</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Facilis laudantium sed velit aliquid!</p>
        <p>Explicabo quaerat delectus eaque autem.</p>
        <button onClick={() => setTheme(!theme)}>ChangeTheme</button>
      </div>

      <div>
        <h2>Value is : {val}</h2>
        <button onClick={increaseVal}>Increment</button>
        <button onClick={decrementVal}>Decrement</button>
      </div>
    </>
  )
} 