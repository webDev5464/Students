import { useState } from "react"
import axios from "axios"

export default function Register() {

  const [userValue, setUserValue] = useState({
    username: "",
    email: "",
    pass: "",
    conPass: ""
  })

  const inputVal = (e) => {
    setUserValue({ ...userValue, [e.target.name]: e.target.value })
  }

  // npm install axios
  const formHandler = async (e) => {
    e.preventDefault()

    // http://localhost:1080/api/auth/register
    const result = await axios.post("http://localhost:1080/api/auth/register", userValue)

    // msg
    alert(result.data.msg)
  }

  return (
    <form onSubmit={formHandler}>
      <div>
        <input type="text" onChange={inputVal} name="username" id="username" placeholder="username" />
      </div>
      <div>
        <input type="text" onChange={inputVal} name="email" id="email" placeholder="email" />
      </div>
      <div>
        <input type="text" onChange={inputVal} name="pass" id="pass" placeholder="password" />
      </div>
      <div>
        <input type="text" onChange={inputVal} name="conPass" id="conPass" placeholder="Confirm Password" />
      </div>

      <input type="submit" onChange={inputVal} title="Register" />
    </form>
  )
}