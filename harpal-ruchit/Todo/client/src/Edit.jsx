import { useDispatch, useSelector } from "react-redux"
import { editDataAPI } from "./redux/Thunk"
import { useState } from "react"

export default function Edit() {
  const { editUserId } = useSelector(s => s.todo)
  const dispatch = useDispatch()
  
  const [data, setData] = useState({
    heading: '',
    title: ''
  })

  const inputHandler = (e) => {
    const { name, value } = e.target

    setData({ ...data, [name]: value })
  }


  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(editDataAPI({ editUserId, data }))
      }} >
        <input type="text" name="heading" placeholder="Heading" onChange={inputHandler} />
        <br />
        <input type="text" name="title" placeholder="Title" onChange={inputHandler} />
        <br /><br />
        <input type="submit" value="Submit" />

      </form>
    </>
  )
}