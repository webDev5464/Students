import { useEffect, useRef, useState } from "react"
import axios from 'axios'

const App = () => {

  const autoFocus = useRef(null)

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    age: "",
    title: "",
    price: ""
  })


  const formHandler = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:5464/addData", formData)
  }

  const inputValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // ======================================================

  const [userData, setUserData] = useState([])

  const getData = async (e) => {
    const resp = await axios.get("http://localhost:5464/addData")
    setUserData(resp.data)
  }

  const deleteFormHandler = async (id) => {
    autoFocus.current.focus()
    await axios.post("http://localhost:5464/deleteData", id)
  }

  useEffect(() => {
    getData()
  }, [formHandler, deleteFormHandler])

  // ======================================================

  return (
    <>
      <form onSubmit={formHandler}>
        <div>
          <label htmlFor="fname">First Name :- </label>
          <input type="text" name="fname" onChange={inputValue} ref={autoFocus} />
        </div>

        <div>
          <label htmlFor="lname">Last Name :- </label>
          <input type="text" name="lname" onChange={inputValue} />
        </div>

        <div>
          <label htmlFor="age">Age :- </label>
          <input type="text" name="age" onChange={inputValue} />
        </div>

        <div>
          <label htmlFor="title">Title :- </label>
          <input type="text" name="title" onChange={inputValue} />
        </div>

        <div>
          <label htmlFor="price">Price :- </label>
          <input type="text" name="price" onChange={inputValue} />
        </div>

        <input type="submit" value="Submit" />
      </form>

      <hr />

      {
        userData.map((value, index) => (
          <div key={index}>
            <p>First Name :- {value.fname}</p>
            <p>Last Name :- {value.lname}</p>
            <p>age :- {value.age}</p>
            <p>Data Id :- {value._id}</p>

            <button
              type="submit"
              onClick={() => deleteFormHandler({ id: value._id })}
            >Delete</button>
          </div>
        ))
      }
    </>
  )
}

export default App
