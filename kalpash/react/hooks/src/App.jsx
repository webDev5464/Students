import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { createContext, useEffect, useState } from 'react'

export const MyContext = createContext()

export default function App() {

  const [ApiData, setApiData] = useState()

  const fetchData = async () => {
    const response = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
    const objData = await response.json()
    setApiData([...objData.earbud, ...objData.tshirt])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <MyContext.Provider value={{ ApiData }}>
      <BrowserRouter>


        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>


      </BrowserRouter>
    </MyContext.Provider>
  )
}
