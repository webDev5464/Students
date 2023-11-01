import { useEffect, useState } from "react"

export default function UseEffect() {
  // https://res.cloudinary.com/dpiiduvvx/raw/upload/v1697829682/productData

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1697829682/productData").then((response) => response.json()).then((x) => {
      setData(x.earbud)
    })
  }, [])

  return (
    <>
      <div>
        {data.map((x) => (
          <p key={x.id}>{x.title}</p>
        ))}
      </div>
    </>
  )
}