let list = document.getElementById("list")
list.style.display = "none"

let init = false

function toggleMenu() {
  if (init == false) {
    list.style.display = "block"
    init = true
  } else {
    list.style.display = "none"
    init = false
  }
}

/* */

let body = document.querySelector(".body")

let $init = false

function toggleTheme() {
  if (init == false) {
    init = true
    body.classList.add("dark")
  } else {
    init = false
    body.classList.remove("dark")
  }
}
  