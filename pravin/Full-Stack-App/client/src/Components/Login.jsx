import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./pages/Loading";
import { ToastContainer, toast } from "react-toastify";
import { UserLoginPost } from "../store/toolkit/UserThunk";

const Login = () => {
  const { loading, error, errorMsg, successMsg, logUser, success } =
    useSelector((state) => state.UserLogin);

  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    userid: "",
    password: "",
  });

  useEffect(() => {
    if (success) {
      toast.success(successMsg);
    }
    if (error) {
      toast.error(errorMsg);
    }
  }, [success, error, errorMsg, successMsg]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await dispatch(UserLoginPost(loginData));
      setLoginData({
        userid: "",
        password: "",
      });
    } catch (error) {
      console.log("Login error: ", error);
    }
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  if (loading) {
    return <Loading />;
  }
  const users = logUser.map((user) => JSON.parse(user));

  return (
    <>
      <section>
        <div>
          <h1>Login</h1>

          <form onSubmit={submitHandler} method="post">
            <label htmlFor="username">
              User Name <span>*</span>
              <input
                type="text"
                name="userid"
                value={loginData.userid}
                onChange={inputHandler}
              />
            </label>
            <label htmlFor="password">
              Password <span>*</span>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={inputHandler}
              />
            </label>

            <div className="btn">
              <button
                type="button"
                onClick={() => setLoginData({ userid: "", password: "" })}
              >
                Clear
              </button>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </section>

      <section className="registered-users-section">
        <h2 className="registered-users-heading">Registered Users</h2>
        <div className="user-cards-container">
          {users.length > 0 ? (
            users.map((user, index) => (
              <div key={index} className="user-card">
                <h3 className="user-card-username">{user.userid}</h3>
                {/* Don't display passwords in plain text */}
                <p className="user-card-password">
                  <strong>Password is :</strong> {user.password.length} Digits
                </p>
              </div>
            ))
          ) : (
            <p className="no-users-message">No users registered yet.</p>
          )}
        </div>
      </section>

      <ToastContainer />
    </>
  );
};

export default Login;
