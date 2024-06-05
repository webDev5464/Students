import { useContext } from "react"
import { GlobContext } from "../context/GlobProvider"

export default function CreateTodo() {
  const { formHandler, inputValue } = useContext(GlobContext)
  return (
    <>
      <div>
        <form className="submitForm mt-4" onSubmit={formHandler}>
          <input type="text" name="fname" onChange={inputValue} placeholder="First Name" className="mr-2" />
          <input type="text" name="lname" onChange={inputValue} placeholder="Last Name" />

          <div className="success">
            <input type="submit" value="Add Todo" />
          </div>
        </form>
      </div>
    </>
  )
}