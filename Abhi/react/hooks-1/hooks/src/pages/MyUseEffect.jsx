import { useEffect, useState } from "react"
import MyProductCard from "./MyProductCard"

const MyUseEffect = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetching = async () => {
      const fetchData = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
      const objData = await fetchData.json()
      setData(objData.earbud)
    }
    fetching()
  }, [])

  return (
    <>
      <ul>
        {
          data.map((x, index) => (
            <MyProductCard key={index} MyValue={{
              img: x.img1,
              title: x.title,
              price: x.price,
              discount: x.discount
            }} />
          ))
        }
      </ul>
    </>
  )
}

export default MyUseEffect