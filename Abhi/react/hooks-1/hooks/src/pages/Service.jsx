import React, { useContext } from 'react'
import { AppContext } from '../App'

const Service = () => {

  const { person, myValue, increment, decrement } = useContext(AppContext)
  return (
    <>
      <div>Service {person}</div>

      <h1>{myValue}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}

export default Service