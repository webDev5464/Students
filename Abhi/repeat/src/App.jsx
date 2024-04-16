import { useState } from "react"

export default function App() {
  return (
    <>
      <IncrementAndDecrementValueUsingUseState />
      <hr />
      <ChangeThemeUsingUseState />
    </>
  )
}

function IncrementAndDecrementValueUsingUseState() {
  const [value, setValue] = useState(0)

  return (
    <>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <h1>{value}</h1>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </>
  )
}

function ChangeThemeUsingUseState() {

  const [theme, setTheme] = useState(false)

  return (
    <>
      <div className={`card ${theme ? 'dark' : 'light'}`}>
        <h1>This is a title</h1>
        <p>This is a paragraph.</p>
      </div>

      <button onClick={() => setTheme(!theme)}>Change theme</button>
    </>
  )
}