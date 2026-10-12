import { useDispatch, useSelector } from "react-redux"
import { decrementHandler, defaultThemeHandler, incrementHandler, themeHandler } from "./redux/slice/UserSlice"
import { useEffect } from "react"
import GetData from "./GetData"

export default function Home() {
  const dispatch = useDispatch()
  const { num, theme } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(defaultThemeHandler())
  }, [])

  return (
    <div className={`main ${theme == "dark" ? "dark" : "light"}`}>
      <button onClick={() => dispatch(incrementHandler(10))}>Increment</button>
      <h1>Hello World! {num}</h1>
      <button onClick={() => dispatch(decrementHandler())}>Decrement</button>

      <br /><br />
      <button onClick={() => dispatch(themeHandler())}>Change Theme</button>

      <hr />

      <GetData />
    </div>
  )
}
