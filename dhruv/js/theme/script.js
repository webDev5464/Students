const themeSheet = document.getElementById("themeSheet")

function themeHandler() {
  const themeIcon = document.getElementById("themeIcon")
  const hrefAtt = themeSheet.getAttribute("href")

  if (hrefAtt == "./light.css") {
    themeSheet.setAttribute("href", "./dark.css")
    themeIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`
    localStorage.setItem("localTheme", "./dark.css")
  } else {
    themeSheet.setAttribute("href", "./light.css")
    themeIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`
    localStorage.setItem("localTheme", "./light.css")
  }
}

const localTheme = localStorage.getItem("localTheme")

if (localTheme === "./dark.css") {
  themeSheet.setAttribute("href", "./dark.css")
  themeIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`
} else {
  themeSheet.setAttribute("href", "./light.css")
  themeIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`
}