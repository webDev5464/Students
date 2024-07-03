/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"

export const GlobProvider = createContext()

export default function GlobContext({ children }) {

  const [data, setData] = useState()

  const fetchData = async () => {
    const rowData = await fetch("https://res.cloudinary.com/djkde7xp0/raw/upload/v1716272960/vfvoybg62ux93ksobfpw.json")
    const objData = await rowData.json()

    setData(objData.alldata)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <GlobProvider.Provider value={{
      data
    }}>
      {children}
    </GlobProvider.Provider>
  )
}