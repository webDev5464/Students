let Switch = document.getElementById("switch")
let themeStyle = document.getElementById("themeStyle")

Switch.innerHTML = `<i class="fa-solid fa-moon"></i>`

function toggleTheme() {
  if (themeStyle.getAttribute("href") === "./light.css") {
    themeStyle.setAttribute("href", "./dark.css")
    Switch.innerHTML = `<i class="fa-solid fa-sun"></i>`

    localStorage.setItem("theme", "dark")
  } else {
    themeStyle.setAttribute("href", "./light.css")
    Switch.innerHTML = `<i class="fa-solid fa-moon"></i>`

    localStorage.setItem("theme", "light")
  }
}

let themeStore = localStorage.getItem("theme")

if (themeStore == "light") {
  themeStyle.setAttribute("href", "./light.css")
  Switch.innerHTML = `<i class="fa-solid fa-moon"></i>`
} else {
  themeStyle.setAttribute("href", "./dark.css")
  Switch.innerHTML = `<i class="fa-solid fa-sun"></i>`
}