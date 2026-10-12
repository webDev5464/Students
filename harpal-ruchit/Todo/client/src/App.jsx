import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteDataAPI, getDataAPI, postDataAPI } from "./redux/Thunk"
import { resetProcess, userInfoEdit } from "./redux/Slice"
import { useNavigate } from 'react-router-dom'
import Edit from "./Edit"

export default function App() {
  const d = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    heading: '',
    title: ''
  })

  const inputHandler = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const { todos, process } = useSelector(s => s.todo)

  useEffect(() => {
    d(getDataAPI())
    d(resetProcess())
  }, [process])

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()

        d(postDataAPI(formData))
      }}>
        <input type="text" name="heading" placeholder="Heading" onChange={inputHandler} />
        <br />
        <input type="text" name="title" placeholder="Title" onChange={inputHandler} />
        <br /><br />
        <input type="submit" value="Submit" />
      </form>

      <hr />

      {todos ? todos.map((e) => (
        <div key={e._id}>
          <h1>{e.heading}</h1>
          <p>{e.title}</p>

          <button onClick={() => d(deleteDataAPI(e._id))}>Delete</button>

          <button onClick={() => {
            d(userInfoEdit(e._id))
            navigate('/edit')
          }}>Edit</button>
          
          <hr />
        </div>
      )) : ''}
    </div>
  )
}
