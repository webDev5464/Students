import axios from "axios"
import { useEffect, useState } from "react"

export default function GetData() {

  const [newData, setNewData] = useState([])

  const GetData = async () => {
    const result = await axios.get("http://localhost:8080/getData")
    setNewData(result.data.users)
  }

  useEffect(() => {
    GetData()
  }, [])

  return (
    <section>
      {
        newData.map((key) => (
          <div key={key._id}>
            <h1>{key.heading}</h1>
            <p>{key.title}</p>
          </div>
        ))
      }
    </section>
  )
}