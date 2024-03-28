/* eslint-disable react/prop-types */
import { createContext } from "react"

export const GlobProvider = createContext()

export default function GlobContext({ children }) {

  const personName = "Magan Bloger"

  return (
    <GlobProvider.Provider value={{ personName }}>
      {children}
    </GlobProvider.Provider>
  )
}
