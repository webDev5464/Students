/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
export default function UserCard({ myProps }) {
  return (
    <>
      <h1>Hello, My name is {myProps.username}</h1>
      <p>My age is {myProps.age}</p>
      <p>I'm study {myProps.edu}</p>
    </>
  )
}
