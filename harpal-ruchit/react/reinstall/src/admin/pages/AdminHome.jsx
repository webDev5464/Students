import { useContext } from "react"
import { GlobProvider } from "../../users/modules/GlobContext"
// import { AppContext } from "../../App"

function AdminHome() {
  // const { num } = useContext(AppContext)

  // console.log(num)

  const { users } = useContext(GlobProvider)

  console.log(users)
  return (
    <div>
      <h1>AdminHome</h1>

      {users.map(x => <p>{x}</p>)}
    </div>
  )
}

export default AdminHome
