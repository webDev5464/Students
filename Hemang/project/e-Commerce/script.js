//! Single page navigation
let navLink = document.querySelectorAll(".NavLink")
let page = document.querySelectorAll(".page")
document.getElementById("default").click()

function toggleNav(id) {
  for (let init = 0; init < page.length; init++) {
    page[init].style.display = "none"
  }
  document.getElementById(id).style.display = "block"

  for (let init = 0; init < navLink.length; init++) {
    navLink[init].classList.remove("NavLink-Active")
  }
  document.querySelector(`[onClick="toggleNav('${id}')"]`).classList.add("NavLink-Active")
}

//! localStore theme
let themeStyle = document.getElementById("themeStyle")
let switchBtn = document.querySelector(".switchBtn")

function toggleTheme() {
  if (themeStyle.getAttribute('href') == "./lightTheme.css") {
    switchBtn.classList.add("switchBtn-right")
    switchBtn.classList.remove("switchBtn-left")
    themeStyle.setAttribute("href", "./darkTheme.css")
    localStorage.setItem("theme", "dark")

  } else {
    switchBtn.classList.add("switchBtn-left")
    switchBtn.classList.remove("switchBtn-right")
    themeStyle.setAttribute("href", "./lightTheme.css")
    localStorage.setItem("theme", "light")
  }
}

//? theme set in localStorage
let themeStorage = localStorage.getItem("theme")
if (themeStorage == "light") {
  themeStyle.setAttribute("href", "./lightTheme.css")
  switchBtn.classList.add("switchBtn-left")
  switchBtn.classList.remove("switchBtn-right")
} else {
  themeStyle.setAttribute("href", "./darkTheme.css")
  switchBtn.classList.add("switchBtn-right")
  switchBtn.classList.remove("switchBtn-left")
}

//! Render Products

const ProductsRenderHere = document.getElementById("ProductsRenderHere")

let dataRender = ""

earbud.forEach((e) => {
  dataRender += `
    <div class="card">
      <div>
        <img src="${e.img}" alt="Product" width="250px" />
      </div>

      <div class="cardDetail">
        <p>${e.title.slice(0, 90)}</p>

        <div class="border"></div>

        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div class="priceDetail">
            <span>${e.price}/-</span>
            <span>${e.discount}% off</span>
            <span>${e.price - Math.round((e.price * e.discount) / 100)}/-</span>
          </div>

          <div class="btn success-btn" onClick="addProduct(${e.id})">Add</div>
        </div>

      </div>
    </div>
  `
})

ProductsRenderHere.innerHTML = dataRender

//! Add to card
const cartData = []
const RenderCartProducts = document.getElementById("RenderCartProducts")

function addProduct(id) {
  const findCardData = cartData.find(x => x.id == id)
  const findProductData = earbud.find(x => x.id == id)

  if (findCardData) {
    alert("Product Already Added")
  } else {
    cartData.push(findProductData)
  }
  console.log(cartData);

  //! Render CartData
  const renderCartData = cartData.map(e => {
    return `
      <div class="card">
        <div>
          <img src="${e.img}" alt="Product" width="250px" />
        </div>
  
        <div class="cardDetail">
          <p>${e.title.slice(0, 90)}</p>
  
          <div class="border"></div>
  
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div class="priceDetail">
              <span>${e.price}/-</span>
              <span>${e.discount}% off</span>
              <span>${e.price - Math.round((e.price * e.discount) / 100)}/-</span>
            </div>
  
            <div class="btn alert-btn" onClick="removeData(${e.id})">Remove</div>
          </div>
  
        </div>
      </div>
    `
  })

  RenderCartProducts.innerHTML = renderCartData
}

//! remove in card
function removeData(id) {
  let findData = cartData.findIndex(x => x.id == id)
  console.log(findData);

  if (!findData) {
    cartData.splice(findData, 1)
  }

  const reRenderCartData = cartData.map((e) => {
    return `
      <div class="card">
        <div>
          <img src="${e.img}" alt="Product" width="250px" />
        </div>

        <div class="cardDetail">
          <p>${e.title.slice(0, 90)}</p>

          <div class="border"></div>

          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div class="priceDetail">
              <span>${e.price}/-</span>
              <span>${e.discount}% off</span>
              <span>${e.price - Math.round((e.price * e.discount) / 100)}/-</span>
            </div>

            <div class="btn alert-btn" onClick="removeData(${e.id})">Remove</div>
          </div>

        </div>
      </div>
    `
  })

  RenderCartProducts.innerHTML = reRenderCartData.join("")
}