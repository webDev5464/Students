import { useState } from "react"

export default function MyUseState() {
  return (
    <>
      <ChangeValue />
      <br />
      <hr />
      <br />
      <ChangeTheme />
    </>
  )
}

const ChangeValue = () => {
  const [val, setVal] = useState(0)

  const incrementFunction = () => {
    setVal(val + 1)
  }

  return (
    <>
      <h1>{val}</h1>

      <button onClick={incrementFunction}>Increment</button>
      <button onClick={() => setVal(val == 0 ? 0 : val - 1)}>Decrement</button>
    </>
  )
}

const ChangeTheme = () => {
  const [theme, setTheme] = useState(true)

  return (
    <>
      <div className={theme ? "dark card" : "light card"}>
        <h1>This is a Heading</h1>
        <p>This is a title</p>
      </div>

      <br />

      <button onClick={() => setTheme(!theme)}>Change Theme</button>
    </>
  )
}
