import { useState } from "react"
import axios from 'axios'
// npm i axios

export default function UserRegister() {

  const [data, setData] = useState({
    fullname: "",
    username: "",
    pass: "",
    conPass: "",
    email: ""
  })

  const formHandler = async (e) => {
    try {
      e.preventDefault()

      const response = await axios.post("http://localhost:8080/register", data)
      console.log(response.data);

      // const response = await fetch("http://localhost:8080/register", {
      //   method: "POST",
      //   headers: {
      //     "content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data)
      // })

      // console.log(response.body);

    } catch (err) {
      console.log(err.message);
    }
  }

  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={formHandler}>
      <fieldset>
        <legend>Register</legend>

        <section>
          <div>
            <label htmlFor="fullname">Full Name : </label>
          </div>
          <div>
            <input type="text" name="fullname" id="fullname" onChange={inputHandler} />
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="username">Username : </label>
          </div>
          <div>
            <input type="text" name="username" id="username" onChange={inputHandler} />
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="pass">Password : </label>
          </div>
          <div>
            <input type="password" name="pass" id="pass" onChange={inputHandler} />
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="conPass">Confirm Password : </label>
          </div>
          <div>
            <input type="text" name="conPass" id="conPass" onChange={inputHandler} />
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="email">Email : </label>
          </div>
          <div>
            <input type="email" name="email" id="email" onChange={inputHandler} />
          </div>
        </section>

        <div className="register">
          <input type="submit" value="Register" />
        </div>
      </fieldset>
    </form>
  )
}
