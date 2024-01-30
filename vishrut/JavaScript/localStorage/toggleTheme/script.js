let themeStyle = document.getElementById("themeStyle")
let boll = document.querySelector(".boll")

function toggleTheme() {
  if (themeStyle.getAttribute("href") === "./dark.css") {
    themeStyle.setAttribute("href", "./light.css")
    localStorage.setItem("theme", "light")
    boll.innerHTML = `<i class="fa-solid fa-moon"></i>`
    boll.classList.add("right")
  } else {
    themeStyle.setAttribute("href", "./dark.css")
    localStorage.setItem("theme", "dark")
    boll.innerHTML = `<i class="fa-solid fa-sun"></i>`
    boll.classList.remove("right")
  }
}

let store = localStorage.getItem("theme")
if (store === "light") {
  themeStyle.setAttribute("href", "./light.css")
  boll.innerHTML = `<i class="fa-solid fa-moon"></i>`
  boll.classList.add("right")
} else {
  themeStyle.setAttribute("href", "./dark.css")
  boll.innerHTML = `<i class="fa-solid fa-sun"></i>`
  boll.classList.remove("right")
}