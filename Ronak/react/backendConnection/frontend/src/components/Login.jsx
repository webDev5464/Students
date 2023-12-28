import axios from "axios"
import { useState } from "react"

export default function Login() {

  const [userVal, setUserVal] = useState({
    usernameAndEmail: "",
    pass: ""
  })

  const inputValue = (e) => {
    setUserVal({ ...userVal, [e.target.name]: e.target.value })
  }

  const formHandler = async (e) => {
    e.preventDefault()

    const loginData = {
      username: userVal.usernameAndEmail,
      email: userVal.usernameAndEmail,
      pass: userVal.pass
    }

    const result = await axios.post("http://localhost:1080/api/auth/login", loginData)

    console.log(result);
    if (result) {
      alert(result.data.process)
    } else {
      alert(result.data.process)
    }
  }

  return (
    <div>
      <form onSubmit={formHandler}>
        <input type="text" name="usernameAndEmail" placeholder="Username" onChange={inputValue} />
        <br />
        <input type="text" name="pass" placeholder="password" onChange={inputValue} />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}