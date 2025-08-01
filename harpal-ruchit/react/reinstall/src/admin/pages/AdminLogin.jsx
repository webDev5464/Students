import { useContext } from "react"
import { GlobProvider } from "../../users/modules/GlobContext"

function AdminLogin() {

  const { users } = useContext(GlobProvider)

  console.log(users)

  return (
    <div>
      <h1>Admin Login Form</h1>
    </div>
  )
}

export default AdminLogin
