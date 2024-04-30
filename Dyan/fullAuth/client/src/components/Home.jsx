import { useContext } from "react"
import { GlobProvider } from "../context/GlobContext"

const Home = () => {
  const { person } = useContext(GlobProvider)
  return (
    <>
      <h1>This is a Home page {person}</h1>
    </>
  )
}

export default Home