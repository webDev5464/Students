import myImage from "../assets/mountain.jpg"
import { AiFillAndroid, AiFillGithub } from "react-icons/ai"
import { FiMousePointer } from "react-icons/fi"
import ParentComponents from "../Props/ParentComponent"
import { useContext } from "react"
import { MyContext } from "./ContextProvider"

const myStyle = {
  card: {
    width: 400,
    border: "2px solid black",
    padding: 5,
    backgroundColor: "black",
    color: "white"
  },
  article: {
    fontSize: 22
  },
  AndroidIcon: {
    fontSize: 35,
    color: "red"
  }
}

export default function Home() {

  const { person } = useContext(MyContext)

  return (
    <>
      <h1>{person}</h1>

      <div style={myStyle.card}>
        <div>
          <img src={myImage} alt="" style={{ width: 400 }} />
        </div>
        <div>
          <h3>Mountain Image <AiFillAndroid style={myStyle.AndroidIcon} /> | <AiFillGithub className="GithubIcon" /> | <FiMousePointer /> </h3>
          <p style={myStyle.article}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ipsum ad, quidem quaerat adipisci fuga quod distinctio officiis officia, laboriosam perferendis. Minima vitae ea consequuntur, omnis delectus eos rerum placeat.</p>
        </div>
      </div>

      <ParentComponents />
    </>
  )
}