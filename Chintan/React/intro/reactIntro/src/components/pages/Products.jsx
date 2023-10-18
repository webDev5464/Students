import ProductCard from "./ProductCard"
import CodeImage from "../img/Code_blxikb.jpg"

function Products() {
  
  return (
    <>
      <ProductCard detail={{ title: "lorem", image: "https://res.cloudinary.com/dpiiduvvx/image/upload/v1694261481/cld-sample-5.jpg", width: "200" }} />
      <hr />
      <ProductCard detail={{ title: "Second card", image: CodeImage, width: 200 }} />
    </>
  )
}

export default Products