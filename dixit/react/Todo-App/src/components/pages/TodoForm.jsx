import { useContext } from "react";
import { GlobProvider } from "../Context/GlobContext";

export default function TodoForm() {

  const { submissionFormHandler, inputData, inputValue } = useContext(GlobProvider)
  console.log(inputValue);

  return (
    <>
      <div>
        <form onSubmit={submissionFormHandler}>
          <div className="flex justify-center pt-[80px] ">
            <div className="w-[60%] border-2 border-black h-[366px]  shadow-2xl shadow-white rounded-[10px]">
              <div>
                <h1 className="bg-black text-white text-center text-[25px] rounded-t-lg py-2 font-semibold">
                  Create Todo
                </h1>
              </div>
              <div className="bg-white h-[310px] rounded-b-lg">

                <div className="flex justify-between pt-5 px-[30px]">
                  <h2 className="text-[23px] font-medium">Heading:</h2>
                  <input type="text" placeholder="Write Here..." name="heading" onChange={inputData} className="border-2 border-black outline-none p-[7px] rounded-[10px]" value={inputValue.heading} />
                </div>
                <div className="flex justify-evenly pt-[20px]">
                  <div className="flex gap-3">
                    <h2 className="text-[23px] font-medium">Time : </h2>
                    <input type="time" name="time" onChange={inputData} className="border-2 border-black p-[7px] rounded-[10px] px-[10px]" value={inputValue.time} />
                  </div>

                  <div className="flex gap-3">
                    <h2 className="text-[23px] font-medium">Date : </h2>
                    <input type="date" name="date" onChange={inputData} className="border-2 border-black p-[7px] rounded-[10px]" value={inputValue.date} />
                  </div>
                </div>
                <div className="flex justify-between px-[30px] pt-[20px]">
                  <h2 className="text-[23px] font-medium">Description:</h2>
                  <textarea name="textArea" onChange={inputData} placeholder="Write Here..." className="border-2 border-black outline-none w-[300px] rounded-[10px] p-[7px]" value={inputValue.textArea}></textarea>
                </div>
                <div className="pt-[25px] px-[30px]">
                  <button className="border-4 border-black bg-AddBtn-600 p-[10px] rounded-[10px] w-[150px] text-white font-medium text-[20px]">Add Todo</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
