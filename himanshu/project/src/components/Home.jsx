import { useContext } from "react"
import { LogicContext } from "../GlobContext"

export default function Home() {
  const { data, addToCart } = useContext(LogicContext)
  return (
    <>
      <div>
        {data.map((x) => (
          <div key={x._id}>
            <div>
              <img src={x.img_1} alt="" width={200} />
            </div>
            <button onClick={() => addToCart(x._id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  )
}