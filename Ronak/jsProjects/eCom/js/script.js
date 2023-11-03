//! Single page
let NavLink = document.querySelectorAll(".NavLink")
let container = document.querySelectorAll(".container")

document.getElementById("default").click()
function singlePage(pageName) {

  for (let init = 0; init < container.length; init++) {
    container[init].style.display = "none"
  }
  document.getElementById(pageName).style.display = "block"

  for (let init = 0; init < NavLink.length; init++) {
    NavLink[init].classList.add("NavLink")
    NavLink[init].classList.remove("ActiveNavLink")
  }
  document.querySelector(`[onclick="singlePage('${pageName}')"]`).classList.add("ActiveNavLink")
}