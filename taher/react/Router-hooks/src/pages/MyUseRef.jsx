import { useEffect, useRef, useState } from "react";

function MyUseRef() {
  const [onlyRun, setOnlyRun] = useState(true);
  const inputRef = useRef();
  const goToTitle = useRef();

  const activeInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    activeInput();
  }, [onlyRun]);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => setOnlyRun(!onlyRun)}>Active Input</button>

      <br />

      <button
        onClick={() =>
          goToTitle.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Go to title
      </button>

      <div style={{ height: "100vh", backgroundColor: "red" }}></div>
      <div style={{ height: "100vh", backgroundColor: "green" }}></div>
      <div style={{ height: "100vh", backgroundColor: "blue" }}></div>
      <div style={{ height: "100vh", backgroundColor: "black" }}></div>
      <div style={{ height: "100vh", backgroundColor: "yellow" }}></div>

      <h1 ref={goToTitle}>Hello World!</h1>
    </div>
  );
}

export default MyUseRef;
