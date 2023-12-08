import { useRef } from "react"

export default function UseRef() {
  return (
    <>
      <UserForm />
      <Scroll />
    </>
  )
}

function UserForm() {

  const focusInput = useRef()

  const clickFocus = () => {
    focusInput.current.focus()
  }

  return (
    <>
      <input type="text" ref={focusInput} />
      <button onClick={clickFocus}>Focus</button>
    </>
  )
}

function Scroll() {
  const ScrollRef = useRef()

  const ScrollBtn = () => {
    ScrollRef.current?.scrollIntoView(
      { behavior: "smooth" }
    )
  }

  return (
    <>
      <button onClick={ScrollBtn}>Scroll</button>

      <div style={{ height: "300vh" }}></div>

      <h1 ref={ScrollRef}>Hello React</h1>
    </>
  )
}