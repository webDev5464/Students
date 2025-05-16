import { useState } from "react"
import { TbLockPassword } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { $AuthLogin } from "../../redux/Thunk/Auth.thunk";

export default function UserLogin() {
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
    <>
      <form action="" className="w-[500px] p-7 m-auto" onSubmit={formHandler}>

        <div className="bg-cyan-400 text-white p-7 border-2 border-white mx-auto">
          <h2 className="text-rose-600 font-bold text-xl mb-4 border-b border-white pb-2"> LOGIN  </h2>

            {/* username input */}

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3 flex items-center gap-5">
              <label htmlFor="username" className="text-sm/6 font-medium text-black flex">Username:</label>
              <div className="mt-2 relative">
                <span className="text-black absolute right-2 py-2.5"><FaRegUserCircle /></span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="family-name"
                  className="w-[200px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>

            {/* password input */}

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3 flex items-center gap-5">
              <label htmlFor="password" className="text-sm/6 font-medium text-black">
                Password:
              </label>

              <div className="mt-2 relative">
                <span className="text-black absolute right-2 py-2.5"><TbLockPassword /></span>
                <input
                  id="password"
                  name="password"
                  type="text"
                  autoComplete="family-name"
                  className="w-[200px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>

          <hr className="my-4 border-green-700 border-2" />

          {/* <span className="text-center block mt-6 text-rose-600 hover:cursor-pointer active:scale-95">Forget password</span> */}

          <div className="w-fit m-auto mt-4">
            <button className="border border-teal-600  text-black px-6 py-2 rounded-full hover:cursor-pointer active:scale-95">
              LOGIN 
            </button>
          </div>

        </div>
      </form>
    </>
  )
}
