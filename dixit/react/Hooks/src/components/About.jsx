import { useContext } from "react"
import MyShip from "../assets/Ship.jpg"
import { globContext } from "../context/GlobProvider"

export default function About() {
  const { x, y } = useContext(globContext)
  return (
    <>
      <h1 style={{ backgroundColor: "red", margin: "50px 100px" }}>This is a About Page. {x} {y}</h1>

      <img src={MyShip} alt="" width={500} />
    </>
  )
}
