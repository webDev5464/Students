/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext } from "react"

export const globContext = createContext()

export default function GlobProvider({ children }) {

  const x = "Chagan"
  const y = "Magan"

  return (
    <globContext.Provider value={{
      x, y
    }}>
      {children}
    </globContext.Provider>
  )
}
