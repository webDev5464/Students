import ChaganImage from "../assets/myImage.jpg"
import { AiFillAndroid, AiFillClockCircle } from "react-icons/ai"
import { SiCreatereactapp } from "react-icons/si"

export default function Home() {
  return (
    <>
      <div style={myStyle.card}>
        <img src={ChaganImage} alt="" style={{ width: "200px" }} />

        <div style={myStyle.article}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat deserunt sequi reiciendis vero atque iusto ipsum dolore ipsa harum unde tenetur dolor qui culpa molestiae facilis, facere quasi maxime.</p>
        </div>
      </div>

      <p><AiFillAndroid /> | <SiCreatereactapp /> | <AiFillClockCircle /></p>
    </>
  )
}

const myStyle = {
  card: {
    border: "2px solid black",
    width: 300,
    backgroundColor: "tomato"
  },
  article: {
    color: "blue",
    fontSize: 22
  }
}