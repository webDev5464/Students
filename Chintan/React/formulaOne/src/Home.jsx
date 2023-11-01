import { useEffect, useState } from 'react'

export default function Home() {
  const [val, setVal] = useState(0)
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")

  useEffect(() => {
    setTimeout(() => {
      setVal((x) => x + 1)
    })
  }, [])

  useEffect(() => {
    setCount(() => count * 2)
  })

  return (
    <>
      <h1>{val}</h1>

      <h3>{count}</h3>

      <button onClick={() => setCount((x) => x + 1)}>Click Me</button>

      <h2>Selected Color {color}</h2>

      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("yellow")}>yellow</button>
      <button onClick={() => setColor("blue")}>blue</button>
    </>
  )
}
