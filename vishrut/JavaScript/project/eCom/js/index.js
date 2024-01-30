//! single page
document.getElementById("default").click()
function singlePage(pageName) {
  let links = document.querySelectorAll(".link")
  // console.log(links);
  let containers = document.querySelectorAll(".container")
  // console.log(containers);

  let containerLength = containers.length
  for (let init = 0; init < containerLength; init++) {
    containers[init].style.display = "none"
  }
  document.getElementById(pageName).style.display = "block"

  let linksLength = links.length
  for (let init = 0; init < linksLength; init++) {
    links[init].classList.add("links")
    links[init].classList.remove("active")
  }
  document.querySelector(`[onclick="singlePage('${pageName}')"]`).classList.add("active")
}

//! Theme Change
let themeStyle = document.getElementById("themeStyle")
let themeButton = document.querySelector(".themeButton")
function toggleTheme() {
  if (themeStyle.getAttribute("href") === "./style/dark.css") {
    themeStyle.setAttribute("href", "./style/light.css")
    themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>'
    localStorage.setItem("theme", "light")
  } else {
    themeStyle.setAttribute("href", "./style/dark.css")
    themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>'
    localStorage.setItem("theme", "dark")
  }
}

//* get products in localStorage
let themeStore = localStorage.getItem("theme")
if (themeStore === "dark") {
  themeStyle.setAttribute("href", "./style/dark.css")
  themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>'
} else {
  themeStyle.setAttribute("href", "./style/light.css")
  themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>'
}

//! products Render
let productData = [...earbud]
let renderHereProducts = document.getElementById("renderHereProducts")
let renderInHtml = ""
productData.forEach((x) => {
  renderInHtml += `
    <div class="cartCard">
      <div>
        <img src="${x.img}" onclick="showImage(${x.id})"/>
      </div>
      <hr>
      <div>
        <p>${x.title.slice(0, 100)}</p>
      </div>
      <div class="priceDetail">
        <p>
          <span><del>${x.price}/-</del></span> |
          <span>${x.discount}%</span> |
          <span>${x.price - Math.round((x.price - Math.round(x.price * x.discount) / 100))}/-</span>
        </p>
      </div>    
      <button onclick="addToCart(${x.id})" class="btn addCart">Add Cart</button>
    </div>
  `
})
renderHereProducts.innerHTML = renderInHtml

//! showImage
let showImageElement = document.querySelector(".showImageElement")
let cancelBtn = document.getElementById("cancelBtn")
let showImgSrc = document.getElementById("showImgSrc")

cancelBtn.addEventListener('click', () => {
  showImageElement.classList.remove("showImageElementActive")
})

function showImage(id) {
  let productImage = productData.find((x) => x.id == id)
  showImgSrc.src = productImage.img
  showImageElement.classList.add("showImageElementActive")  
}

//! Add to cart
let cartDataRender = document.getElementById("cartDataRender")
let popup = document.querySelector(".popup")
let cartData = []
function addToCart(id) {
  const findProducts = productData.find((x) => x.id === id)
  const addProductsCart = cartData.find((x) => x.id === id)
  console.log(findProducts);

  if (addProductsCart) {
    popup.innerHTML = "Product already added"
    popup.classList.add("warningActivePopup")
    setTimeout(() => { popup.classList.remove("warningActivePopup") }, 2000)
  } else {
    cartData.push(findProducts)
  }

  let renderData = cartData.map((x) => {
    return `
      <h2 class="x">${x.title}</h2>
      <div class="btn removeCart" onclick="removeCart(${x.id})">
        Remove Cart
      </div>
    `
  })

  cartDataRender.innerHTML = renderData.join("")
}

//! remove Cart

function removeCart(id) {
  const cartProductData = cartData.findIndex((x) => x.id === id)

  if (!cartProductData) {
    cartData.splice(cartProductData, 1)
    popup.innerHTML = "Product Remove"
    popup.classList.add("successActivePopup")
    setTimeout(() => { popup.classList.remove("successActivePopup") }, 2000)
  }

  let renderData = cartData.map((x) => {
    return `
      <h2 class="x">${x.title}</h2>
      <div class="btn removeCart" onclick="removeCart(${x.id})">
        Remove Cart
      </div>
    `
  })

  cartDataRender.innerHTML = renderData.join("")
}