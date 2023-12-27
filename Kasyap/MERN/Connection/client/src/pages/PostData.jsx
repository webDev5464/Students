import { useState } from "react"
import axios from "axios"

export default function PostData() {
  const [userVal, setUserVal] = useState({
    heading: "",
    title: ""
  })

  const inputValue = (e) => {
    setUserVal({ ...userVal, [e.target.name]: e.target.value })
  }

  const formHandler = async (e) => {
    e.preventDefault()

    const result = await axios.post("http://localhost:8080/postData", userVal)

    // https://fkhadra.github.io/react-toastify/introduction

    if (result) {
      alert(result.data.msg)
    } else {
      alert(result.data.msg)
    }

  }

  return (
    <form onSubmit={formHandler}>
      <input type="text" name="heading" placeholder="heading" onChange={inputValue} />
      <br /><br />
      <input type="text" name="title" placeholder="title" onChange={inputValue} />
      <br /><br />
      <input type="submit" value="Submit" />
    </form>
  )
}