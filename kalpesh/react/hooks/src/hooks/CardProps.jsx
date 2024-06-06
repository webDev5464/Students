/* eslint-disable react/prop-types */

export default function CardProps({ MyValue }) {

  return (
    <div className="card">
      <div className="imgParent">
        <img src={MyValue.imgOne} alt="" className="img" />
      </div>

      <div>
        <p>{MyValue.title}</p>
        <p>{MyValue.price - Math.round((MyValue.price * MyValue.discount) / 100)}/-</p>
      </div>
    </div>
  )
}
