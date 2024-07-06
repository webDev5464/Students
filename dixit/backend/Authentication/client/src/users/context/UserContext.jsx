/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import axios from 'axios'

export const UserProvider = createContext()

export default function UserContext({ children }) {

  const [userData, setUserData] = useState()
  const [logout, setLogout] = useState(true)

  const verifyUser = async () => {
    const response = await axios.get('/api')
    setUserData(response.data.userData)
  }

  useEffect(() => {
    verifyUser()
  }, [logout])

  return (
    <UserProvider.Provider value={{ userData, setUserData, setLogout, logout }}>
      {children}
    </UserProvider.Provider>
  )
}
