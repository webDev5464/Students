import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

export default function App() {
  return (
    <BrowserRouter>

      <Navigation />

      <Routes>
        <Route path="/" element={<CreateTodo />} />
        <Route path="todoList" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  )
}
