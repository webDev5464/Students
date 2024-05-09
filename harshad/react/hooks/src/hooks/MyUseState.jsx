import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MyUseState() {

  return (
    <>
      <hr />
      <ExampleOne />
      <hr />
      <ExampleTwo />
      <hr />
      <ExampleThree />
      <hr />
      <ExampleFive />
      <hr />
    </>
  )
}

function ExampleOne() {
  // let person = "John"
  const [person, setPerson] = useState("John")

  // const nameChanger = () => {
  //   setPerson("Chagan")
  // }

  return (
    <>
      <h1>Hello {person}</h1>
      {/* <button onClick={nameChanger}>Change Name</button> */}
      <button onClick={() => setPerson("Chagan")}>Change Name</button>
    </>
  )
}

function ExampleTwo() {

  const [users, setUsers] = useState(false)

  return (
    <>
      <h1>Hello {users ? "Magan" : "Chagan"}</h1>
      <button onClick={() => setUsers(!users)}>Change Name</button>
    </>
  )
}

function ExampleThree() {

  const [num, setNum] = useState(0)

  const increment = () => {
    setNum(num + 1)
  }

  return (
    <section className="increaseDecrease">
      <button onClick={increment}><FaPlus /></button>
      <h1>{num}</h1>
      <button onClick={() => setNum(num == 0 ? 0 : num - 1)}><FaMinus /></button>
    </section>
  )
}

function ExampleFive() {
  const [value, setValue] = useState({ background: '', color: '' })

  const changeColor = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  return (
    <>
      <section className="card" style={
        { backgroundColor: value.background, color: value.color }
      }>
        <h1>Hello World!</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>

      <input type="text" name="background" placeholder="Background Color" onChange={changeColor} />
      <input type="text" name="color" placeholder="Text Color" onChange={changeColor} />
    </>
  )
}

// https://react-icons.github.io/react-icons/