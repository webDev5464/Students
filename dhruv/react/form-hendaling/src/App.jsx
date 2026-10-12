import axios from 'axios'
import { useEffect, useState } from 'react'

export default function App() {

  const [formData, setFormData] = useState({})

  const inputHandler = (e) => {
    const { value, name } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const formHandler = async (e) => {
    e.preventDefault()

    // npm i axios

    const response = await axios.post("https://authapiforfront.jatssdev.com/api/UserRegister", formData)
    console.log(response)

    // -------------------------

    // const response = await fetch('https://authapiforfront.jatssdev.com/api/UserRegister', {
    //   method: 'POST',
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify(formData)
    // })

    // console.log(response)
  }

  useEffect(() => {
    const x = async () => {
      const y = await axios.get("https://authapiforfront.jatssdev.com/api/getusers")
      console.log(y.data)
    }

    x()
  }, [])

  // -------------------------  

  // https://authapiforfront.jatssdev.com/api/getusers get
  // https://authapiforfront.jatssdev.com/api/UserRegister post

  return (
    <div>
      <form onSubmit={formHandler}>
        <fieldset>
          <legend>Register Form</legend>

          <div>
            <input type="text" placeholder='First Name:' name='fName' onChange={inputHandler} />
            <input type="text" placeholder='Last Name:' name='lName' onChange={inputHandler} />
          </div>

          <div>
            <input type="text" placeholder='Username:' name='username' onChange={inputHandler} />
            <input type="email" placeholder='Email:' name='email' onChange={inputHandler} />
          </div>

          <div>
            <input type="password" placeholder='Password:' name='password' onChange={inputHandler} />
            <input type="password" placeholder='Confirm Password:' name='conPass' onChange={inputHandler} />
          </div>

          <div className="btn">
            <input type='submit' value="Register" />
          </div>

        </fieldset>
      </form>
    </div>
  )
}
