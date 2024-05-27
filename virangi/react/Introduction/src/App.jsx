import Home, { AnotherComponent, HomeTitle } from "./components/Home"
import "./styles/index.css"

// function App() {
//   return <h1>Hello World!</h1>
// }

// export default App

// ------------------------------------------

// export default function App() {
//   return <h1>Hello World!</h1>
// }

// ------------------------------------------

// const App = () => {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <p>Lorem ipsum dolor sit amet.</p>

//       <div>
//         <h1>Hello World</h1>
//         <p>Lorem ipsum dolor sit amet.</p>
//       </div>
//     </div>
//   )
// }

// export default App

// ------------------------------------------

const App = () => {
  return (
    <>
      <h1 className="MyClass">This is a App.jsx</h1>
      <AppChild />

      <Home />
      <HomeTitle />
      <AnotherComponent />
    </>
  )
}

const AppChild = () => {
  return <h1>AppChild</h1>
}

export default App