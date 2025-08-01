/* eslint-disable react/prop-types */

import { useState } from "react"

function ProductCard({ data }) {
  const [cart, setCart] = useState([])

  console.log(cart)
  return (
    <div className="w-[300px] border-2 border-red-500 h-full group overflow-hidden">
      <div>
        <img src={data.img} alt={data.img} className="w-[250px] group-hover:scale-110 duration-300" />
      </div>

      <div>
        <p>{data.title}</p>
        <p>{data.price}</p>
      </div>

      <button className="border p-1 active:scale-95 cursor-pointer" onClick={() => setCart([...cart, data.id])}>Add to cart</button>
    </div>
  )
}

export default ProductCard
