import { useEffect, useState } from "react"

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

  const increment = () => {
    setMyValue(myValue + 1)
  }

  const decrement = () => {
    setMyValue(myValue - 1)
  }

  useEffect(() => {
    alert("Click increment")
  }, [myValue])

  return (
    <>
      <h1>{myValue}</h1>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </>
  )
}

function ChangeTheme() {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    alert("Change Theme")
  }, [theme])

  return (
    <>
      <div className={theme ? "card light" : "card dark"}>
        <h1>This is a heading</h1>
        <p>This is a title</p>
      </div>

      <button onClick={() => setTheme(!theme)}>Change Theme</button>

      <button>Alert Box</button>
    </>
  )
}