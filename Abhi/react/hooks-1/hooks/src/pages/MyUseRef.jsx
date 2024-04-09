import { useEffect, useRef } from "react"

const MyUseRef = () => {
  return (
    <>
      <AutoInputFocus />

      <hr />

      <AutoScroll />
    </>
  )
}

export default MyUseRef

const AutoInputFocus = () => {
  const autoFocus = useRef()

  useEffect(() => {
    autoFocus.current.focus()
  }, [])

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Write Something..." ref={autoFocus} />
        <input type="submit" value="Submit" />
      </form>

      <button onClick={() => autoFocus.current.focus()}>Write in input</button>
    </div>
  )
}

const AutoScroll = () => {
  const scrollTextarea = useRef(null);
  return (
    <>
      <button onClick={() => scrollTextarea.current?.scrollIntoView({ behavior: "smooth" })}>Go to Heading</button>

      <div style={{
        height: "500vh"
      }}></div>

      <h1 ref={scrollTextarea}>Hello React</h1>
    </>
  )
}