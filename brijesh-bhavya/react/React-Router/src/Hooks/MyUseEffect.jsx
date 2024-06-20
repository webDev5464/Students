import { useEffect, useState } from "react";

export default function MyUseEffect() {

  const [data, setData] = useState()

  const fetchData = async () => {
    const rowData = await fetch("https://res.cloudinary.com/djkde7xp0/raw/upload/v1716272960/vfvoybg62ux93ksobfpw.json")
    const objData = await rowData.json()

    setData(objData.alldata)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data);

  return (
    <>
      <div>
        {
          data != undefined ? data.map((val, index) => (
            <div key={val.id}>
              <h1>{val.title}</h1>
            </div>
          )) : ""
        }
      </div>
    </>
  )
}
