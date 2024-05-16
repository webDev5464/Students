import { useEffect, useState } from "react"

export default function MyUseEffect() {
  const [productData, setProductData] = useState()

  const fetchApi = async () => {
    const rowData = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
    const objData = await rowData.json()
    setProductData(objData)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  console.log(productData);

  return (
    <>
      <h1>This is a api</h1>
    </>
  )
}
