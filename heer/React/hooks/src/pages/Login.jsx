import { useContext } from "react"
import { AppContext } from "../App"

export default function Login() {


  return (
    <>
      <h1>This is a Login page</h1>

      <ChildLogin />
    </>
  )
}

function ChildLogin() {
  const { username } = useContext(AppContext)
  return <h1>Hello {username}</h1>
}