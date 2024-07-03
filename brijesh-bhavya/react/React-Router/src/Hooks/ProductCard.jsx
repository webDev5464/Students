/* eslint-disable react/prop-types */

export default function ProductCard({ MyValue }) {
  return (
    <div className="card">
      <div>
        <img src={MyValue.image} alt="" width={'300px'} />
      </div>
      <div>
        <p>{MyValue.title}</p>
        <p>{MyValue.price} /-</p>
        <p>{MyValue.discount}% Off</p>
      </div>
    </div>
  )
}
