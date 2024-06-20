import { useContext } from "react"
import { AppContext } from "../App"

export default function ChildTwo() {

  const { user } = useContext(AppContext)

  return <h1>Child Two. {user}</h1>
}