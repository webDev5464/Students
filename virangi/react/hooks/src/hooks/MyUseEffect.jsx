/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import ProductCard from "../modules/ProductCard"

export default function MyUseEffect() {

  const [data, setData] = useState()

  const fetchData = async () => {
    const response = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
    const objData = await response.json()
    setData([...objData.earbud, ...objData.tshirt])
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data == undefined ? "blank" : data);

  return (
    <>
      <h1>Render All Products</h1>

      <div>
        {data == undefined ? "" : data.map((item, index) => {
          return (
            <ProductCard key={index}
              MyProps={{
                img: item.img1,
                title: item.title,
              }}
            />
          )
        })}
      </div>
    </>
  )
}
