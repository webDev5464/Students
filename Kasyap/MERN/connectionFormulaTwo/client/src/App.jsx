import { useState } from "react"
import axios from "axios"

export default function App() {
  return (
    <>
      <PostUserData />
      {/* <GetUserData /> */}
    </>
  )
}

function PostUserData() {

  const [val, setVal] = useState({
    heading: "",
    title: ""
  })

  const inputValue = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value })
  }

  const formHandler = async (e) => {
    e.preventDefault()

    const result = await axios.post("http://localhost:8080/postData", val)
    console.log(result);

    if (result.data.process) {
      alert(result.data.msg)
    }
  }

  return (
    <div>
      <form onSubmit={formHandler}>
        <input type="text" name="heading" placeholder="heading..." onChange={inputValue} />
        <input type="text" name="title" placeholder="title..." onChange={inputValue} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

// function GetUserData() {
//   return (
//     <div>
//       hello one
//     </div>
//   )
// }