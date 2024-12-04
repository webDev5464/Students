import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation/>
        <Routes>
        <Route  path="/" element={<Home />} />
          <Route exect path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
