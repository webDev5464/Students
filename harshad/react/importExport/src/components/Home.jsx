// export const Home = () => {
//   return <h1>This is a Home Page</h1>
// }

// export const Users = () => {
//   return <h1>User Component</h1>
// }

export default function Home() {
  return (
    <>
      <h1>This is a Home Page</h1>
      <HomeChild />
    </>
  )
}

function HomeChild() {
  return <h1>This is a Home Child Page</h1>
}

export function Users() {
  return <h1>User Component</h1>
}
