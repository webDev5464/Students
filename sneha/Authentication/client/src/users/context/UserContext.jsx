/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const UserProvider = createContext()

export default function UserContext({ children }) {

  const [userData, setUserData] = useState()

  return (
    <UserProvider.Provider value={{ userData, setUserData }}>
      {children}
    </UserProvider.Provider>
  )
}
