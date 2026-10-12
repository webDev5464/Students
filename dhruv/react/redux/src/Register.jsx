import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postData } from "./redux/thunk/Apis"
import { resetMsg } from "./redux/slice/UserSlice"

export default function Register() {
  const dispatch = useDispatch()

  const { msg, loading } = useSelector(s => s.user)

  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    username: '',
    email: '',
    password: '',
    conPass: '',
  })

  const inputHandler = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })

    dispatch(resetMsg())
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()

        dispatch(postData(formData))
      }}>
        <fieldset>
          <legend>Register Form</legend>

          <div className="inputs">
            <input type="text" name="fName" placeholder='First Name' onChange={inputHandler} />
            <input type="text" name="lName" placeholder='Last Name' onChange={inputHandler} />
            <input type="text" name="username" placeholder='Username' onChange={inputHandler} />
            <input type="text" name="email" placeholder='Email' onChange={inputHandler} />
            <input type="password" name="password" placeholder='Password' onChange={inputHandler} />
            <input type="text" name="conPass" placeholder='Confirm Password' onChange={inputHandler} />

            <p>{msg}</p>


            <button type="submit">
              {loading ? <div className="loader"></div> : "Register"}
            </button>

          </div>

        </fieldset>
      </form>
    </div>
  )
}
