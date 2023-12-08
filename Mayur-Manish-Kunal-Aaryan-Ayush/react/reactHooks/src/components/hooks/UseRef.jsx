import { useEffect, useRef } from "react"

export default function UseRef() {

  const AutoFocus = useRef()

  useEffect(() => {
    AutoFocus.current.focus()
  }, [])

  return (
    <input type="text" ref={AutoFocus} />
  )
}