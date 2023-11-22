import MyImg from "./assets/Code_blxikb.jpg"
import { FcAndroidOs, FcApproval } from "react-icons/fc"
import { FaReact } from "react-icons/fa"

export default function App() {
  return (
    <>
      <div className="card">
        <div>
          <img src={MyImg} alt="" width={300} />
        </div>
        <hr />
        <div>
          <h2>Coding Card {<FcAndroidOs />}</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, maxime.</p>
        </div>

        <span className="bookmarkIcon">{<FcApproval />}</span>

        <span className="reactIcon">
          {<FaReact />}
        </span>
      </div>

      <Card />
    </>
  )
}

function Card() {
  return (
    <section style={MyStyle.card}>
      <h2 style={MyStyle.heading}>Hello World!</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, non?</p>
    </section>
  )
}

const MyStyle = {
  card: {
    width: 250,
    border: "2px solid black",
    margin: 20,
    backgroundColor: "tomato"
  },
  heading: {
    fontSize: 35,
    padding: 10
  }
}
