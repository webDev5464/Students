/* eslint-disable react/prop-types */

export default function ChildComponent({ MyProps }) {
  return (
    <div style={MyStyle.card}>
      <h1>{MyProps.heading}</h1>
      <hr />
      <p>{MyProps.impTitle}</p>
      <p style={MyStyle.semi}>{MyProps.title}</p>
    </div>
  )
}

const MyStyle = {
  card: {
    width: 300,
    border: "2px solid black",
    margin: "50px 0",
    padding: 20
  },
  semi: {
    color: "gray"
  }
}