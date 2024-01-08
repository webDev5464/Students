import { useEffect, useRef, useState } from "react"

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

  useEffect(() => {
    focusInput.current.focus()
  }, [focus])

  return (
    <>
      <input type="text" ref={focusInput} />
      <button onClick={() => setFocus(!focus)}>click and focus</button>
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