import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

const Form = () => {
  const [fName, setfName] = useState("")
  const [lName, setlName] = useState("")

  const formHendle = (e) => {
    e.preventDefault()
  }

  Notification()

  return (
    <>
      <form onSubmit={formHendle}>
        <label htmlFor="fName">First Name : </label>
        <input type="text" name="fName" id="fName" value={fName} onChange={(e) => setfName(e.target.value)} placeholder='Write'/>
        {/* {console.log(fName)} */}
        <br />
        <label htmlFor="lName">Last Name : </label>
        <input type="text" name="lName" id="lName" value={lName} onChange={(e) => setlName(e.target.value)} />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <div className='ex'>
        <p>{fName} {lName}</p>

        <Link to={'/'}>Home</Link>
        <br />
        <Link to={'https://react.dev/reference/react/useEffect'} target='_blank'>Visit</Link>
        <br />
        
      </div>
    </>
  )
}

export default Form