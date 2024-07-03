import { Outlet } from "react-router-dom";
import UserNavigation from "./modules/UserNavigation";
import UserContext from "./context/UserContext";
import axios from "axios";
import { useEffect } from "react";

export default function UserIndex() {

  const tokenExample = async () => {
    const response = await axios.get('http://localhost:8080/token')
    console.log('====================================');
    console.log(response);
    console.log('====================================');
  }

  useEffect(() => {
    tokenExample()
  }, [])

  return (
    <UserContext>
      <UserNavigation />
      <Outlet />
    </UserContext>
  )
}