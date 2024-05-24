import { useEffect, useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    id: null
  })
  const [localData, setLocalData] = useState()

  let getLocalData = () => {
    const localData = JSON.parse(localStorage.getItem("data")) || []
    setLocalData(localData)
  }

  useEffect(() => {
    getLocalData()
  }, [])

  const inputHandler = (e) => {
    setFormData({ ...formData, id: new Date().getTime(), [e.target.name]: e.target.value })
  }

  const formHandler = (e) => {
    try {
      e.preventDefault()
      getLocalData()

      if ((formData.fname && formData.lname) !== "") {
        localStorage.setItem("data", JSON.stringify([...localData, formData]))
      } else {
        throw "Input field is blank"
      }

    } catch (err) {
      console.log(err);
    } finally {
      setFormData({ fname: "", lname: "" })
    }
  }

  const removeValue = (id) => {

    const newData = localData.filter((item) => item.id !== id)
    localStorage.setItem("data", JSON.stringify(newData))
    getLocalData()
  }

  return (
    <>
      <form onSubmit={formHandler}>
        <input
          type="text"
          name="fname"
          id=""
          placeholder="First name"
          style={{ margin: "5px" }}
          onChange={inputHandler}
          value={formData.fname}
        />
        <input
          type="text"
          name="lname"
          id=""
          placeholder="Last name"
          style={{ margin: "5px" }}
          onChange={inputHandler}
          value={formData.lname}
        />
        <input type="submit" value="Submit" />
      </form>

      <hr />

      {
        localData == null ? "" : localData.map((val, index) => (
          <div key={index} className="value">
            <p>{val.fname} {val.lname}</p>
            <button onClick={() => removeValue(val.id)}>Remove</button>
          </div>
        ))
      }
    </>
  )
}
