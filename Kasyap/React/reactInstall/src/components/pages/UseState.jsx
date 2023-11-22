import { useContext, useState } from "react"
import { MyContext } from "./ContextProvider"

export default function UseState() {

  const { data, person } = useContext(MyContext)

  return (
    <>
      <h1>{data.fName + " " + data.lName}</h1>

      <ValueIncrementEndDecrement />

      <hr />

      <ToggleTheme />
    </>
  )
}

function ValueIncrementEndDecrement() {
  const [val, setVal] = useState(0)

  const Decrement = () => {
    setVal(val == 0 ? 0 : val - 1)
  }

  const Increment = () => {
    setVal(val + 1)
  }

  return (
    <>
      <button onClick={Decrement}>Decrement</button>
      <h1>{val}</h1>
      <button onClick={Increment}>Increment</button>
    </>
  )
}

function ToggleTheme() {

  const [theme, setTheme] = useState(true)

  const changeTheme = () => {
    setTheme(!theme)
  }

  return (
    <>
      <div className={`card ${theme ? "light" : "dark"}`}>
        <h1>Hello World!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur asperiores odio natus magnam facilis odit ab in quasi minus! Ipsum ratione, illum deleniti sapiente quaerat tenetur ad amet nostrum!</p>
        <p>Deleniti optio pariatur doloremque. Ducimus quaerat quibusdam eius rerum perferendis neque sunt, possimus consequuntur est ipsam magnam facere illo quisquam quasi iusto facilis totam culpa? Soluta reprehenderit mollitia recusandae consectetur?</p>
      </div>

      <button onClick={changeTheme}>
        {theme ? "Dark" : "Light"}
      </button>
    </>
  )
}