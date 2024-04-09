/* eslint-disable react/prop-types */

function MyProductCard({ MyValue }) {
  return (
    <>
      <div>
        <img src={MyValue.img} alt="" />
      </div>

      <div>
        <p>{MyValue.title}</p>
        <p>
          <span>{MyValue.price}/-</span>
          <span>{MyValue.discount}% off</span>
          <span>{MyValue.price - Math.round(MyValue.price * MyValue.discount / 100)}/-</span>
        </p>
      </div>
    </>
  )
}

export default MyProductCard