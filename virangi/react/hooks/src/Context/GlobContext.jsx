/* eslint-disable react/prop-types */
import { createContext } from "react"


export const GlobProvider = createContext()


export default function GlobContext({ children }) {

  const users = {
    fname: "Chagan",
    lname: "Magan",
    age: 20
  }

  return (
    <GlobProvider.Provider value={{ users }}>
      {children}
    </GlobProvider.Provider>
  )
}
