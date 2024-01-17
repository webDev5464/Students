import { useEffect, useState } from "react"

export default function UseEffect() {

  const [apiData, setApiData] = useState([])

  useEffect(() => {
    const apiData = async () => {
      const renderData = await fetch("https://jsonplaceholder.typicode.com/users")

      let result = await renderData.json()
      setApiData(result)
    }

    apiData()
  }, [])

  console.log(apiData);

  return (
    <div>
      {apiData.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <address>
            {user.address.city}
          </address>
        </div>
      ))}
    </div>
  )
}