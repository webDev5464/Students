import { useState } from "react"

const MyUseState = () => {
  return (
    <>
      <ChangeNameEx />

      <hr />

      <Counter />

      <hr />

      <ToggleTheme />
    </>
  )
}

export default MyUseState

// ================================

const ChangeNameEx = () => {
  const [person, setPerson] = useState("Chagan")

  const changeNameBtn = () => {
    setPerson("Magan")
  }

  return (
    <div>
      <h1>{person}</h1>
      <button onClick={changeNameBtn}>Change Name</button>
    </div>
  )
}

// ================================

const Counter = () => {

  const [val, setVal] = useState(0)

  const decrement = () => {
    setVal(val == 0 ? 0 : val - 1)
  }

  return (
    <div>
      <button onClick={() => setVal(val + 1)}>Increment</button>

      <h1>{val}</h1>

      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

// ================================

const ToggleTheme = () => {

  const [theme, setTheme] = useState(false)

  return (
    <div>
      <div className={theme ? "themeCard dark" : "themeCard light"}>
        <h2>This is a heading</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti soluta modi nulla, autem eos esse, aut deserunt, alias doloremque cupiditate dolores debitis itaque? Iste dolorum, enim ipsa quia a quisquam.</p>
      </div>

      <button onClick={() => setTheme(!theme)}>ThemeChange</button>
    </div>
  )
}

// ================================

// condition ? true : false
