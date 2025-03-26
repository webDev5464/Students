import { useEffect, useState } from "react"

export default function Contact() {

  const [val, setVal] = useState(true)

  useEffect(() => {
    console.log("Hello")
    console.log(val)
  }, [val])

  return (
    <>
      <h1>This is a Contact page</h1>
      <button onClick={() => setVal(!val)}>Click Me!</button>
      <Example />
    </>
  )
}

function Example() {
  return <h1>Hello Heer</h1>
}