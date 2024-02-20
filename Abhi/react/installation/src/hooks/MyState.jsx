import { useState } from "react"

export default function MyState() {
  return (
    <>
      <ExampleOne />
      <br /><br />
      <ChangeThemeCard />
    </>
  )
}

function ExampleOne() {
  // const person = "John"

  const [person, setPerson] = useState('John')

  const changeValue = () => {
    setPerson("Chagan")
  }

  return (
    <>
      <h1>{person}</h1>

      <button onClick={changeValue}>Click</button>
    </>
  )
}

function ChangeThemeCard() {

  const [theme, setTheme] = useState(false)

  return (
    <>
      <div className={theme ? "card dark" : "card light"}>
        <h1>This is a Heading</h1>
        <p>This is a title</p>
        <button onClick={() => setTheme(!theme)}>Change Theme</button>
      </div>
    </>
  )
}