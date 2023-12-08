import { useContext } from "react"
import { TodoContext } from "../modules/TodoProvider"

const TodoController = () => {

  return (
    <>
      <TodoForm />
    </>
  )
}

export default TodoController

const TodoForm = () => {
  const {
    inputHeading, setInputHeading, inputTitle, setInputTitle, AddTodo
  } = useContext(TodoContext)

  const todoForm = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={todoForm}>
        <input type="text" name="TodoHeading" placeholder="Todo Heading" value={inputHeading} onChange={(e) => setInputHeading(e.target.value)} />
        <input type="text" name="TodoTitle" placeholder="Todo Title" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} />

        <button type="submit" value="Add Todo" onClick={AddTodo} className="btn bg-[var(--success)]">Add Todo</button>
      </form>
    </>
  )
}