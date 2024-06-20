import { useEffect, useRef, useState } from "react"


export default function MyUseRef() {

  const autoFocus = useRef()
  const heading = useRef()

  // const [reload, setReload] = useState(false)
  const [reload, setReload] = useState(0)

  useEffect(() => {
    autoFocus.current.focus()

    if (reload != 0) {
      heading.current.style.backgroundColor = "red"
    }
  }, [reload])

  return (
    <>
      <input type="text" ref={autoFocus} />

      <h1 ref={heading}>Hello World!</h1>

      <button onClick={() => setReload(reload + 1)}>Focus Input</button>

      <p>Reloading time {reload}</p>
    </>
  )
}
