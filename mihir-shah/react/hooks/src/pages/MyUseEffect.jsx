import { useEffect, useState } from "react"

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
          data.map((x, index) => {
            return (
              <li key={index}>{x.title}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default MyUseEffect