import { useState } from "react"

export default function MyUseState() {

  let [val, setVal] = useState(0)

  const increment = () => {
    setVal(val + 1)
  }

  const decrement = () => {
    setVal(val == 0 ? 0 : val - 1)
  }

  return (
    <>
      <h1>{val}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <hr />

      <ThemeChange />
    </>
  )
}

const ThemeChange = () => {

  let [theme, setTheme] = useState(false)

  const changeTheme = () => {
    // setTheme(!theme)

    if (theme == false) {
      setTheme(true)
    } else {
      setTheme(false)
    }
  }

  return (
    <>
      <div className={theme ? "dark" : "light"}>
        <h3>Hello React</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore reprehenderit quis sit quos, omnis non? Assumenda, alias exercitationem consequatur quidem, iure, itaque iste magnam natus ratione atque voluptate ipsam nam?</p>
      </div>

      <button onClick={changeTheme}>Change Theme</button>
    </>
  )
}
