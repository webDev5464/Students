import React, { useContext } from 'react'
import { MyContext } from '../../App'

function Service() {
  const x = useContext(MyContext)
  return (
    <div ref={x.changeTheme}>
      <h1>{x.heading.mainHeading}</h1>
      <button onClick={x.myBtn}>Click Me!</button>
    </div>
  )
}

export default Service
