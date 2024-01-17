import { useContext } from "react"
import { MyContext } from "../../App"

const MyCard = ({ magan }) => {

  const { theme } = useContext(MyContext)

  return (
    <div className={theme == true ? "dark card" : "light card"}>
      <div>
        {/* Card Heading */}
        <h1>{magan.heading}</h1>
      </div>

      {/*  */}
      <div>
        <p>{magan.title}</p>
        <p>{magan.price}/-</p>
        <p>{magan.discount}% off</p>
      </div>
    </div>
  )
}

export default MyCard