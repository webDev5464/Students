import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../../../redux/thunk/UserApiThunk";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { process, loginProcess } = useSelector((state) => state.UserStore);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    validation: "",
    pass: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(loginHandler(formData));
  };

  useEffect(() => {
    if (loginProcess) {
      navigate("/");
    }
  }, [process, loginProcess]);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">User Login</h2>
      <form
        onSubmit={formHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username/email
          </label>
          <input
            onChange={inputHandler}
            type="text"
            id="username"
            name="validation"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username/Email"
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
