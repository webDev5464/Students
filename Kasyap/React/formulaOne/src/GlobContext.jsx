/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from "react"

export const GlobalContext = createContext()

export default function GlobContext({ children }) {
  const [inputVal, setInputVal] = useState("")
  const [data, setData] = useState([])
  const AutoFocus = useRef(null)

  const submitForm = (e) => {
    e.preventDefault()
  }

  const AddData = () => {
    setData([...data, {
      id: Date.now(),
      inputTitle: inputVal
    }])

    setInputVal("")
  }

  useEffect(() => {
    AutoFocus.current.focus()
  }, [])

  return (
    <GlobalContext.Provider value={{ inputVal, setInputVal, submitForm, AddData, data, AutoFocus }}>
      {children}
    </GlobalContext.Provider>
  )
}
