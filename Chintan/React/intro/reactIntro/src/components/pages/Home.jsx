import { useState } from "react"

function Home() {
  const [color, setColor] = useState()

  const [toggle, setToggle] = useState(true)

  return (
    <>
      <h1 className={color ? 'dark' : 'light'}>This is a Heading</h1>
      <button onClick={setColor}>Click</button>

      <hr />

      <h1 className={toggle ? "dark" : "light"}>Lorem, ipsum dolor.</h1>
      <button onClick={() => setToggle(!toggle)}>Click</button>
    </>
  )
}

export default Home