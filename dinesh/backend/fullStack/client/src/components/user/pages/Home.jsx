import { useDispatch, useSelector } from "react-redux";
import {
  changeValue,
  decrement,
  increment,
} from "../../../redux/slice/UserSlice";
import { userLogout } from "../../../redux/thunk/UserApiThunk";
import { isRejectedWithValue } from "@reduxjs/toolkit";

export default function Home() {
  const dispatch = useDispatch();
  const { Username, num, UserData } = useSelector((state) => state.UserStore);
  console.log(UserData);

  return (
    <>
      <h1>
        {UserData ? (
          <div>
            <h1>{UserData.fullname}</h1>
            <button
              onClick={() =>
                dispatch(userLogout({ dispatch, isRejectedWithValue }))
              }
            >
              Logout
            </button>
          </div>
        ) : (
          ""
        )}
      </h1>
      <h1>{Username}</h1>

      <button onClick={() => dispatch(changeValue("Chagan"))}>
        Change Value
      </button>

      <hr />

      <h1>{num}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}
