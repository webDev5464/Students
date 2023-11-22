/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const TodoContext = createContext()

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([])
  console.log(todo);

  const [inputHeading, setInputHeading] = useState("")
  const [inputTitle, setInputTitle] = useState("")

  const inputData = inputHeading.concat(inputTitle)

  const AddTodo = () => {
    if (inputData.trim() !== "") {
      setTodo([...todo, {
        id: Date.now(),
        heading: inputHeading,
        title: inputTitle
      }])

      setInputHeading("")
      setInputTitle("")
    }

  }

  return (
    <TodoContext.Provider value={{
      inputHeading, setInputHeading, inputTitle, setInputTitle, AddTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
