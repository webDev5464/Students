import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UseLoginHandler } from "../../../redux/slices/UserAPIHandler";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    validationName: "",
    pass: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formHandler = async (e) => {
    e.preventDefault();
    dispatch(UseLoginHandler(formData));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">User Login</h2>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={formHandler}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email/Username
          </label>
          <input
            onChange={inputHandler}
            type="text"
            id="email"
            name="validationName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email/Username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={inputHandler}
            type="password"
            id="password"
            name="pass"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline active:scale-95"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
