/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext } from "react";

export const GlobProvider = createContext()

export default function GlobComponent({ children }) {
  const message = "THis is a glob value"
  return (
    <GlobProvider.Provider value={{ message }}>
      {children}
    </GlobProvider.Provider>
  )
}
