let down = document.querySelector('.down')
let icon = document.querySelector('.icon')
let navLink = document.querySelector(".navLink")
let hamBurgerIcon = document.querySelector(".hamBurgerIcon")
let navigationHandler = document.querySelector(".navigationHandler")

icon.innerHTML = `<i class="fa-solid fa-sort-down"></i>`
hamBurgerIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`

function showOptions() {
  if (down.getAttribute('class') == "down") {
    down.setAttribute('class', "down active")
    icon.innerHTML = `<i class="fa-solid fa-sort-up"></i>`
  } else {
    down.setAttribute('class', "down")
    icon.innerHTML = `<i class="fa-solid fa-sort-down"></i>`
  }
}

function hamBurger() {
  if (navLink.getAttribute('class') == "navLink") {
    navLink.setAttribute("class", "navLink activePhone")
    navigationHandler.setAttribute("class", "navigationHandler navigationHandlerActive")
    hamBurgerIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`
  } else {
    navLink.setAttribute("class", "navLink")
    hamBurgerIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`
    navigationHandler.setAttribute("class", "navigationHandler  ")
  }
}

function removeNavigation() {
  navLink.setAttribute("class", "navLink")
  hamBurgerIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`
}