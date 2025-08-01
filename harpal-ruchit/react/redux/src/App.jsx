import { useDispatch, useSelector } from "react-redux"
import { increment } from "./redux/slices/UserSlice"
import { useEffect, useState } from "react"
import { getUsers, register } from "./redux/thunk/UserThunk"

function App() {
  const dispatch = useDispatch()
  const { num, resMsg } = useSelector(state => state.userStore)

  console.log(resMsg)


  useEffect(() => {
    dispatch(getUsers(["Chagan", "Magan"]))
  }, [])

  // ---------------

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    username: "",
    email: "",
    password: "",
    conPass: ""
  })

  const inputHandler = (e) => {
    const { name, value } = e.target
    setFormData(formData => ({ ...formData, [name]: value }))
  }

  const formHandler = (e) => {
    e.preventDefault()

    dispatch(register(formData))
  }

  return (
    <div>
      <h1>{num}</h1>

      <button onClick={() => dispatch(increment(5))}>Increment</button>

      <hr />


      <form onSubmit={formHandler}>
        <input type="text" name="fName" id="" placeholder="fName" onChange={inputHandler} />
        <br /><br />
        <input type="text" name="lName" id="" placeholder="lName" onChange={inputHandler} />
        <br /><br />
        <input type="text" name="username" id="" placeholder="username" onChange={inputHandler} />
        <br /><br />
        <input type="text" name="email" id="" placeholder="email" onChange={inputHandler} />
        <br /><br />
        <input type="text" name="password" id="" placeholder="password" onChange={inputHandler} />
        <br /><br />
        <input type="text" name="conPass" id="" placeholder="conPass" onChange={inputHandler} />

        <br /><br />

        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default App
