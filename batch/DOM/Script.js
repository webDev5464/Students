// const myHeading = document.getElementById("myHeading");
// const getAtt = myHeading.getAttribute("class")

// if (getAtt === "Heading dark") {
//   myHeading.setAttribute("class", "Heading light");
// }

// const getClassElement = document.getElementsByClassName("Heading")
// getClassElement[2].innerHTML = "Hello World!"

// const getElement = document.getElementsByTagName("p")
// console.log(getElement)

// ----------------------------------------------------------------

function themeHandler() {
  const themeStyle = document.getElementById("themeStyle")
  const getAtt = themeStyle.getAttribute("href")

  if (getAtt === "./light.css") {
    themeStyle.setAttribute("href", "./dark.css")
  } else {
    themeStyle.setAttribute("href", "./light.css")
  }
}
