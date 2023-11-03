import { useEffect, useRef } from "react"

export default function UseRef() {
  return (
    <>
      <ClickFocusInput />
    </>
  )
}

function ClickFocusInput() {

  const inputId = useRef()

  const activeInput = () => {
    inputId.current.focus()
  }

  useEffect(() => {
    inputId.current.focus()
  }, [])

  return (
    <>
      <input type="text" ref={inputId} />
      <button onClick={activeInput}>Click!</button>
    </>
  )
}