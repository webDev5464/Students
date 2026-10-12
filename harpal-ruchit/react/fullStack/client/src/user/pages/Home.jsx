import { useState } from "react"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editUser } from "../../redux/thunk/UserThunk"

export default function Home() {
  const { userData } = useSelector(s => s.user)
  const dispath = useDispatch()
  const showForm = useRef()
  const [formData, setFormData] = useState({
    username: ''
  })

  const formHandling = (e) => {
    e.preventDefault()
    const editedData = { ...formData, _id: userData._id }
    dispath(editUser(editedData))

  }

  const inputHandler = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })

  }

  const userEditHandler = () => {
    showForm.current.style = "display: block;"
  }

  return (
    <div>
      <h1>This is a Home page</h1>

      <h1>{userData ? userData.username : ''}</h1>

      {userData ? <>
        <form ref={showForm} style={{ display: "none" }} onSubmit={formHandling}>
          <input type="text" name="username" placeholder="Edit user username" onChange={inputHandler} />
          <input type="submit" value="Edit" />
        </form>

        <button onClick={userEditHandler}>Edit Username</button>
      </> : ''}

      <p>{userData ? userData.email : ''}</p>
    </div>
  )
}
