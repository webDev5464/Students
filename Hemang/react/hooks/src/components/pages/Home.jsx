import { useEffect, useState } from "react";
import PropsCard from "../hooks/PropsCard";

export default function Home() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/todos").then(x => x.json()).then(x => setTodos(x.todos))
  }, [])

  return (
    <>
      <h1>This is a Home page</h1>

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