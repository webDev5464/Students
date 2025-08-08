import { useContext } from "react"
import ProductCard from "./ProductCard"
import { AppContext } from "../App"
import { GlobProvider } from "../GlobComponent"

function Home() {

  const { username, data } = useContext(AppContext)
  const { message } = useContext(GlobProvider)

  return (
    <div>
      <h1>This is a home page</h1>
      <p>{username}</p>
      <p>{message}</p>
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
