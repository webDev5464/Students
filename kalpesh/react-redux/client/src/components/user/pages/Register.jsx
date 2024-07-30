import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserRegisterHandler } from "../../../redux/thunk/UserThunk";

const Register = () => {
  const dispatch = useDispatch();

  const [registerFormData, setRegisterFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    pass: "",
    conPass: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({ ...registerFormData, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(UserRegisterHandler());
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">User Register</h2>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={formSubmit}
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
            name="fullName"
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
