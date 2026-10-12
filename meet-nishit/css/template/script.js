function barHandler() {
  const navList = document.getElementById("navList")
  const att = navList.getAttribute("style")

  if (att) {
    if (att == "display: block;") {
      navList.style = "display: none"
    } else {
      navList.style = "display: block"
    }
  } else {
    navList.style = "display: block"
  }
}