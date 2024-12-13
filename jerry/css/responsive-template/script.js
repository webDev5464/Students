function navBar() {
  const ul = document.getElementById("ul")
  const condition = ul.getAttribute("class")

  if (condition == "list notActive") {
    ul.setAttribute("class", "list active")
  } else {
    ul.setAttribute("class", "list notActive")
  }
}
