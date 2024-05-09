import Home, { Users } from "./components/Home"

export default function App() {

  const person = "Modi"
  const user = "Sir"

  return (
    <>
      <h1>Hello {person} {user}</h1>
      <Home />
      <Users />
    </>
  )
}
