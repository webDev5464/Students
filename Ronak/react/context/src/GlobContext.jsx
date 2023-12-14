/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobContext = createContext()

const GlobeProvider = ({ children }) => {

  const Chagan = "Magan"

  const [num, setNum] = useState(0)

  const increment = () => {
    setNum(num + 1)
  }

  const decrement = () => {
    setNum(num == 0 ? 0 : num - 1)
  }

  return (
    <GlobContext.Provider value={{
      Chagan, increment, decrement, num
    }}>
      {children}
    </GlobContext.Provider>
  )
}

export default GlobeProvider