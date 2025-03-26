import { FaHome, FaShoppingCart } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import myCodingImage from "./assets/coding.jpg"

export default function App() {
  return (
    <>
      <h1 style={{ backgroundColor: "red", color: "white", fontSize: 50 }}>Hello World!</h1>
      <AppChild />

      <div className="icons-section">
        <h1 style={{ color: "red", fontSize: 50 }}><FaHome /></h1>
        <h1><FaShoppingCart /></h1>
        <h1><LuGithub /></h1>
      </div>

      <img src={myCodingImage} alt="" className="myCodingImage" />
    </> 
  )
}

export function AppChild() {
  return (
    <>
      <p>This is a title</p>
    </>
  )
}