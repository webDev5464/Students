import { useEffect, useState } from "react"

export default function MyUseEffect() {
  return (
    <div>
      <ExampleOne />

      <hr />

      <FetchingData />
    </div>
  )
}

function ExampleOne() {

  const [val, setVal] = useState(true)

  useEffect(() => {
    console.log("HEllo")
  }, [val])

  return (
    <div>
      <h1>My useEffect</h1>

      <button onClick={() => setVal(!val)}>Click Me!</button>
    </div>
  )
}

function FetchingData() {

  const [data, setData] = useState()
  const [reload, setReload] = useState(true)

  // https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI


  const getData = async () => {
    const rowData = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
    const { earbud } = await rowData.json()

    setData(earbud)
    // console.log(earbud)
  }

  useEffect(() => {
    getData()
  }, [reload])

  console.log(data)

  return (
    <>
      <button onClick={() => setReload(!reload)}>Click me</button>
      
      <div className="cardParent">
        {data ? data.map((x) => {
          return (
            <div key={x.id} className="card">
              <p>{x.title}</p>
              <img src={x.img1} alt={x.img1} />
            </div>
          )
        }) : ""}
      </div>
    </>
  )
}