import { useContext } from "react"
import CardProps from "../hooks/CardProps"
import { MyContext } from "../App"
import { MyGlobContext } from "../GlobProvider"

function Home() {
  const { ApiData } = useContext(MyContext)
  const { users } = useContext(MyGlobContext)

  return (
    <div>

      <h1>{users}</h1>

      <div className="cardParent">
        {
          ApiData == undefined ? "" : ApiData.map((value, index) => (
            <CardProps key={index} MyValue={{
              imgOne: value.img1,
              title: value.title,
              price: value.price,
              discount: value.discount
            }} />
          ))
        }
      </div>

    </div>
  )
}

export default Home
