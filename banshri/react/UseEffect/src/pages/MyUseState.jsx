// npm i react-icons
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

export default function MyUseState() {
  return (
    <>
      <ChangeValue />

      <hr />
      <hr />

      <Counter />

      <hr />
      <hr />

      <DynamicTextColor />
    </>
  );
}

function ChangeValue() {
  // const username = "John";

  // const [username, setUsername] = useState("John");
  const [username, setUsername] = useState(true);

  // const functionHandler = () => {
  //   setUsername(!username);
  // };

  return (
    <>
      <h1>{username ? "John" : "Chagan"}</h1>
      {/* <button onClick={functionHandler}>Change Value!</button> */}
      <button onClick={() => setUsername(!username)}>Change Value</button>
    </>
  );
}

function Counter() {
  const [num, setNum] = useState(0);

  return (
    <>
      <h1>{num}</h1>

      <button
        style={{ fontSize: 20, padding: 10 }}
        onClick={() => {
          setNum(num + 1);
        }}
      >
        <FaPlus />
      </button>

      <button
        style={{ fontSize: 20, padding: 10 }}
        onClick={() => setNum(num - 1)}
      >
        <FaMinus />
      </button>
    </>
  );
}

function DynamicTextColor() {
  const [formData, setFormData] = useState({});
  const [textColor, setTextColor] = useState({});
  const [bg, setBg] = useState({});
  
  const formHandler = (e) => {
    e.preventDefault();

    setFormData({ ...bg, ...textColor });
  };

  const inputHandler = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    const { name, value } = e.target; // D-structure
    if (name === "bg") {
      setBg({ [name]: value });
    }
    if (name === "textColor") {
      setTextColor({ [name]: value });
    }
  };

  return (
    <>
      <div
        style={{
          width: 500,
          padding: 10,
          border: "2px solid red",
          margin: 10,
          backgroundColor: formData.bg,
          color: formData.textColor,
        }}
      >
        <h1>Hello World!</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          magnam voluptas, molestias deleniti mollitia eum corporis odit
          provident dolorem ex!
        </p>
      </div>

      <form onSubmit={formHandler}>
        <label htmlFor="bg">Background Color : </label>
        <input type="text" name="bg" onChange={inputHandler} />
        <br />
        <label htmlFor="textColor">Text Color : </label>
        <input type="text" name="textColor" onChange={inputHandler} />
        <br />
        <br />

        <input type="submit" value="Set Theme" />
      </form>
    </>
  );
}
