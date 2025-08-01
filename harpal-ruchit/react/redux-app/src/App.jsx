import { useDispatch, useSelector } from "react-redux"
import { increment } from "./redux/slices/MySlice"

function App() {
  const dispatch = useDispatch()
  const { num } = useSelector(e => e.MainSlice)

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
    </div>
  )
}

export default App
