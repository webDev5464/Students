import { useContext } from "react"
import ProductCard from "./ProductCard"
import { AppContext } from "../App"

function Home() {

  const { username, data } = useContext(AppContext)


  return (
    <div>
      <h1>This is a home page</h1>
      <p>{username}</p>
      <hr />

      {
        data.map((x) => {
          return (
            <>
              <ProductCard myValue={{ heading: x.heading, title: x.title, price: x.price }} />
            </>
          )
        })
      }

    </div>
  )
}

export default Home
