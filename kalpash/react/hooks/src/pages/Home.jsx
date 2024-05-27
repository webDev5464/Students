import { useEffect, useState } from "react"
import CardProps from "../hooks/CardProps"

function Home() {

  const [ApiData, setApiData] = useState()

  const fetchData = async () => {
    const response = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
    const objData = await response.json()
    setApiData([...objData.earbud, ...objData.tshirt])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>This is a Home page</h1>

      {
        ApiData == undefined ? "" : ApiData.map((value, index) => (
          <CardProps key={index} MyValue={{
            imgOne: value.img1,
            title: value.title,
            price: value.price,
            discount: value.discount
          }} />
        ))
      }

    </div>
  )
}

export default Home


// export default function Home() {
//   const obj = { A: [1, 2], B: [3, 4], C: [5, 6], D: [7, 8] }
//   // [1, 2, 4, 5, 6, 7, 8]

//   const newObj = [...obj.A, ...obj.B]
//   console.log(newObj);

//   return (
//     <>
//     </>
//   )
// }