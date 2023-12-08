import { useContext } from "react"
import { MyContext } from "../App"

const Home = () => {

  const { data } = useContext(MyContext)

  return <h1>{data.username}</h1>
}

export default Home