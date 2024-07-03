import { useContext, useState } from "react"
import axios from "axios"
import { UserProvider } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

export default function UserLogin() {

  const navigate = useNavigate()

  const {
    setUserData
  } = useContext(UserProvider)

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    pass: ''
  })

  const formHandler = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:8080/login', formData)

    const { process, data } = response.data

    if (process) {
      setUserData(data)
      navigate('/')
    }
  }

  const inputHandler = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <form onSubmit={formHandler}>
      <fieldset>
        <legend>Login</legend>

        <section>
          <div>
            <label htmlFor="username">Username : </label>
          </div>
          <div>
            <input type="text" name="username" id="username" onChange={inputHandler} />
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="email">Email : </label>
          </div>
          <div>
            <input type="email" name="email" id="email" onChange={inputHandler} />
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="pass">Password : </label>
          </div>
          <div>
            <input type="password" name="pass" id="pass" onChange={inputHandler} />
          </div>
        </section>

        <div className="register">
          <input type="submit" value="Login" />
        </div>
      </fieldset>
    </form>
  )
}