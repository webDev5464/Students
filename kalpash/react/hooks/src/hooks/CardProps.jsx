/* eslint-disable react/prop-types */

export default function CardProps({ MyValue }) {

  return (
    <div className="card">
      <div>
        <img src={MyValue.imgOne} alt="" />
      </div>

      <div>
        <p>{MyValue.title}</p>
        <p>{MyValue.price - Math.round((MyValue.price * MyValue.discount) / 100)}/-</p>
      </div>
    </div>
  )
}
