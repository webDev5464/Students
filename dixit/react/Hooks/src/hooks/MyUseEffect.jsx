import { useEffect, useState } from "react"

export default function MyUseEffect() {
  const [allData, setAllData] = useState()

  const getApi = async () => {
    const fetchApi = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
    const objData = await fetchApi.json()

    const newData = [...objData.earbud, ...objData.tshirt,]
    setAllData(newData)
  }

  useEffect(() => {
    getApi()
  }, [])

  return (
    <>
      <div className="parentCard">
        {
          allData == undefined ? "" : allData.map((value, index) => (
            <div key={index}>
              
              <p>{value.title}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

{
  // allData.map(() => {
  //   return (
  //     <>

  //     </>
  //   )
  // })
}