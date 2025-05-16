
//! Regular Function
function iconHandlerFunction() {
  const icon = document.getElementById("iconHandler")
  const list = document.getElementById("list")

  //! DOM
  const att = list.getAttribute("class")

  //! If Else Statement with conditional operators
  if (att == "hidden") {
    list.setAttribute("class", "show")
    icon.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  } else {
    list.setAttribute("class", "hidden")
    icon.innerHTML = '<i class="fa-solid fa-list"></i>'
  }
}
