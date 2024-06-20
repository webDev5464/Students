import { useContext } from "react"
import { AppContext } from "../App"

export default function ChildOne() {

  const { person, user } = useContext(AppContext)

  return <h1>Child One {user} {person}</h1>
}