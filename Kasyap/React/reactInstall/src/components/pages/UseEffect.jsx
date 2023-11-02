import { useEffect, useState } from "react"

export default function UseEffect() {
  return (
    <>
      <FetchApi />
    </>
  )
}

function FetchApi() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1697829682/productData").then(x => x.json()).then(y => {
      const dStructure = [...y.earbud, ...y.tshirt]
      console.log(dStructure);
      setData(dStructure)
    })
  }, [])

  console.log(data);

  return (
    <>
      <div>
        {
          data.map((x) => (
            <div key={x.id}>
              <p>{x.title}</p>
              <img src={x.img1} alt="" style={{ width: 200 }} />
            </div>
          ))
        }
      </div>
    </>
  )
}