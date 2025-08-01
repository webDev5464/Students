import { createContext } from "react"

export const GlobProvider = createContext()

export default function GlobContext({ children }) {
  const users = ["chagan", "magan"]
  return (
    <GlobProvider.Provider value={{
      users
    }}>
      {children}
    </GlobProvider.Provider>
  )
}