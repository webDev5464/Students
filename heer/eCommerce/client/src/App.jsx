import { useDispatch, useSelector } from "react-redux"
import { autoTheme, themeHandler } from "./redux/slice/userSlice"
import { useEffect } from "react"

export default function App() {
  const dispatch = useDispatch()
  const { theme } = useSelector(s => s.user)

  useEffect(() => {
    dispatch(autoTheme())
  }, [])

  return (
    <div className={`main ${theme == "light" ? "light" : "dark"}`}>
      <h1>THis is a App</h1>

      <button onClick={() => dispatch(themeHandler())}>Change theme</button>
    </div>
  )
}
