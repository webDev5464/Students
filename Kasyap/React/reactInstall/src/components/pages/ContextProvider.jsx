import { createContext } from "react"

export const MyContext = createContext()

export default function ContextProvider({ children }) {
  const person = "John"

  const data = {
    fName: "John",
    lName: "Doe",
    age: 27,
  }

  return (
    <MyContext.Provider value={{ person, data }}>
      {children}
    </MyContext.Provider>
  )
}