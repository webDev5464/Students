import "./components/styles/index.css"
import { IoIosHome, IoMdHome } from "react-icons/io"
import { MdBroadcastOnHome } from "react-icons/md"
import { users } from "./Data"

export default function App() {

  // const users = [
  //   { fname: "John", lname: "Doe" },
  //   { fname: "Chagan", lname: "Chapri" },
  //   { fname: "Smith", lname: "Duck" }
  // ]

  let render = users.map((v, l) => {
    // return (
    //   <div key={l}>
    //     <h1>{v.fname} {v.lname}</h1>
    //   </div>
    // )

    return v.fname + " " + v.lname
  })

  console.log(render);
  return (
    <>
      <h1>Hello World!</h1>

      <div onClick={() => alert("Clicked Button")}
        style={{ backgroundColor: "tomato", width: "fit-content" }}
      >
        <IoIosHome /><IoMdHome /><MdBroadcastOnHome />
      </div>



    </>
  )
}