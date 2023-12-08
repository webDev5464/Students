import { useEffect, useRef } from "react"

export default function About() {

  const scroll = useRef()

  const clickScroll = () => {
    scroll.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div>
      <h2>About</h2>
      <button onClick={clickScroll}>click</button>

      <div style={{ height: "300vh" }}></div>

      <h1 ref={scroll}>Hello World!</h1>

      <FormFocus />
    </div>
  )
}

function FormFocus() {

  const focusInp = useRef()

  const focusInput = () => {
    focusInp.current.focus()
  }

  useEffect(() => {
    focusInp.current.focus()
  }, [])

  return (
    <>
      <button onClick={focusInput}>Click and focus input</button>
      <input type="text" ref={focusInp} />
    </>
  )
}