import { useRef } from "react"
import MyPropsCard from "../modules/MyPropsCard"

const MyUseRef = () => {

  const activeInput = useRef()
  const scrollElement = useRef()
  const themeElement = useRef(null)

  const changeElement = () => {
    if (themeElement.current) {
      themeElement.current.style.backgroundColor = "red"
    }
  }

  return (
    <>
      <button onClick={() => scrollElement.current?.scrollIntoView({ behavior: "smooth" })}>Move to Element</button>

      <input type="text" ref={activeInput} />

      <br />

      <br />

      <button onClick={() => activeInput.current.focus()}>Active Input</button>


      <div style={{ height: "500vh" }}></div>

      <h1 ref={scrollElement}>Hello React</h1>

      <button onClick={changeElement}>Change Theme</button >
      <div ref={themeElement}>Lorem ipsum dolor sit amet.</div>

      <MyPropsCard card={{ heading: 'Object key value' }} />
    </>
  )
}

export default MyUseRef