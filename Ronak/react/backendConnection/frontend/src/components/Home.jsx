import { useState } from "react"

export default function Home() {

  const [toggleList, setToggleList] = useState(false)

  return (
    <div>

      <button onClick={() => setToggleList(!toggleList)}>Click</button>

      <ul className={toggleList ? "active" : "deactive"}>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>

    </div>
  )
}
