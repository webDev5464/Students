import { useDispatch, useSelector } from "react-redux"
import { incrementHandler } from "./redux/user/UserSlice"
import { TestingFunction } from "./redux/admin/AdminSlice"

export default function App() {
  const dispatch = useDispatch()
  const { count } = useSelector(state => state.UserStore)
  const { Num } = useSelector(state => state.AdminStore)
  return (
    <>
      <button onClick={() => {
        dispatch(incrementHandler())
        dispatch(TestingFunction())
      }}>Increment</button>
      <h1>{count}</h1>
      <h3>{Num}</h3>
      <button onClick={() => dispatch(TestingFunction())}>Testing Function</button>
    </>
  )
}
