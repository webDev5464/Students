import { useState } from "react"

function About() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("Hello World!")

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>

      <hr />

      <h1>{title}</h1>
      <button onClick={() => setTitle("Hello React")}>Change TItle</button>
    </>
  )
}

export default About