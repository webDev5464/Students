import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <div class="menu-header">
                <div class="logo">

                </div>
                <h1>My-Todo</h1>
            </div>
            <div class="menu">
                <ul>
                    <li><NavLink to="CreateTODO">Create To-Do</NavLink></li>
                    <li><NavLink to="ToDoList">To-Do List</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}