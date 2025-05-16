import { useState } from "react"
// import axios, { Axios } from 'axios'
import { $AuthRegister } from "../../redux/Thunk/Auth.thunk"
import { useDispatch } from "react-redux"
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";




export default function UserRegister() {
  const dispatch = useDispatch()


  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    username: "",
    gender: "",
    email: "",
    password: "",
    conPass: ""


  })
  const formHandler = async (e) => {
    try {
      e.preventDefault()
      console.log(formData)

      dispatch($AuthRegister(formData))

      // await axios.post("http://localhost:8080/api/UserRegister", formData)
    } catch (err) {
      
      console.log(err.message)


    }
  }

  const inputHandler = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <>
      <form action="" className="w-1/2  p-7 m-auto " onSubmit={formHandler}>

        <div className="bg-cyan-400 text-white p-8 border-2 border-white max-w-xl mx-auto">
          <h2 className="text-rose-600 text-xl mb-4 border-b border-white pb-2"> SIGN UP </h2>

          {/* First Name input  */}
          
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="fName" className="block text-sm/6 font-medium text-black">
                First name :
              </label>
              <div className="mt-2">
                <input
                  id="fName"
                  name="fName"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={inputHandler}
                />
              </div>
            </div>

            {/* last Name input */}

            <div className="sm:col-span-3">
              <label htmlFor="lName" className="block text-sm/6 font-medium text-black">
                Last name :
              </label>
              <div className="mt-2">
                <input
                  id="lName"
                  name="lName"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>

          <hr className="my-4 border-green-700 border-2 " />

          {/* username input */}

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3 ">
              <label htmlFor="username" className="block text-sm/6 font-medium text-black">
                Username :

              </label>

              <div className="mt-2 relative">
                <span className="text-black absolute right-2 py-2.5"><FaRegUserCircle /></span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>

          {/* Email input */}

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3 my-3 ">
              <label htmlFor="Email" className="block text-sm/6 font-medium text-black ">
                Email :

              </label>
              <div className="mt-2 relative">
                <span className="text-black absolute right-2 py-2.5"> <MdOutlineMailLock /></span>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>

          <hr className="my-4 border-green-700 border-2 " />

          {/* password input */}

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="Password" className="block text-sm/6 font-medium text-black">
                Password :

              </label>
              <div className="mt-2 relative">
                <span className="text-black absolute right-2 py-2.5"> <TbLockPassword /></span>
                <input
                  id="password"
                  name="password"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={inputHandler}

                />

              </div>
            </div>

            {/* Confirm Password input */}

            <div className="sm:col-span-3">
              <label htmlFor="Conpass" className="block text-sm/6 font-medium text-black">
                Confirm Password :

              </label>
              <div className="mt-2 relative">
                <span className="text-black absolute right-2 py-2.5">< TbLockPassword /></span>
                <input
                  id="conPass"
                  name="conPass"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>

          {/* Register input */}

          <div className="w-fit m-auto mt-6">
            <button className="border  pt-1 pb-2 font-bold text-black px-6  rounded-xl bg-green-500  border-green-500 hover:cursor-pointer active:scale-95">Register</button>

          </div>

            {/* Already Have Account input */}

          <div className="w-fit m-auto mt-4">
            <Link to={"/UserLogin"} className="border border-green-500 px-6 py-2 rounded-full  hover:cursor-pointer active:scale-95">
              Already Have Account
            </Link>
          </div>

        </div>
      </form>

    </>
  )
}
