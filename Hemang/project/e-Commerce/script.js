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
    <div>
      <div>
        <img src="${e.img}" alt="Product" width="200px" />
      </div>
    </div>
  `
})

ProductsRenderHere.innerHTML = dataRender