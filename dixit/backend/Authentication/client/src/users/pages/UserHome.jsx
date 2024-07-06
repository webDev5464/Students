import { useContext } from "react";
import { UserProvider } from "../context/UserContext";
import axios from "axios";

export default function UserHome() {

  const { userData, setLogout, logout } = useContext(UserProvider)
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
    </>
  )
}
