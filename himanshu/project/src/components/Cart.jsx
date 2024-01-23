import { useContext } from "react"
import { LogicContext } from "../GlobContext"

export default function Cart() {
  const { cart } = useContext(LogicContext)
  return (
    <>
      <div>
        {cart.map((x) => (
          <div key={x._id}>
            <div>
              <img src={x.img_1} alt="" width={200} />
            </div>
            {/* <button onClick={() => removeCart(x._id)}>Add to Cart</button> */}
          </div>
        ))}
      </div>
    </>
  )
}