/* eslint-disable react/prop-types */
import { createContext } from "react"

export const CreatedContext = createContext()

const MyContext = ({ children }) => {

  const person = "Hemang"
  const welcomeMessage = "Hello"

  return (
    <CreatedContext.Provider value={{ person, welcomeMessage }}>
      {children}
    </CreatedContext.Provider>
  )
}

export default MyContext