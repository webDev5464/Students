import "./index.css"
import { users } from "./Data"

// function App() {
//   return <h1>Hello World!</h1>
// }

// export default App

//-------------------------


export default function App() {

  const user = "Chagan"

  // const users = [
  //   { fname: "Chagan", lname: "Chapri" },
  //   { fname: "Magan", lname: "Bloger" },
  //   { fname: "John", lname: "Doe" },
  // ]

  return (
    <>
      <h1 className="myHeading">Hello World! {user} </h1>
      <p style={{ backgroundColor: "greenyellow", color: "blue" }}>Lorem ipsum dolor sit amet.</p>
      <MyFunction />

      {users.map((x, i) => {
        return (
          <div key={i}>
            <h1>{x.fname} {x.lname}</h1>
          </div>
        )
      })}
    </>
  )
}

function MyFunction() {
  return <h1>another function</h1>
}

//-------------------------

// const App = () => {
//   return <h1>Hello World!</h1>
// }

// export default App