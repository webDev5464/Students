import { useContext } from "react"
import { AppContext } from "../App"

export default function Home() {

  const { person } = useContext(AppContext)

  return (
    <>
      <div style={card.parent}>
        <h1 style={card.heading}>This is a Home Page. {person}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, fuga?</p>
      </div>
    </>
  )
}

const card = {
  parent: {
    border: "2px solid black",
    width: 500,
    padding: 10,
    backgroundColor: "black",
    color: "white"
  },
  heading: {
    color: "tomato",
    paddingBottom: 10
  }
}