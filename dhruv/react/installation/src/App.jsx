// import MyComponent from "./MyComponent"
import myImg from "./assets/header_2.jpg"

function App() {
  // react-router-dom
  // react-icons
  // useState, useEffect, createContext, useRef, props 
  // redux
  
  const username = "chagan"

  return (
    <>
      <div>
        <h1>Hello {username}</h1>
      </div>

      <img src={myImg} alt="" className="myImage" />

      <div>
        <p>This is a title</p>
      </div>
    </>
  )
}

export default App

// ---------------------------

// export default function App() {
//   return <h1>Hello World!</h1>
// }

// ---------------------------

// const App = () => {
//   return <h1>Hello World!</h1>
// }

// export default App

// ---------------------------

// export default function App() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <h2>This is another component</h2>

//       <Child />
//       <MyComponent />
//     </div>
//   )
// }

// ---------------------------

// export function Child() {
//   return <h2>This is a child component</h2>
// }