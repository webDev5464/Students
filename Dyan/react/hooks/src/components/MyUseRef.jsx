import { useEffect, useRef } from "react"

export default function MyUseRef() {
  const myRef = useRef(null)
  const autoFocusInput = useRef(null)

  const goToElement = () => {
    myRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const autoFocus = () => {
    autoFocusInput.current.focus()
  }

  useEffect(() => {
    // setTimeout(() => {
    //   myRef.current?.scrollIntoView({ behavior: "smooth" })
    // }, 2000)

    // setInterval(() => {
    //   myRef.current?.scrollIntoView({ behavior: "smooth" })
    // }, 3000)

    // return clearInterval()

    /* 
      * setInterval - removeInterval
    */
  }, [])

  return (
    <div>
      <button onClick={goToElement}>go To element</button>

      <div style={{ height: "400vh" }}></div>

      <form ref={myRef}>
        <input type="text" ref={autoFocusInput} />
      </form>

      <button onClick={autoFocus}>Focus Input</button>
    </div>
  )
}