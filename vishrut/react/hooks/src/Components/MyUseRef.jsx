import { useRef } from "react"

const MyUseRef = () => {

  const ClickFocus = useRef()

  const scrollElement = useRef()

  return (
    <>
      <input type="text" ref={ClickFocus} />
      <br /><br />
      <button onClick={() => ClickFocus.current.focus()}>Focus Input</button>

      <hr />

      <button onClick={() => scrollElement.current?.scrollIntoView({ behavior: "smooth" })}>Scroll to element</button>

      <div style={{ height: "500vh" }}></div>

      <h1 ref={scrollElement}>Hello React</h1>
    </>
  )
}

export default MyUseRef