import React, { useContext } from 'react'
import { GlobProvider } from '../context/GlobContext'

const Service = () => {

  const { personName } = useContext(GlobProvider)

  return (
    <div>Service {personName}</div>
  )
}

export default Service