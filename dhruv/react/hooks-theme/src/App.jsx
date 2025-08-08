import { useEffect, useState } from "react"

export default function App() {
  const [theme, setTheme] = useState("light")

  const themeHandler = () => {
    if (theme == "light") {
      setTheme("dark")
      localStorage.setItem("theme", "dark")
    } else {
      setTheme("light")
      localStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    const getTheme = localStorage.getItem("theme")

    if (getTheme) {
      setTheme(getTheme)
    }
  }, [])

  return (
    <main className={theme == "light" ? "light" : "dark"}>
      <h1>Hello World!</h1>

      <button onClick={themeHandler}>Change Theme</button>
    </main>
  )
}
