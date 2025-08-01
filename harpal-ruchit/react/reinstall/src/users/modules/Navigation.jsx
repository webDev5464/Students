import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <section className="flex justify-between bg-black text-white p-5 px-20 fixed top-0 w-full z-50">
      <div>
        <p>Logo</p>
      </div>

      <ul className="flex gap-10">
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/register"}>register</NavLink></li>
        <li><NavLink to={"/FetchingData"}>FetchingData</NavLink></li>
      </ul>
    </section>
  )
}

export default Navigation
