import { useContext, useEffect, useRef, useState } from "react"
import { CreatedContext } from "./MyCreateContext"

export default function MyUseEffect() {
  return (
    <>
      <AutoFocusFirstTime />

      <hr />

      <FetchingData />
    </>
  )
}

function AutoFocusFirstTime() {
  const focusInput = useRef(null)
  const [focus, setFocus] = useState(false)

  const { person } = useContext(CreatedContext)

  useEffect(() => {
    focusInput.current.focus()
  }, [focus])

  return (
    <>
      <input type="text" ref={focusInput} />
      <button onClick={() => setFocus(!focus)}>click and focus</button>

      <br />

      {/* context use here */}
      <h1>{person}</h1>
    </>
  )
}

function FetchingData() {
  const [newData, setNewData] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/users").then((x) => x.json()).then((x) => setNewData(x.users))
  }, [])

  console.log(newData);

  return (
    <>
      <div>
        {newData.map((x, i) => {
          return (
            <div key={i}>
              <p>{x.firstName}</p>
              <img src={x.image} alt="" />
            </div>
          )
        })}
      </div>
    </>
  )
}