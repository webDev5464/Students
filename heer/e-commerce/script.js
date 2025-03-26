const renderData = document.getElementById("renderData")
const renderCartData = document.getElementById("renderCartData")
const addToCart = []
const data = []

async function fetchAPI() {
  try {
    const rowData = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
    const jsonData = await rowData.json()
    const { earbud } = jsonData
    data.push(...earbud)

    renderData.innerHTML = data.map((val) => {
      return `
        <div class="card">
          <img src="${val.img1}" alt="image">
          <p>${val.title}</p>

          <button onclick="addToCartFunction(${val.id})">Add to Card</button>
        </div>
      `
    }).join(" ")

  } catch (err) {
    console.log(err.message)
  }
}

fetchAPI()

function addToCartFunction(id) {
  const existingProduct = addToCart.find(val => val.id === id)

  if (!existingProduct) {
    const singleProduct = data.find((product) => product.id === id)
    addToCart.push(singleProduct)
    renderCartDataFunction()
  } else {
    alert("This product already exists in your cart")
  }
}

//! Cart btn

function cartBtnFunction() {
  const cartSection = document.getElementById("cartSection")
  const getClass = cartSection.getAttribute("class")
  if (getClass == "hideCart") {
    cartSection.setAttribute("class", "showCart")
  } else {
    cartSection.setAttribute("class", "hideCart")
  }
}

//! Render cart data

function renderCartDataFunction() {
  renderCartData.innerHTML = addToCart.map((val) => {
    return `
      <div class="card">
        <img src="${val.img1}" alt="image">
        <p>${val.title}</p>

        <button onclick="removeToCart(${val.id})">Remove To Cart</button>
      </div>
    `
  }).join("")
}

//! Remove to cart

function removeToCart(id) {
  const findCart = addToCart.findIndex((cartId) => cartId.id == id)
  addToCart.splice(findCart, 1)
  renderCartData.innerHTML = addToCart.map((val) => {
    return `
      <div class="card">
        <img src="${val.img1}" alt="image">
        <p>${val.title}</p>

        <button onclick="removeToCart(${val.id})">Remove To Cart</button>
      </div>
    `
  }).join("")
}

//! Change Theme

function changeTheme() {
  // <i class="fa-solid fa-sun"></i>
  const themeStyle = document.getElementById("themeStyle")
  const themeIcon = document.getElementById("themeIcon")

  const getValue = themeStyle.getAttribute("href")
  if (getValue == "./light.css") {
    themeStyle.setAttribute("href", "./dark.css")
    themeIcon.setAttribute("class", "fa-solid fa-sun")
  } else {
    themeStyle.setAttribute("href", "./light.css")
    themeIcon.setAttribute("class", "fa-solid fa-moon")
  }
}