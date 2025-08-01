const themeSheet = document.getElementById("themeSheet")
const themeBtn = document.getElementById("themeBtn")

function toggleThemeHandler() {
  const getAtt = themeSheet.getAttribute("href")

  if (getAtt === "./light.css") {
    themeSheet.setAttribute("href", "./dark.css")
    themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`
    localStorage.setItem("theme", "dark")
  } else {
    themeSheet.setAttribute("href", "./light.css")
    themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`
    localStorage.setItem("theme", "light")
  }
}

const getLocalTheme = localStorage.getItem("theme")

if (getLocalTheme !== null) {
  if (getLocalTheme == "dark") {
    themeSheet.setAttribute("href", "./dark.css")
    themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`
  } else {
    themeSheet.setAttribute("href", "./light.css")
    themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`
  }
}