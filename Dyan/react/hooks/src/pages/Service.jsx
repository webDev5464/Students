import { useContext } from "react"
import { GlobProvider } from "../context/GlobContext"

export default function Service() {

  const { user } = useContext(GlobProvider)

  return <h1>This is a Service page {user}</h1>
}