import { useContext } from "react"
import { AppProvider } from "../App"

export default function Home() {

  const { person } = useContext(AppProvider)

  return (
    <>
      <h1>This is a Home page</h1>
      <p>Hello {person}</p>
    </>
  )
}