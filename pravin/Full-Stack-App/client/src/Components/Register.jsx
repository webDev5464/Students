import { useState, useEffect } from "react";
import { UserRegisterPost } from "../store/toolkit/UserThunk";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./pages/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { loading, error, errorMsg, successMsg,regUser, success } = useSelector(
    (state) => state.UserRegister
  );

  const users = regUser.map((user) => JSON.parse(user)) ;
  const dispatch = useDispatch();
  const [registered, setRegistered] = useState({
    username: "",
    email: "",
    password: "",
    cfmpass: "",
  });

  if (success) {
    toast.success(successMsg);
  }
  useEffect(() => {
    if (error) {
      toast.error(errorMsg || "Something went wrong!");
    }
  }, [error, errorMsg]);

  
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await dispatch(UserRegisterPost(registered));
      setRegistered({
        username: "",
        email: "",
        password: "",
        cfmpass: "",
      });
    } catch (error) {
      console.log("Registration error: ", error);
    }
  };


  const inputHandler = (e) => {
    const { name, value } = e.target;
    setRegistered((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section>
        <div>
          <h1>Register</h1>
          <ToastContainer />
          <form method="post" onSubmit={submitHandler}>
            <label htmlFor="username">
              User Name <span>*</span>
              <input
                onChange={inputHandler}
                type="text"
                name="username"
                value={registered.username}
              />
            </label>
            <label htmlFor="email">
              Email <span>*</span>
              <input
                onChange={inputHandler}
                type="email"
                name="email"
                value={registered.email}
              />
            </label>
            <label htmlFor="password">
              Password <span>*</span>
              <input
                onChange={inputHandler}
                type="password"
                name="password"
                value={registered.password}
              />
            </label>
            <label htmlFor="cfmpass">
              Confirm Password <span>*</span>
              <input
                onChange={inputHandler}
                type="password"
                name="cfmpass"
                value={registered.cfmpass}
              />
            </label>

            <div className="btn">
              <button
                type="button"
                onClick={() =>
                  setRegistered({
                    username: "",
                    email: "",
                    password: "",
                    cfmpass: "",
                  })
                }
              >
                Clear
              </button>
              <button type="submit">Register</button>
            </div>
          </form>
          <section className="registered-users-section">
      <h2 className="registered-users-heading">Registered Users</h2>
      <div className="user-cards-container">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div key={index} className="user-card">
              <h3 className="user-card-username">{user.username}</h3>
              <p className="user-card-email">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="user-card-password">
                <strong>Password:</strong> {user.password}
              </p>
            </div>
          ))
        ) : (
          <p className="no-users-message">No users registered yet.</p>
        )}
      </div>

    </section>
        </div>
      </section>
    </>
  );
};

export default Register;
