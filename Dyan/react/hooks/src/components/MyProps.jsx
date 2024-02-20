const MyProps = ({ products }) => {
  return (
    <div>
      <div>{products.title}</div>
      <div>
        <img src={products.img1} alt="" />
      </div>
      <div>
        {products.price} {products.discount}
      </div>
    </div>
  )
} 