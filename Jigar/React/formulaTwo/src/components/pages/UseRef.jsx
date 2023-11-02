import { useEffect, useRef, useState } from "react"

export default function UseRef() {
  return (
    <>
      <FocusInput />
      <hr />
      <SameTimeChangeValue />
      <hr />
      <ClickScrollElement />
    </>
  )
}

//* --------------------------------

function FocusInput() {
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  )
}

//* --------------------------------

function SameTimeChangeValue() {

  const [val, setVal] = useState("")
  const currentValue = useRef(0)

  useEffect(() => {
    currentValue.current = currentValue.current + 1
  })

  return (
    <>
      <div>
        <input type="text" value={val} onChange={x => setVal(x.target.value)} />
        <h2>{currentValue.current}</h2>
      </div>
    </>
  )
}

//* --------------------------------

function ClickScrollElement() {
  const getToH1 = useRef(null)

  const clickGet = () => {
    getToH1.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <button onClick={clickGet}>ClicK!</button>
      <div style={{ height: "200vh" }}></div>
      <h1 ref={getToH1}>Hello React</h1>
    </>
  )
}