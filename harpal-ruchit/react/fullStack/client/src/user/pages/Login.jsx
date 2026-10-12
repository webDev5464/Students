import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../redux/thunk/UserThunk"

export default function Login() {
  const dispach = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    pass: ''
  })

  const formHandler = (e) => {
    e.preventDefault()
    dispach(login(formData))
  }

  const inputHandler = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }
  return (
    <div>
      <form onSubmit={formHandler}>
        <input type="email" placeholder="Email" name="email" onChange={inputHandler} />
        <input type="password" placeholder="Password" name="pass" onChange={inputHandler} />

        <input type="submit" value="Login" />
      </form>
    </div>
  )
}
