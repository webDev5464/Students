import { useEffect } from "react"
import { useState } from "react"

export default function UseEffect() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1697829682/productData").then((response) => response.json()).then((data) => {
      let products = [...data.earbud]

      setData(products)
    })
  }, [])

  console.log(data);

  return (
    <>
      <div>
        {
          data.map((x)=> (
            <p key={x.id}>{x.title}</p>
          ))
        }
      </div>
    </>
  )
}