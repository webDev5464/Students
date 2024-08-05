// import './style.css'

function App() {
  let condition = true;
  const x = "World!";

  const changeUi = () => {
    condition = true;
  };

  return (
    <>
      {condition ? <h1 className="MyClass">Hello {x}</h1> : <h1>Bye!</h1>}

      <button onClick={changeUi}>Click me!</button>
    </>
  );
}

export default App;
