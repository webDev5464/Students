import { useContext, useEffect, useState } from "react";
import PropsCard from "../hooks/PropsCard";
import { CreatedContext } from "../hooks/MyCreateContext";
import { AppContext } from "../../App";

export default function Home() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/todos").then(x => x.json()).then(x => setTodos(x.todos))
  }, [])

  const { person, welcomeMessage } = useContext(CreatedContext)
  const { x } = useContext(AppContext)

  return (
    <>
      <h1>This is a Home page, {welcomeMessage} {person} {x}</h1>

      <div>
        {todos.map((val) => {
          return (
            <PropsCard key={val.id}
              myProps={{
                todo: val.todo,
                process: val.completed ? "Completed" : "Not Competed",
                id: val.userId
              }}
            />
          )
        })}
      </div>
    </>
  )
}