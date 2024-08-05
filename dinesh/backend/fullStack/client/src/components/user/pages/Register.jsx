/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
// npm i axios
// import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
// npm i react-toastify
import { useDispatch, useSelector } from "react-redux";
import { registerHandler } from "../../../redux/thunk/UserApiThunk";
// npm i react-redux @reduxjs/toolkit

const Register = () => {
  const dispatch = useDispatch();
  const { loading, msg, process } = useSelector((state) => state.UserStore);

  console.log("loading", loading);
  console.log("msg", msg);
  console.log("process", process);

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    pass: "",
    conPass: "",
  });

  const formHandler = async (e) => {
    e.preventDefault();
    dispatch(registerHandler(formData));

    // const response = await axios.post(
    //   "http://localhost:8080/user/register",
    //   formData
    // );

    // const { process, msg } = response.data;
  };

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">User Register</h2>
      <form
        onSubmit={formHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            onChange={inputHandler}
            type="text"
            id="fullName"
            name="fullname"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            onChange={inputHandler}
            type="text"
            id="username"
            name="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={inputHandler}
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            onChange={inputHandler}
            type="password"
            id="confirmPassword"
            name="conPass"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline active:scale-95"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
