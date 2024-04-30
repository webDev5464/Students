import { useState } from "react"
import axios from "axios"

const Login = () => {
  const [inputData, setInputData] = useState({
    username: "",
    pass: ""
  })

  const inputValue = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }

  return (
    <>
      <form style={{ width: "fit-content" }} onSubmit={async (e) => {
        try {
          e.preventDefault()
          const response = await axios.post("http://localhost:8080/login", inputData)
          const { process, msg } = response.data
          alert(msg)
        } catch (err) {
          console.log(err)
        }
      }}>
        <fieldset>
          <legend>Login :</legend>

          <input type="text" name="username" placeholder="Username" onChange={inputValue} />
          <br /><br />
          <input type="password" name="pass" placeholder="Password" onChange={inputValue} />
          <br /><br />
          <input type="submit" value="Register" />
        </fieldset>
      </form>
    </>
  )
}

export default Login