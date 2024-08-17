//! npm i react-router-dom
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import MyUseState from "./pages/MyUseState";
import MyUseEffect from "./pages/MyUseEffect";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="useState" element={<MyUseState />} />
          <Route path="useEffect" element={<MyUseEffect />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

function Navigation() {
  return (
    <nav className="navigation">
      <div>
        <h2>Logo</h2>
      </div>

      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"useState"}>useState</NavLink>
        </li>
        <li>
          <NavLink to={"useEffect"}>useEffect</NavLink>
        </li>
      </ul>
    </nav>
  );
}

// useState
// useEffect
// useContext
// useRef
// props
