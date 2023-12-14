// import { createContext, useState } from "react"
import Home from "./Home"

// export const MyContext = createContext()

const App = () => {

  // const Chagan = "Magan"

  // const [num, setNum] = useState(0)

  // const increment = () => {
  //   setNum(num + 1)
  // }

  // const decrement = () => {
  //   setNum(num == 0 ? 0 : num - 1)
  // }

  return (
    // <MyContext.Provider value={{ Chagan, num, increment, decrement }}>
    <>
      <Home />
    </>
    // </MyContext.Provider>
  )
}

export default App