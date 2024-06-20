/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const GlobProvider = createContext()

export default function GlobContext({ children }) {

  const [inputValue, setInputValue] = useState({
    heading: "", time: "", date: "", textArea: ""
  })
  const [getData, setGetData] = useState([])
  const [searchedTodo, setSearchedTodo] = useState([])
  const [searchQry, setSearchQry] = useState("")
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme !== null) {
      setTheme(storedTheme)
    }

    const storedData = JSON.parse(localStorage.getItem("todoData")) || []
    setGetData(storedData)
  }, [])

  const inputData = (e) => {
    const { name, value } = e.target
    setInputValue({ ...inputValue, [name]: value, id: new Date().getTime() })
  }

  const submissionFormHandler = (e) => {
    e.preventDefault()

    const updatedData = [...getData, inputValue]
    setGetData(updatedData)
    localStorage.setItem("todoData", JSON.stringify(updatedData))

    setInputValue({ heading: "", time: "", date: "", textArea: "" })  // Clear input fields
  }

  const removeTodo = (id) => {
    const filterData = getData.filter(item => item.id !== id)
    setGetData(filterData)
    localStorage.setItem("todoData", JSON.stringify(filterData))
  }

  const searchHandler = () => {
    const searchValue = searchQry.trimStart()
    const filterData = getData.filter(item => item.heading.toLowerCase().includes(searchValue.toLowerCase()))
    setSearchedTodo(filterData)
  }

  useEffect(() => {
    searchHandler()
  }, [searchQry, getData])


  const themeButton = () => {
    const themeValue = theme == "dark" ? "light" : "dark"
    setTheme(themeValue)
    localStorage.setItem("theme", themeValue)
  }

  return (
    <GlobProvider.Provider value={{
      submissionFormHandler,
      inputData,
      getData,
      removeTodo,
      inputValue,
      searchHandler,
      searchedTodo,
      searchQry,
      setSearchQry,
      themeButton,
      theme
    }}>
      {children}
    </GlobProvider.Provider>
  )
}

