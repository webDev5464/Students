import { useState } from "react"

const MyUseState = () => {
  return (
    <>
      <ChangeValueState />

      <hr /><hr />

      <CounterState />

      <hr /><hr />

      <ChangeTheme />
    </>
  )
}

export default MyUseState

function ChangeValueState() {
  const [oldValue, newValue] = useState('Chagan')

  const changeValue = () => {
    newValue("Magan")
  }

  return (
    <>
      <h1>{oldValue}</h1>
      <br />
      <button onClick={changeValue}>Change Value</button>
    </>
  )
}

function CounterState() {
  const [myValue, setMyValue] = useState(0)

  return (
    <>
      <h1>{myValue}</h1>

      <button onClick={() => setMyValue(myValue + 1)}>Increment</button>

      <button onClick={() => setMyValue(myValue - 1)}>Decrement</button>
    </>
  )
}

function ChangeTheme() {
  const [theme, setTheme] = useState(false)

  return (
    <>
      <div className={theme ? "card light" : "card dark"}>
        <h1>This is a heading</h1>
        <p>This is a title</p>
      </div>

      <button onClick={() => setTheme(!theme)}>Change Theme</button>
    </>
  )
}