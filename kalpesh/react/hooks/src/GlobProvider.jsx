/* eslint-disable react/prop-types */
import { createContext } from "react"

export const MyGlobContext = createContext()

export default function GlobProvider({ children }) {

  const users = "Magan"

  return (
    <MyGlobContext.Provider value={{ users }}>
      {children}
    </MyGlobContext.Provider>
  )
}
