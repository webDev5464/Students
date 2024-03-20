import { useEffect, useRef } from "react"

const MyUseRef = () => {
  return (
    <>
      <AutoFocusInput />
    </>
  )
}

export default MyUseRef

const AutoFocusInput = () => {
  const getInput = useRef()

  useEffect(() => {
    getInput.current.focus()
  }, [])
  return (
    <>
      <form action="" onSubmit={e => e.preventDefault()}>
        <input type="text" ref={getInput} />
        <button onClick={() => getInput.current.focus()} type="submit">Focus Input</button>
      </form>
    </>
  )
}