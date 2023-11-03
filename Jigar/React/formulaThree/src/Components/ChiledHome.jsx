import { useContext } from "react"
import { MyContext } from "../App"

export default function ChildHome() {

  let { personData } = useContext(MyContext)

  return (
    <>
      <h1 style={{ color: "tomato" }}>{personData.fname} {personData.lname}</h1>
    </>
  )
}