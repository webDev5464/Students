import { useContext } from 'react'
import MyPropsCard from './MyPropsCard'
import profile from "../assets/profile.png"
import { AppContext } from '../App'

const Home = () => {
  const mainHeading = "Home"

  const { user, rollNum } = useContext(AppContext)

  return (
    <div>
      {mainHeading}

      {/* <img src={profile} alt="" /> */}

      <MyPropsCard myValue={{
        heading: "Hello",
        img: profile,
        imgWidth: 100,
        title: "This is a title"
      }} />

      <h1>{user} {rollNum}</h1>
    </div>
  )
}

export default Home