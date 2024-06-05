/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"

export const GlobContext = createContext()

export default function GlobProvider({ children }) {

  //! Create Todo
  const [inputVal, setInputVal] = useState({
    fname: "",
    lname: "",
    id: null
  })

  const [localData, setLocalData] = useState() // [{}, {}]
  const [reGetLocalData, setReGetLocalData] = useState(true)

  // onSubmit
  const formHandler = (e) => {
    e.preventDefault()
    setReGetLocalData(!reGetLocalData)

    if (localData.length == 0) {
      localStorage.setItem("todoData", JSON.stringify([inputVal]))
    } else {
      const newData = [...localData, inputVal]
      localStorage.setItem("todoData", JSON.stringify(newData))
    }

    console.log(localData);
  }

  // onChange
  const inputValue = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value, id: new Date().getTime() });
  }

  useEffect(() => {
    const getLocalData = JSON.parse(localStorage.getItem("todoData")) || []
    setLocalData(getLocalData)
  }, [reGetLocalData])

  return (
    <GlobContext.Provider value={{
      formHandler, inputValue
    }}>
      {children}
    </GlobContext.Provider>
  )
}
