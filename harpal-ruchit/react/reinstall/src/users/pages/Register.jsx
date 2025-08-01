import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

export default function Register() {

  const [msg, setMsg] = useState("")

  const [data, setData] = useState({
    fName: "",
    lName: "",
    username: "",
    email: "",
    password: "",
    conPass: ""
  })

  const formHandler = async (e) => {
    try {
      e.preventDefault()
      const res = await axios.post("https://authapiforfront.jatssdev.com/api/UserRegister", data)
      setMsg(res.data.message)

      toast.success(res.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      setMsg(err.response.data.message)
      toast.error(err.response.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const inputHandler = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  return (
    <>
      <form onSubmit={formHandler}>
        <input type="text" placeholder="First Name" name="fName" onChange={inputHandler} />
        <br />
        <input type="text" placeholder="Last Name" name="lName" onChange={inputHandler} />
        <br />
        <input type="text" placeholder="Username" name="username" onChange={inputHandler} />
        <br />
        <input type="email" placeholder="Email" name="email" onChange={inputHandler} />
        <br />
        <input type="password" placeholder="Password" name="password" onChange={inputHandler} />
        <br />
        <input type="text" placeholder="Confirm Password" name="conPass" onChange={inputHandler} />

        <input type="submit" value="Register" />
      </form>

      <p>{msg}</p>
    </>
  )
}