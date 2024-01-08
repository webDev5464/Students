let themeStyle = document.getElementById('themeStyle')
let switchBtn = document.getElementById('switchBtn')

switchBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`

function themeSwitch() {
  let themeAttribute = themeStyle.getAttribute('href')

  if (themeAttribute == "./dark.css") {
    themeStyle.setAttribute('href', './light.css')
    switchBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`

    localStorage.setItem('theme', 'light')
  } else {
    themeStyle.setAttribute('href', './dark.css')
    switchBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`

    localStorage.setItem('theme', 'dark')
  }
}

let storedTheme = localStorage.getItem('theme')
console.log(storedTheme);

if (storedTheme !== "dark") {
  themeStyle.setAttribute('href', './light.css')
} else {
  themeStyle.setAttribute('href', './dark.css')
}
