// localStorage.setItem('person', 'John')
// localStorage.setItem('user', 'magan')
// localStorage.setItem('auther', 'chagan')
// let store = localStorage.getItem('user')
// console.log(store);

// function removeItem() {
//   // localStorage.removeItem('person')

//   localStorage.clear()
// }

const users = [
  { fname: 'chagan', lname: 'Chapri' },
  { fname: 'magan', lname: 'bloger' }
]

localStorage.setItem('users', JSON.stringify(users))
let getUsers = localStorage.getItem('users')
let objStore = JSON.parse(getUsers)

let renderUsers = document.getElementById('renderUsers')

renderUsers.innerHTML = objStore.map((x) => {
  return `<span>${x.fname} ${x.lname}</span> <br>`
}).join("")


let themeCss = document.getElementById('themeCss')
function changeTheme() {
  let value = themeCss.getAttribute('href')

  if (value == "./light.css") {
    themeCss.setAttribute('href', './dark.css')
    localStorage.setItem('theme', './dark.css')
  } else {
    themeCss.setAttribute('href', './light.css')
    localStorage.setItem('theme', './light.css')
  }
}

let themeStorage = localStorage.getItem('theme')
console.log(themeStorage);

if (themeStorage == "./dark.css") {
  themeCss.setAttribute('href', './dark.css')
} else {
  themeCss.setAttribute('href', './light.css')
}

let arr = ["Banana", "Orange", "Apple", "Mango"];
