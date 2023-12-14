/* eslint-disable react/prop-types */
const MyCard = ({ MyProps }) => {
  return (
    <div className="card">
      <div>
        <h1>{MyProps.heading}</h1>
      </div>

      <div>
        <p>{MyProps.title}</p>
        <p>{MyProps.price}</p>
        <p>{MyProps.discount}</p>
      </div>
    </div>
  )
}

export default MyCard