import { useContext } from "react"
import { AppContext } from "../App"

export default function About() {

  const { person } = useContext(AppContext)

  return <h1>This is a About page {person}</h1>
}