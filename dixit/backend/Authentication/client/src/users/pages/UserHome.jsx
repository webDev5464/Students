import { useContext } from "react";
import { UserProvider } from "../context/UserContext";
import axios from "axios";
import { decrement, increment } from "../../redux/Slice";
import { useDispatch, useSelector } from "react-redux";

export default function UserHome() {
  const dispatch = useDispatch()
  const { num } = useSelector((state) => state.MySliceProvider)

  const { userData, setLogout, logout, } = useContext(UserProvider)
  console.log(userData);

  return (
    <>
      {
        userData ? <h1>Hello {userData.fullname}</h1> : <h1>Pls login</h1>
      }
      <button onClick={async () => {
        await axios.post('/api/logout')
        setLogout(!logout)
      }}>Logout</button>

      <h1>Initial value: {num}</h1>

      <button onClick={() => dispatch(increment())}>Click me!</button>
      <button onClick={() => dispatch(decrement())}>Click</button>
    </>
  )
}
