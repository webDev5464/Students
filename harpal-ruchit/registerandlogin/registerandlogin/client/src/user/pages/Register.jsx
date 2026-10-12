import { useState } from "react";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/thunk/registerDataThunk";

export default function Register() {

    const dispatch = useDispatch();
    
  

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        conPass: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postData(formData))
        console.log(formData);

    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value});
    }



    return (
        <>

            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
                    <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <input
                            type="text"
                            name="username"
                            onChange={handleChange}
                            placeholder="Username"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <input
                            type="text"
                            name="email"

                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <input
                            type="password"
                            name="password"

                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <input
                            type="password"
                            name="conPass"

                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}


