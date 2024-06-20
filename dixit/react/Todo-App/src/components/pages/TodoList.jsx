import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa"
import TodoCart from "../configs/TodoCard";
import { useContext } from "react";
import { GlobProvider } from "../Context/GlobContext";
export default function TodoList() {

  const { getData, setSearchQry, searchQry, searchedTodo } = useContext(GlobProvider)

  return (
    <>
      <div className="px-[40px] py-[20px]">
        <input type="text" placeholder="Search Your Todo..." value={searchQry} className="border-4 border-black p-[7px] w-[300px] rounded-[15px]" onChange={e => setSearchQry(e.target.value)} />
      </div>

      {
        getData.length == 0 ? (
          <div className="flex justify-center pt-[40px]">

            <div className="w-[400px] bg-white p-[40px] border-dashed border-4 border-red-500">
              <div>
                <h1 className="text-center text-[30px] font-semibold">Todo List Is Blank!</h1>
              </div>

              <div className="flex justify-center pt-[20px] gap-6">
                <p className="text-[20px]">Go to add todo:</p>
                <Link to={"/"} className="flex text-[20px] gap-2 relative text-createTodo-600 ">
                  <span>
                    <FaPencilAlt className="relative top-1 " />
                  </span>
                  <span>Createtodo</span>
                  <hr className="w-[132px] border-createTodo-600 absolute top-[30px] " />
                </Link>
              </div>
            </div>
          </div>
        ) : !searchQry == "" ? (
          <div>
            {searchedTodo.map((val, index) => (
              <TodoCart key={index} dataValue={{
                heading: val.heading,
                textAria: val.textArea,
                time: val.time,
                date: val.date,
                createdTime: `${new Date(val.id).getHours()} : ${new Date(val.id).getMinutes()} ${new Date(val.id).getHours() >= 12 ? 'pm' : 'am'}`,
                createdDate: `${new Date(val.id).getDate()}/${new Date(val.id).getMonth()}/${new Date(val.id).getFullYear()}`,
                id: val.id
              }} />
            ))}
          </div>
        ) : (
          <div>
            {getData.map((val, index) => (
              <TodoCart key={index} dataValue={{
                heading: val.heading,
                textAria: val.textArea,
                time: val.time,
                date: val.date,
                createdTime: `${new Date(val.id).getHours()} : ${new Date(val.id).getMinutes()} ${new Date(val.id).getHours() >= 12 ? 'pm' : 'am'}`,
                createdDate: `${new Date(val.id).getDate()}/${new Date(val.id).getMonth()}/${new Date(val.id).getFullYear()}`,
                id: val.id
              }} />
            ))}
          </div>
        )
      }
    </>
  );
}
