// function App() {
//   return <h1>Hello World!</h1>
// }

// export default App

import Title from "./Title";
import './Style.css'

export default function App() {
  return (
    <>
      <h1 className="heading">Hello World!</h1>
      <Title />
    </>
  )
}
