function ProductCard({ detail }) {
  return (
    <div>
      <div>
        <img src={detail.image} alt="" width={detail.width}/>
      </div>
      <div>
        <p>{detail.title}</p>
      </div>
    </div>
  )
}

export default ProductCard