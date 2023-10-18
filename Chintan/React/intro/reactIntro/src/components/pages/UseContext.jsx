import { useContext } from "react"
import { myContext } from "../../App"

function UseContext() {
  const context = useContext(myContext)
  return (
    <>
      <div>{context.fullName}</div>
      <div>
        {context.data.fullName()}
      </div>
    </>
  )
}

export default UseContext