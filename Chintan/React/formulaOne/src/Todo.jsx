import { useState } from "react"

export default function Todo() {
  const [todo, setTodo] = useState([])
  const [inputVal, setInputVal] = useState('')

  const addTodo = () => {
    if (inputVal) {
      setTodo([...todo, inputVal])
      setInputVal('')
    }
  }

  const removeTodo = (i) => {
    const updateTodo = [...todo]
    updateTodo.splice(i, 1)
    setTodo(updateTodo)
  }

  return (
    <>
      <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {
          todo.map((e, k) => (
            <>
              <div key={k}>
                <li>{e}</li>
                <button onClick={() => removeTodo(k)}>Delete</button>
              </div>
            </>
          ))
        }
      </ul>
    </>
  )
}
