import { useState } from "react"

function UseState() {
  const [magan, setMagan] = useState()

  const [val, setVal] = useState(0)
  return (
    <div>
      <h1 className={magan ? "dark" : "light"}>Hello World!</h1>
      <button onClick={() => { setMagan(!magan) }}>Click!</button>

      <hr />

      <button onClick={() => setVal(val === 0 ? 0 : val - 1)}>-</button>{" "}
      <span>{val}</span>
      {" "}<button onClick={() => setVal(val == 10 ? 10 : val + 1)}>+</button>
    </div>
  )
}

export default UseState