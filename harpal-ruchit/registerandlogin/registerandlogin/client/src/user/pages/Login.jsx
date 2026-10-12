import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginData } from "../../redux/thunk/registerDataThunk";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {

    const dispatch = useDispatch();
    const { userLogin } = useSelector(s => s.login)
    const navigate = useNavigate()

    useEffect(() => {
        if (userLogin) {
            navigate('/')
        }
    }, [userLogin])

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginData(form))
        console.log(form);
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setForm({ ...form, [name]: value })
    }






    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="username"

                        onChange={handleChange}
                        placeholder="Username"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <input
                        type="password"
                        name="password"

                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <Link to={'/register'}>Register</Link>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );

}
