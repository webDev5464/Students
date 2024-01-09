import { useState } from "react"
import axios from 'axios'

export default function App() {
  const [inputVal, setInputVal] = useState({
    heading: '',
    title: ''
  })

  const userValue = (x) => {
    setInputVal({ ...inputVal, [x.target.name]: x.target.value })

  }

  const formHandle = async (e) => {
    e.preventDefault()
    const result = await axios.post("http://localhost:8080/postData", inputVal)
    console.log(result);

    if (result) {
      alert(result.data.msg)
    }
  }

  return (
    <>
      <form onSubmit={formHandle}>
        <label htmlFor="heading">Heading : </label>
        <input type="text" name="heading" id="heading" onChange={userValue} />
        <br /><br />
        <label htmlFor="title">Title : </label>
        <input type="text" name="title" id="title" onChange={userValue} />
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}