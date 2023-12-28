import { createContext } from "react"

export const MyContext = createContext()

export default function GlobContext({ children }) {
  const x = 5
  return (
    <MyContext.Provider value={{ x }}>
      {children}
    </MyContext.Provider>
  )
}