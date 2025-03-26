import { useEffect, useState } from "react"

export default function TodoList() {

  const [todoData, setTodoData] = useState()

  useEffect(() => {
    const oldTodo = JSON.parse(localStorage.getItem("todo")) || []
    setTodoData(oldTodo)
  }, [])

  const deleteTodoHandler = (id) => {
    const deletedTodo = todoData.filter(e => e.id !== id)
    setTodoData(deletedTodo)
    localStorage.setItem("todo", JSON.stringify(deletedTodo))
  }

  return (
    <>
      {
        todoData ? <div>
          {todoData.map((e) => (
            <div key={e.id} className="border w-1/2 m-auto my-10 p-2">
              <h1><b>Heading:</b> {e.heading}</h1>
              <div className="flex justify-between">
                <p><b>Date:</b> <span>{e.date}</span></p>
                <p><b>Time:</b> <span>{e.time}</span></p>
              </div>
              <p><b>Description:</b> <span>{e.des}</span></p>

              <hr className="mt-4" />

              <div className="w-fit m-auto">
                <button className="bg-red-400 py-1 px-4 rounded-sm font-bold text-white mt-2 active:scale-95 cursor-pointer" onClick={() => deleteTodoHandler(e.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div> : <div></div>
      }
    </>
  )
}
