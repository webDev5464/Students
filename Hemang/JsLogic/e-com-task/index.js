const renderAllData = document.getElementById("renderAllData")

renderAllData.innerHTML = products.map((value) => {
  return `
  <section class="card">
    <div class="cardImg">
      <img src="${value.img}" alt="productImages">
    </div>
  
    <div class="cardDetail">
      <p>${value.title.slice(0, 70)}</p>
      <p class="priceDetail">
        <span><del>${value.price}/-</del></span>
        <span><b>${value.discount}% Off</b></span>
        <span>${value.price - Math.round((value.price * value.discount) / 100)}/- </span>
      </p>
    
      <div class="cardButton">
        <button onclick="addToCart(${value.id})">Add To Cart</button>
      </div>
    </div>
  </section>
  `
}).join("")

function addToCart(id) {
  const productFindAndAddToCart = products.find(item => item.id == id)
  const localCartData = JSON.parse(localStorage.getItem("cartStore"))
  console.log(localCartData);

  const cartData = []

  if (localCartData == null) {
    cartData.push(productFindAndAddToCart)
    localStorage.setItem("cartStore", JSON.stringify(cartData))
  } else {
    localCartData.push(productFindAndAddToCart)
    localStorage.setItem("cartStore", JSON.stringify(localCartData))
  }
}
