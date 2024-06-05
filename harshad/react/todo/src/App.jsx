import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateTodo from "./pages/CreateTodo"
import ShowTodo from "./pages/ShowTodo"
import Navigation from "./modules/Navigation"

export default function App() {
  return (
    <BrowserRouter>

      <Navigation />

      <main className="p-2">
        <Routes>
          <Route path="/" element={<CreateTodo />} />
          <Route path="showTodo" element={<ShowTodo />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
