import { useEffect, useState } from "react"

export default function TitleCounter() {

  const [val, setVal] = useState(0)

  useEffect(() => {
    document.title = `MyApp : ${val}`

    return () => {
      document.title = ""
    }
  })

  const Increment = () => {
    setVal(val + 1)
  }

  return (
    <>
      {val}
      <button onClick={Increment}>+</button>
    </>
  )
}