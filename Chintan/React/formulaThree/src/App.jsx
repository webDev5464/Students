import { useEffect, useRef } from "react"

export default function App() {
  return (
    <>
      <InputFocus />
      <br /><br />
      <ClickScroll />
    </>
  )
}

function InputFocus() {
  const inputValue = useRef(null)

  const focusInput = () => {
    inputValue.current.focus()
  }

  useEffect(() => {
    inputValue.current.focus()
  })

  return (
    <>
      <input type="text" ref={inputValue} />
      <button onClick={focusInput}>Click!</button>
    </>
  )
}

function ClickScroll() {

  const Element = useRef(null)

  const Scroll = () => {
    Element.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <button onClick={Scroll}>Click Scroll</button >

      <div style={{ height: '200vh' }}></div>

      <h2 ref={Element}>Hello React</h2>

      <div style={{ height: "100vh" }}></div>
    </>
  )
}