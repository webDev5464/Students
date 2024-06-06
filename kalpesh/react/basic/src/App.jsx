// import { useEffect, useRef } from "react"

import Prop from "./Prop";

// export default function App() {
//   const autoFocus = useRef()

//   const focusInput = () => {
//     autoFocus.current.focus()
//   }

//   useEffect(() => {
//     autoFocus.current.focus()
//   }, [])

//   return (
//     <>
//       <input type="text" name="" id="" ref={autoFocus} />
//       <button onClick={focusInput}>Focus</button>
//     </>
//   )
// }

export default function App() {
  return <>
    <Prop title="robin" />
  </>
}