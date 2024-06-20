import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoForm from "./components/pages/TodoForm";
import Aside from "./components/configs/Aside";
import TodoList from "./components/pages/TodoList";
import { useContext } from "react";
import { GlobProvider } from "./components/Context/GlobContext";

function App() {

  const { theme } = useContext(GlobProvider)

  return (
    <section className={`${theme}`}>
      <BrowserRouter>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-2 max-[1411]:col-span-4">
            <Aside />
          </div>

          <div className={`bg-[--mainBg] col-span-10 max-[1411]:col-span-7`}>
            <Routes>
              <Route path="/" element={<TodoForm />} />
              <Route path="Todolist" element={<TodoList />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </section>
  );
}

export default App;
