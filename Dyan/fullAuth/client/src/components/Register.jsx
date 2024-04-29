import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    pass: "",
    conPass: ""
  })

  const inputValue = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }

  return (
    <>
      <form style={{ width: "fit-content" }} onSubmit={async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:8080/register", inputData)
          const { process, msg } = response.data
          if (process) {
            navigate('/login')
          } else {
            alert(msg)
          }
        } catch (err) {
          console.log(err);
        }
      }}>
        <fieldset>
          <legend>Register :</legend>

          <input type="text" name="username" placeholder="Username" onChange={inputValue} />
          <br /><br />
          <input type="email" name="email" placeholder="Email" onChange={inputValue} />
          <br /><br />
          <input type="password" name="pass" placeholder="Password" onChange={inputValue} />
          <br /><br />
          <input type="text" name="conPass" placeholder="Conform Password" onChange={inputValue} />
          <br /><br />
          <input type="submit" value="Register" />
        </fieldset>
      </form>
    </>
  )
}

export default Register