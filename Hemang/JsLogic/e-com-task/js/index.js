const themeStyle = document.getElementById("themeStyle")
function themeChange() {
  const themeValue = themeStyle.getAttribute("href")

  if (themeValue == "/styles/lightTheme.css") {
    themeStyle.setAttribute("href", "/styles/darkTheme.css")
    localStorage.setItem("theme", "/styles/darkTheme.css")
  } else {
    themeStyle.setAttribute("href", "/styles/lightTheme.css")
    localStorage.setItem("theme", "/styles/lightTheme.css")
  }
}

const getTheme = localStorage.getItem("theme")

if (getTheme == "/styles/lightTheme.css") {
  themeStyle.setAttribute("href", "/styles/lightTheme.css")
} else {
  themeStyle.setAttribute("href", "/styles/darkTheme.css")
}