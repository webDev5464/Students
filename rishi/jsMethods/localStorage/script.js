// let render = document.getElementById('render')

// localStorage.setItem('myStorage', 'Hello World!')

// function clearStorage() {
//   localStorage.clear()
// }

// function removeStorage() {
//   localStorage.removeItem('myStorage')
// }

// localStorage.setItem('myStorage', "Hello World!")

// const jsonString = JSON.stringify({
//   fname: "john",
//   lname: "Doe",
//   age: 22
// })
// localStorage.setItem('myData', jsonString)

// let getData = JSON.parse(localStorage.getItem('myData'))

// render.innerHTML = getData.fname

// localStorage.setItem('myStorage2', "Hello World!")

// const storedValue = localStorage.getItem('myStorage')
// console.log(storedValue);

let themeStyle = document.getElementById('themeStyle')

function changeTheme() {
  const getAtt = themeStyle.getAttribute('href')
  if (getAtt == "./light.css") {
    themeStyle.setAttribute('href', './dark.css')
    localStorage.setItem('theme', './dark.css')
  } else {
    themeStyle.setAttribute('href', './light.css')
    localStorage.setItem('theme', './light.css')
  }
}

if (localStorage.getItem('theme') == './dark.css') {
  themeStyle.setAttribute('href', './dark.css')
} else {
  localStorage.setItem('theme', './light.css')
}