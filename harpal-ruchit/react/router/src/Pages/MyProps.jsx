/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// export default function MyProps() {

//   const username = "Chagan"

//   return (
//     <div>
//       <Child MyPropVal={{ username }} />
//     </div>
//   )
// }

// export function Child({ MyPropVal }) {
//   return (
//     <div>
//       <h1>This is a child component</h1>

//       <h1>{MyPropVal.username}</h1>
//     </div>//   )
// }

// ---------------------------------------------------

export default function MyProps({ myValue }) {
  return (
    <div>
      <h1>Heading: {myValue.heading}</h1>
      <p>Title: {myValue.title}</p>
      <p>Price: {myValue.price}</p>
    </div>
  )
}
