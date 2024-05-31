import { useEffect, useState } from "react"

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
            <div key={item.id}>
              <p>{item.title}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}