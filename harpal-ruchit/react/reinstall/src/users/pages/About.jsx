import { useState } from "react";
import { FaBars } from "react-icons/fa";

function About() {
  const [aside, setAside] = useState(false)
  return (
    <div onClick={() => setAside(!aside)} className="border-2 border-green-500 h-[100vh]">

      <div onClick={() => setAside(!aside)} className="absolute right-0 m-3 text-2xl cursor-pointer"><FaBars /></div>

      <div className={`bg-red-500 h-[100vh] w-[200px] duration-300 absolute z-10 ${aside ? "left-0" : " -left-[1000px]"}`}></div>

    </div>
  )
}

export default About
