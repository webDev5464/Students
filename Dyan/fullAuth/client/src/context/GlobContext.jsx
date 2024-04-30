/* eslint-disable react/prop-types */
import { createContext } from "react";

export const GlobProvider = createContext()

const GlobContext = ({ children }) => {
  const person = "Chagan"
  return (
    <GlobProvider.Provider value={{ person }}>
      {children}
    </GlobProvider.Provider>
  )
}

export default GlobContext;