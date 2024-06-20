import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

export default function Service() {

  const { person, users } = useContext(AppContext)

  return (
    <>
      <h1>This is a Service Page. {person} {users}</h1>
      <Link to="https://www.google.com/" target="_blank">Google</Link>
    </>
  )
}