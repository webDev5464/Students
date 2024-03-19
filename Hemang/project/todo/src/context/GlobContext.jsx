/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const GlobProvider = createContext()

const GlobContext = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const themeHandler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <GlobProvider.Provider value={{
      themeHandler,
      theme
    }}>
      {children}
    </GlobProvider.Provider>
  )
}

export default GlobContext