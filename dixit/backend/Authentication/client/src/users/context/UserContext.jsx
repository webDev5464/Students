/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import axios from 'axios'

export const UserProvider = createContext()

export default function UserContext({ children }) {
  const [logout, setLogout] = useState(true)

  const verifyUser = async () => {
    const response = await axios.get('/api')
  }

  useEffect(() => {
    verifyUser()
  }, [logout])

  useEffect(() => {
    const cookieExpirationTime = getCookieExpirationTime() // <--- Add this function
    if (cookieExpirationTime < Date.now()) {
      setLogout(true) // Log out the user programmatically
    }
  }, [])

  const getCookieExpirationTime = () => {
    const cookies = document.cookie.split(';')
    const expirationCookie = cookies.find(cookie => cookie.includes('expires='))
    if (expirationCookie) {
      const expirationTime = expirationCookie.split('=')[1]
      return new Date(expirationTime).getTime()
    }
    return null
  }

  return (
    <UserProvider.Provider value={{ setLogout, logout }}>
      {children}
    </UserProvider.Provider>
  )
}