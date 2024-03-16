import "./index.css"
import myImage from "./assets/main-header-1.jpg"

function App() {
  const person = "John Doe"

  return (
    <>
      <h1 className="MyClass">This is a App</h1>
      <p>{person}</p>
      <img src={myImage} alt="" className="mainImage" />
    </>
  )
}

export default App
