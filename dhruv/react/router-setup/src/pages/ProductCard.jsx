/* eslint-disable react/prop-types */
function ProductCard({ myValue }) {
  return (
    <div className="card">
      <h1>{myValue.heading}</h1>
      <p>{myValue.title}</p>

      <p>{myValue.price}</p>
    </div>
  )
}

export default ProductCard
