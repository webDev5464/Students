document.getElementById("myHeading").innerHTML = "Hello World!"

function myHeadingHandlerFunction() {
  // console.log("Clicked Button")

  const myHeading = document.getElementById("myHeading")
  const getAtt = myHeading.getAttribute("class")

  if (getAtt === "active") {
    myHeading.setAttribute("class", "hidden")
  } else {
    myHeading.setAttribute("class", "active")
  }
}