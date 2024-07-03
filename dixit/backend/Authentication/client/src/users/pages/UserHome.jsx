import { useContext, useEffect } from "react";
import { UserProvider } from "../context/UserContext";

export default function UserHome() {

  const { userData } = useContext(UserProvider)

  useEffect(() => {
    console.log(userData);
  }, [userData])

  return (
    <>
      {
        userData ? <h1>Hello {userData.fullname}</h1> : <h1>Pls login</h1>
      }
    </>
  )
}
