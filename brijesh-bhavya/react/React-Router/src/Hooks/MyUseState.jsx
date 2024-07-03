import { useContext, useState } from "react"
import { AppProvider } from "../App"

export default function MyUseState() {
  return (
    <>
      <ExampleOne />

      <hr />

      <ExampleTwo />

      <hr />

      <ExampleThree />
    </>
  )
}

function ExampleOne() {
  // const myPerson = "Chagan"

  const { person, user } = useContext(AppProvider)

  const [myPerson, setMyPerson] = useState(user)

  const changeValue = () => {
    setMyPerson(person)
  }

  return (
    <>
      <h1>Hello {myPerson}</h1>

      {/* <button onClick={() => setmyPerson("Magan")}>Change Name</button> */}
      <button onClick={changeValue}>Change Name</button>
    </>
  )
}

function ExampleTwo() {

  const [user, setUser] = useState(true)

  return (
    <>
      <h1>Hello {user ? "Chagan" : "Magan"}</h1>
      <button onClick={() => setUser(!user)}>Change Value</button>
    </>
  )
}

function ExampleThree() {

  const [num, setNum] = useState(0)

  const increment = () => setNum(num + 1)

  return (
    <>
      <button onClick={increment}>Increment</button>
      <h1>{num}</h1>
      <button onClick={() => setNum(num - 1)}>Decrement</button>
    </>
  )
}
