/* eslint-disable no-unused-vars */
import todo from "../../assets/todo.png";
import { Link, NavLink } from "react-router-dom";
import { FaPencilAlt, FaGithub, FaSun, FaMoon } from "react-icons/fa"
import { LuListTodo } from "react-icons/lu"
import { useContext } from "react";
import { GlobProvider } from "../Context/GlobContext";
export default function Aside() {

  const { getData, themeButton, theme } = useContext(GlobProvider)
  return (
    <>
      <div className="">
        <div className="bg-light-400 px-[15px] py-[10px] h-[70px]">
          <div className="flex justify-between">
            <img src={todo} alt="" className="w-[50px]" />

            <h1 className="text-[20px] font-bold pt-[5px]">My Todo</h1>
          </div>
        </div>
        <div className=" h-[90.8vh] relative">
          <NavLink to={"/"}>
            <div className="flex gap-3 pl-[30px] pt-[30px]">
              <FaPencilAlt className="text-[25px] relative top-1" />
              <h1 className="font-semibold text-[25px]">Create Todo</h1>

            </div>

          </NavLink>


          <NavLink to={"Todolist"}>


            <div className="flex gap-2 pt-[30px] px-[40px]">

              <LuListTodo className="text-[25px] relative top-1" />
              <h1 className="text-[22px] font-medium">Todo List</h1>
              <span>{getData.length}</span>
            </div>
          </NavLink>

          <div>
            <div className="absolute bottom-0 ">
              <div className="flex gap-10 pl-[45px] pb-5">
                <button onClick={themeButton}>
                  {theme == "light" ? <FaMoon className="text-[40px]" /> : <FaSun className="text-[40px]" />}
                </button>
                <Link>
                  <FaGithub className="text-[40px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
