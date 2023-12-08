import { useEffect, useRef, useState } from "react"

const MyUseEffect = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const rowData = async () => {
      try {
        const api = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1697829682/productData")
        const convertJson = await api.json()

        setData(convertJson)
      } finally {
        setLoading(false)
      }
    }

    rowData()
  }, [])

  if (loading) {
    return <div>Data is loading</div>
  }

  const dataD = [...data.earbud]

  console.log(dataD);
  return (
    <>

      <AutoFocus />

      <div>
        {
          dataD.map((x) => (
            <div key={x.id}>
              <h1>{x.title}</h1>
              <img src={x.img1} width={200} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default MyUseEffect

const AutoFocus = () => {

  const myInput = useRef(null)

  useEffect(() => {
    myInput.current.focus()
  }, [])

  return (
    <>
      <input type="text" ref={myInput} />
    </>
  )
}