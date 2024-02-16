import { useEffect, useState } from "react"

export default function MyUseEffect() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")

      const stringData = await data.json()

      setData([...stringData.earbud, ...stringData.tshirt])
    }

    fetchData()
  }, [])

  return (
    <>
      {data.map((x) => {
        return (
          <div key={x.id}>
            <img src={x.img1} alt="" width={200} />
          </div>
        )
      })}
    </>
  )
}

// https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI