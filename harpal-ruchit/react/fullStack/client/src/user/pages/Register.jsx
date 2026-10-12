import { register } from '../../redux/thunk/UserThunk'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { resetMsg } from '../../redux/slices/UserSlice'

export default function Register() {
  const dispatch = useDispatch()
  const { msg } = useSelector(s => s.user)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    pass: "",
    conPass: ""
  })

  const formHandler = (e) => {
    e.preventDefault()
    dispatch(register(formData))

    console.log(formData)
  }

  const inputHandler = (e) => {
    const { name, value } = e.target
    dispatch(resetMsg())

    setFormData({ ...formData, [name]: value })
  }

  return (
    <div>
      <form onSubmit={formHandler}>
        <input type="text" placeholder="Username" name="username" onChange={inputHandler} />
        <input type="email" placeholder="Email" name="email" onChange={inputHandler} />
        <input type="password" placeholder="Password" name="pass" onChange={inputHandler} />
        <input type="text" placeholder="Confirm Password" name="conPass" onChange={inputHandler} />
        <p>{msg}</p>
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}
