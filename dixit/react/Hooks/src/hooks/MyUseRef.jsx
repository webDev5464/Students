/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react"
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function MyUseRef() {
  return (
    <section className="useRefPage">
      <ExampleOne />
      <hr />
      <ExampleTwo />
    </section>
  )
}

function ExampleOne() {
  const [reload, setReload] = useState(true)

  const autoFocus = useRef()

  useEffect(() => {
    autoFocus.current.focus()
    console.log(autoFocus.current);
  }, [reload])

  return (
    <>
      <input type="text" ref={autoFocus} />
      <button onClick={() => setReload(!reload)}>Reload UseEffect</button>
    </>
  )
}

function ExampleTwo() {

  const [lastScroll, setLastScroll] = useState(0)

  const [newScroll, setNewScroll] = useState(false)

  const scrollHandler = () => {
    window.scrollY >= lastScroll ? setNewScroll(true) : setNewScroll(false)

    setLastScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
  }, [lastScroll])

  const goToElement = useRef()

  return (
    <>
      <p ref={goToElement}>Scroll down to see the effect</p>

      <button
        className={newScroll ? "activeButton" : "notActiveButton"}
        onClick={() => goToElement.current?.scrollIntoView({ behavior: "smooth" })}
      >
        <FaArrowAltCircleUp />
      </button>

      {/* npm i react-icons */}
    </>
  )
}