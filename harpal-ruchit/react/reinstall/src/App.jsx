import { createContext } from "react"
import { Outlet } from "react-router-dom"

// export const AppContext = createContext()

function App() {

  // const num = 100

  return (
    // <AppContext.Provider value={{ num }}>
    <>
      <Outlet />
    </>
    // </AppContext.Provider>
  )
}

export default App
