import { useContext } from "react"
import { GlobalContext } from "./GlobContext"

export default function RenderData() {
  const { data } = useContext(GlobalContext)
  console.log(data);
  
  return (
    <>
      <div>
        {
          data.map((e) => (
            <div key={e.id}>
              <h1>{e.inputTitle}</h1>
            </div>
          ))
        }
      </div>
    </>
  )
}