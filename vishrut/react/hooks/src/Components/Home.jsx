import { useContext } from "react"
import { MyContext } from "../App"

export default function Home() {

  const { inputData } = useContext(MyContext)

  return <h1>{inputData}</h1>
}