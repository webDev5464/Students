import MyShip from "../assets/Ship.jpg"

export default function About() {
  return (
    <>
      <h1 style={{ backgroundColor: "red", margin: "50px 100px" }}>This is a About Page.</h1>

      <img src={MyShip} alt="" width={500} />
    </>
  )
}
