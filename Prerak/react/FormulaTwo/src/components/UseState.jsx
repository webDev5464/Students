import { useState } from "react"

export default function UseState() {
  return (
    <>
      <Counter />

      <hr />

      <ToggleTheme />
    </>
  )
}

function Counter() {
  const [val, setVal] = useState(0)

  // const increment = () => {
  //   setVal(val + 1)
  // }

  return (
    <>
      <h1>{val}</h1>

      <button onClick={() => setVal(val + 1)}>Increment</button>

      <button onClick={() => setVal(val == 0 ? 0 : val - 1)}>Decrement</button>
    </>
  )
}

function ToggleTheme() {
  const [theme, setTheme] = useState(true)

  // const themeChange = () => {
  //   if (theme == false) {
  //     setTheme(true)
  //     console.log("True");
  //   } else {
  //     setTheme(false)
  //     console.log("false");
  //   }
  // }

  const themeChange = () => {
    setTheme(!theme)
  }

  return (
    <>
      {/* <div className={theme == false ? "light" : "dark"}> */}
      <div className={theme ? "light" : "dark"}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, voluptas consectetur sit placeat temporibus nam fugiat impedit consequuntur culpa harum ex hic. Veniam dolore qui minima rem tenetur soluta eos?</p>
      </div >

      <button onClick={themeChange}>Theme Change</button>
    </>
  )
}