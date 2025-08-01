import { useEffect, useState } from "react";

function FetchingData() {

  const [data, setData] = useState();

  const getData = async () => {
    const rowData = await fetch("https://res.cloudinary.com/dih32dviv/raw/upload/v1749617558/data_jbwivt.json")
    const data = await rowData.json()
    setData(data.earbuds)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(data)

  return (
    <div>
      {data ? data.map((e) => (
        <div key={e.id}>
          <img src={e.img} alt="" />
        </div>
      )) : <>
        <div className="bg-gray-400 w-[400px] h-[400px]"></div>
      </>}
    </div>
  )
}

export default FetchingData
