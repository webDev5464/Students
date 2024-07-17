const productsRender = document.getElementById("productsRender")

productsRender.innerHTML = product.map((value) => {
  return `
    <section class="border-4 border-black w-[300px] h-[470px] overflow-hidden rounded-2xl drop-shadow-productCardShadow bg-white">
      <div class="border-b-2 border-black flex justify-center items-center w-[300px] h-[250px] overflow-hidden">
        <img src="${value.img}" alt="productImage" class="w-[230px]"/>
      </div>

      <div class="p-2 bg-black h-full text-white">
        <p>${value.title.slice(0, 80)}...</p>
        <p class="pt-2">
          <span class="line-through">${value.price}/-</span>
          <span class="ml-3 font-bold text-xl text-red-400">${value.discount}%</span>
        </p>
        <p class="font-bold text-xl">${value.price - Math.floor((value.price * value.discount) / 100)}/-</p>

        <button class="absolute bottom-0 mb-3 bg-white text-black px-2 py-1 border-2 border-gray rounded-md active:scale-95 font-bold"
          onclick="addToCart(${value.Id})"
        >
          Add To Cart
        </button>
      </div>
    </section>
  `
}).join("")

function addToCart(id) {
  try {
    const userSelectedData = product.find(item => item.Id == id)
    const localCartData = JSON.parse(localStorage.getItem('cartData')) || []

    if (localCartData == null) {
      localCartData.push(userSelectedData)
      localStorage.setItem('cartData', JSON.stringify(localCartData))
    } else {
      if (localCartData.find(item => item.Id == id) !== undefined) {
        throw "Product Already added in cart."
      } else {
        localCartData.push(userSelectedData)
        localStorage.setItem('cartData', JSON.stringify(localCartData))
      }
    }
  } catch (e) {
    console.log(e);
  }
}

//* task : find product store in localStorage