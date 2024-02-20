/* eslint-disable react/prop-types */

const MyProps = ({ products }) => {
  return (
    <div>
      <div>{products.title}</div>
      <div>
        <img src={products.img1} alt="" width={100} />
      </div>
      <div>
        {products.price} {products.discount}
      </div>
    </div>
  )
}

export default MyProps