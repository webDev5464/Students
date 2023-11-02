import myImage from "./Assets/Code_blxikb.jpg"

import { AiFillAndroid, AiFillApple } from "react-icons/ai"
import { BiBluetooth } from "react-icons/bi"

export default function App() {

  const person = {
    fname: "john",
    lname: "Doe",
    age: 22
  }

  return (
    <>
      <h1>{person.fname} {person.lname}</h1>

      <img src={myImage} style={{ width: 400 }} />

      <div style={{ height: 300, width: 300, backgroundColor: "black" }}></div>

      <div style={myStyle.box}></div>

      <div style={myStyle.boxTwo}></div>

      <AiFillAndroid style={{ fontSize: 50 }} />
      <AiFillApple style={{ fontSize: 50 }} />
      <BiBluetooth style={{ fontSize: 50 }} />
    </>
  )
}

const myStyle = {
  box: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    margin: "10px 0"
  },
  boxTwo: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    margin: "10px 0"
  }
}
