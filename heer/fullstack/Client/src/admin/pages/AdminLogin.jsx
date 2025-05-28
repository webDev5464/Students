/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react"
import { FaLock, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { $AuthLogin } from "../../redux/Thunk/Auth.thunk";

export default function AdminLogin() {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const formHandler = async (e) => {
    try {
      e.preventDefault()
      dispatch($AuthLogin(formData))
    } catch (err) {
      console.log(err.message)
    }
  }

  const inputHandler = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div className="w-80 p-10 rounded-xl bg-blue-200 shadow-[inset_-3px_-3px_7px_#ffffff73,_2px_2px_5px_rgba(94,104,121,0.288)]">
        <div className="text-2xl font-semibold text-gray-700 mb-8">Login Form</div>
        <form onSubmit={(e) => formHandler(e)}>
          <div className="relative mb-6">
            <FaUser className="absolute left-4 top-3.5 text-gray-600 z-10" />
            <input
              type="text"
              name={"username"}
              onChange={(e) => inputHandler(e)}
              className="peer w-full h-12 pl-12 pr-4 pt-2 pb-1 text-lg text-gray-700 rounded-full bg-white outline-none shadow-inner shadow-[inset_2px_2px_5px_#BABECC,inset-5px_-5px_10px_#ffffff73] focus:pt-4"
            />
            <label className="absolute left-12 top-3 text-gray-500 text-sm transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:top-1 peer-valid:text-xs peer-valid:text-blue-600">
              Email or Phone
            </label>
          </div>

          <div className="relative mb-6">
            <FaLock className="absolute left-4 top-3.5 text-gray-600 z-10" />
            <input
              type="password"
              name={"password"}
              onChange={(e) => inputHandler(e)}
              className="peer w-full h-12 pl-12 pr-4 pt-2 pb-1 text-lg text-gray-700 rounded-full bg-white outline-none shadow-inner shadow-[inset_2px_2px_5px_#BABECC,inset-5px_-5px_10px_#ffffff73] focus:pt-4"
            />
            <label className="absolute left-12 top-3 text-gray-500 text-sm transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:top-1 peer-valid:text-xs peer-valid:text-blue-600">
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full h-12 text-lg font-semibold text-gray-700 rounded-full bg-white shadow-[2px_2px_5px_#BABECC,-5px-5px_10px_#ffffff73] hover:shadow-inner hover:text-blue-500 transition-colors duration-200"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
