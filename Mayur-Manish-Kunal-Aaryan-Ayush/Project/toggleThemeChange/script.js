let themeBtn = document.querySelector(".themeBtn")
let themeStyle = document.getElementById("themeStyle")
let popup = document.querySelector(".popup")
let witchTheme = document.querySelector("#witchTheme")

function toggleTheme() {

  popup.classList.add("activePopup")
  setTimeout(() => { popup.classList.remove("activePopup") }, 2000)

  if (themeStyle.getAttribute("href") === "./light.css") {
    themeStyle.setAttribute("href", "./dark.css")
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'
    witchTheme.innerHTML = "dark"

    localStorage.setItem("theme", "dark")
  } else {
    themeStyle.setAttribute("href", "./light.css")
    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'
    witchTheme.innerHTML = "light"

    localStorage.setItem("theme", "light")
  }
}

let localThemeStore = localStorage.getItem("theme")

if (localThemeStore === "light") {
  themeStyle.setAttribute("href", "./light.css")
  themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'
} else {
  themeStyle.setAttribute("href", "./dark.css")
  themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'
}

