import { useContext } from "react"
import { MyContext } from "./App"

export default function Home() {

  const { person } = useContext(MyContext)

  return (
    <div>
      {person}
      <h2>Home</h2>
    </div>
  )
}