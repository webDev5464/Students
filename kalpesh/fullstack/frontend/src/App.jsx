import { useState } from "react";
import axios from 'axios'

export default function App() {

  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    age: ""
  })

  const inputHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <form onSubmit={async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:27016/data", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(userData)
        })

        console.log(response);

        // await axios.post("http://localhost:27016/data", userData)
      }}>
        <input type="text" onChange={inputHandler} name="fname" placeholder="First Name" />
        <br /><br />
        <input type="text" onChange={inputHandler} name="lname" placeholder="Last Name" />
        <br /><br />
        <input type="text" onChange={inputHandler} name="age" placeholder="Age" />
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

// npm i axios