import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/slices/SliceHandler"

export default function App() {
  const dispatch = useDispatch()
  const { num } = useSelector((state) => state.Counter)
  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>{num}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}