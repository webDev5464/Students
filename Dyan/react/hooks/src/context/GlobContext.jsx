/* eslint-disable react/prop-types */
import { createContext } from "react"

export const GlobProvider = createContext()

export default function GlobContext({ children }) {
  const user = "Chagan"
  return (
    <GlobProvider.Provider value={{
      user
    }}>
      {children}
    </GlobProvider.Provider>
  )
}
