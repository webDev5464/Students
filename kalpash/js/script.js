/*
  localStorage.setItem("name", "John Doe");
  const getValue = localStorage.getItem("name")
  localStorage.removeItem('user');
  localStorage.clear()
*/

// const usersData = [
//   { fname: "John", lname: "Doe" },
//   { fname: "Chagan", lname: "Chapri" },
//   { fname: "Magan", lname: "Bloger" }
// ]

// localStorage.setItem("users", JSON.stringify(usersData));
// const rowData = localStorage.getItem("users")
// const localUsersData = JSON.parse(rowData);
// console.log(localUsersData);

const themeSheet = document.getElementById("themeSheet")
const button = document.getElementById("button")

function changeTheme() {
  const getAtt = themeSheet.getAttribute("href")

  if (getAtt == "./light.css") {
    themeSheet.setAttribute("href", "./dark.css")
    localStorage.setItem("theme", "dark")
    button.innerHTML = "Light"
  } else {
    themeSheet.setAttribute("href", "./light.css")
    localStorage.setItem("theme", "light")
    button.innerHTML = "Dark"
  }
}

const getTheme = localStorage.getItem("theme")

if (getTheme == "dark") {
  themeSheet.setAttribute("href", "./dark.css")
  button.innerHTML = "Light"
} else {
  themeSheet.setAttribute("href", "./light.css")
  button.innerHTML = "Dark"
}
