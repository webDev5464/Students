import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import CreateToDo from "./CreateToDo";
import ToDoList from "./ToDoList";

export default function App() {
    return (
        <BrowserRouter>
            <main>
                <Navigation></Navigation>
                <div class="main-div">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="CreateTODO" element={<CreateToDo/>}/>
                        <Route path="ToDoList" element={<ToDoList />}></Route>
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
    )
}