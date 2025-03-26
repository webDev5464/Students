/* eslint-disable no-unused-vars */
import UserCard from "./UserCard";

export default function Home() {
  const data = [
    { username: "Magan", age: 50, edu: "c++" },
    { username: "chagan", age: 20, edu: "javaScript" },
    { username: "gagan", age: 30, edu: "python" },
    { username: "daggan", age: 10, edu: "java" },
  ]

  return (
    <>
      <h1>This is a Home page</h1>

      <hr />

      {
        data.map((val, i, obb) => (
          <div key={i}>
            <UserCard myProps={{ username: val.username, age: val.age, edu: val.edu }} />
          </div>
        ))
      }

    </>
  )
}
