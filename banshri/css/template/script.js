function showNavbar() {
  const navbar = document.getElementById('navbar')
  const hamBar = document.getElementById('hamBar')
  const getAttribute = navbar.getAttribute('class')

  if (getAttribute === 'responsive-navbar notActive') {
    navbar.setAttribute('class', 'responsive-navbar active')
    hamBar.style.display = "none"
  }
}

function closeNavbar() {
  const hamBar = document.getElementById('hamBar')
  const getAttribute = navbar.getAttribute('class')

  if (getAttribute === 'responsive-navbar active') {
    navbar.setAttribute('class', 'responsive-navbar notActive')
    hamBar.style.display = "block"
  }
}
