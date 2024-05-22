import { useEffect } from "react";
import { useState } from "react";

export default function MyUseEffect() {

  const [data, setData] = useState([])
  const [reload, setReload] = useState(false)

  const callApi = async () => {
    const rowData = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
    const obj = await rowData.json()

    setData(obj)
  }

  const reloadButton = () => {
    setReload(!reload)
  }

  useEffect(() => {
    callApi()
    console.log("Running use effect");
  }, [reload])

  return (
    <>
      <h1>This is a api</h1>
      <button onClick={reloadButton}>Reload Data</button>
    </>
  )
}
