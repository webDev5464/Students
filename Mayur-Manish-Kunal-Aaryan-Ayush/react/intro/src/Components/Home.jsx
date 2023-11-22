import MyImage from "../assets/Code_blxikb.jpg"
import { DiReact, DiNodejs } from "react-icons/di"
import { FcGoogle } from "react-icons/fc"

export default function Home() {
  return (
    <>
      <img src={MyImage} alt="" width={400} />
      <br />
      <span className="reactIcon">{<DiReact />}</span>
      <span className="reactIcon">{<DiNodejs />}</span>
      <span className="reactIcon">{<FcGoogle />}</span>
    </>
  )
}