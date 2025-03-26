import { useState } from "react"

export default function CreateTodo() {

  const [formData, setFormData] = useState({
    id: Date.now(),
    heading: "",
    time: "",
    date: "",
    des: ""
  })

  const formHandling = (e) => {
    e.preventDefault()

    const getStoredTodo = JSON.parse(localStorage.getItem("todo")) || []

    const newTodo = { ...formData, id: Date.now() }

    localStorage.setItem("todo", JSON.stringify([...getStoredTodo, newTodo]))

    setFormData({
      id: Date.now(),
      heading: "",
      time: "",
      date: "",
      des: ""
    })
  }

  // shift + alt + f

  const inputHandler = (e) => {
    const { value, name } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <>
      <section className="w-[50%] border m-auto mt-10  flex flex-col rounded">
        <h1 className="bg-black text-white text-center py-2 font-bold text-xl">Create Todo List</h1>

        <form className="p-10 px-20" onSubmit={formHandling}>
          <div className="flex items-center gap-[20px]">
            <label htmlFor="heading">Heading:</label>
            <input type="text" name="heading" id="heading" onChange={inputHandler} />
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-[20px]">
              <label htmlFor="time">Time:</label>
              <input type="time" name="time" id="time" onChange={inputHandler} />
            </div>

            <div className="flex items-center gap-[20px]">
              <label htmlFor="date">Date:</label>
              <input type="date" name="date" id="date" onChange={inputHandler} />
            </div>
          </div>

          <div className="flex items-center gap-[20px]">
            <label htmlFor="des">Description:</label>
            <textarea name="des" id="des" className="w-full" onChange={inputHandler}></textarea>
          </div>

          <div className="w-fit m-auto mt-5">
            <button type="submit" className="border-2 rounded bg-green-200 p-1 px-3 font-bold active:scale-[.95] cursor-pointer">Add Todo</button>
          </div>
        </form>
      </section>
    </>
  )
}
