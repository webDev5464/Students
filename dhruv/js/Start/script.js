// const a = 10
// let b = 20

// document.getElementById("root").innerHTML = a + b
// console.log(a + b)

//! --- Type of variables ---

//? var, const, let

// var myVariable = "Magan"

// console.log(myVariable)

// const a = "chagan"
// let b = "magan"

// let a = 10

// console.log(a)

//* Reason One

// var a = 20

// var a = "Magan"

// console.log(a) // 20

//? let & const

// let a = 10 // declaration

// console.log(34, a) // 10 // definition

// a = 50 // update

// const b = 20

// b = 50

// console.log(b)

// console.log(40, a) // 50

//? Variable Syntax

// const username = "magan"
// console.log(username) // magan

//* CamelCase Variable name
// const firstName = 'Chagan' // String
// let lastName = "Bloger"

// console.log(firstName + " " + lastName)

// console.log('Hello "Chagan"')

// ------------------------

// const a = 10 // Number
// const c = 50
// const b = "20" // String

// console.log(a + b + c)

//! Block Scope

// const b = 10

// {
//   console.log(b) // 10

//   const bb = 50

//   // console.log(b) // 50
// }

// // console.log(b) // 10

// ---------------
//* Reason Two

// var a = 10 // Number

// {
//   var a = 20
// }

// console.log(a)

//! Operators

// let a = 10
// let b = 20

// console.log(a + b)
// console.log(a - b)
// console.log(a * 2)
// console.log(a / 2)
// console.log(a ** 2)
// console.log(11 % 2) // modules

// a++ // increment
// a-- // decrement

// console.log(a)

// console.log(++a) // 11
// console.log(--a) // 11

//! Assignment Operators

// let a = 10
// let b = 20

// a = a + 10

// a += 10
// a -= 10
// a /= 10
// a *= 10
// a **= 10
// a %= 10

// console.log(a)

//! Datatype's

//? Number - NaN, String - backtick, Boolean, Object, null, undefined

//? Number

// const num = "10"

// typeof
// console.log(typeof num)

// console.log(typeof Number(num))
// console.log(num)

//? String

// const fName = "Chagan"
// const lName = "Bloger"

//* Backtick

// console.log(`My name is "${fName}"`)

//? Boolean

// const loading = false

// console.log(loading)

//? undefined

// let a;

// a = 10

// console.log(a)

//? null

// const a = null

// console.log(typeof a)

//? object [Array], {Object}

// const frt = ["Apple", "Banana", "Mango", "kiwi"] // Array

// console.log(typeof frt)

// console.log(frt.length)

// console.log(frt[2])

// ----------------------------------------

// const user = { fName: "Chagan", lName: "Bloger", age: 24 } // Object

// console.log(user.age)

// --------------------------------------

// console.log(typeof user)

// console.log(Array.isArray(user))

// --------------------------------------

// const users = [
//   {
//     fullName: {
//       fName: "Chagan",
//       lName: "Bloger"
//     },
//     username: "Chagan123",
//     age: 25
//   },
//   {
//     fullName: {
//       fName: "Magan",
//       lName: "Bloger"
//     },
//     username: "Magan123",
//     age: 27
//   },
//   {
//     fullName: {
//       fName: "Chagan",
//       lName: "Bloger"
//     },
//     username: "Chagan123",
//     age: 25
//   },
//   {
//     fullName: {
//       fName: "Chagan",
//       lName: "Bloger"
//     },
//     username: "Chagan123",
//     age: 25
//   }
// ]

//! Date's (Task) getDate(), setDate()

//! Function - Arrow function

//? Definition of simple function

// const ans = myFunction(10, 5)

// function myFunction(a, b) {
//   const result = a + b

//   return result
// }

// const ans2 = myFunction(100, 50)

// console.log(ans)

//? Definition of arrow function

// console.log(myFunction(5, 10)) // 15

// function myFunction(x, y) {
//   return x + y
// }

// -----------------------

// console.log(myArrowFunction(200, 300))

// const myArrowFunction = (x, y) => {
//   return x + y
// }

//! DOM (Document Object Model)

//? Using function and DOM elements

// function buttonHandler() {
//   const h1 = document.getElementById("mainHeading")

//   // h1.style.backgroundColor = "black"
//   // h1.style.color = "white"

//   // const classAtt = h1.getAttribute("class")
//   // console.log(classAtt) // heading

//   h1.setAttribute("class", "text")
// }

//! Toggle Navigation Bar (https://toggle-navbar-jsmd.netlify.app)

//! Comparison Operators

//? ==, ===, !=, !==, >, < , >= , <=

// console.log(5 == 5) // true
// console.log(5 === "5") // false
// console.log(5 === 6) // false
//
// console.log(5 != 6) // true
// console.log(5 != 5) // false
// console.log(5 !== "5") // true

// console.log(5 < 6) // true
// console.log(5 > 6) // false
// console.log(5 >= 5) // true
// console.log(5 <= 4) // false

//! Logical Operators

//? && (AND), || (OR), ! (NOT)

// console.log(true && false) // false
// console.log(true && true) // true
//
// console.log(true || false) // true
// console.log(true || true) // true
// console.log(false || false) // false
//
// let username;
// console.log(!username) // true
// console.log(username)

//! If else Statement - Ternary Operator

// if (5 == 6) {
//   console.log("5 is equal to 5")
// } else {
//   console.log("5 is not equal to 5")
// }

// if (5 == 6) {
// console.log("If condition")
// } else if (5 != 6) {
// console.log("5 is not equal to 5")
// } else {
// console.log("5 is equal to 5")
// }

//? Ternary Operator

// 5 != 5 ? console.log(true) : console.log(false)

// 5 != 5 ? console.log(true) : 5 == 5 ? console.log("Yes") : console.log("No")

//! BOM (Browser Object Model)

//? setInterval, setTimeout, localStorage

// setInterval(() => { console.log("Hello") }, 1000)

// setTimeout(() => {
//   console.log("Hello Chagan")
// }, 5000)

//? LocalStorage

// localStorage.setItem("Username", "Chagan")
// localStorage.setItem("products", "SmartWatch")

// console.log(localStorage.getItem("products"))

// localStorage.removeItem("products")

// localStorage.clear()

//? localStorage store with object

// const data = [
//   { username: "Chagan" }, { username: "Magan" }
// ]

// localStorage.setItem("localData", JSON.stringify(data))

// const getData = JSON.parse(localStorage.getItem("localData"))
// console.log(getData)

//? json

// const stringifiedData = JSON.stringify(data)
// console.log(stringifiedData)
// const parsedData = JSON.parse(stringifiedData)

// console.log(parsedData)

//! try catch (Error Handling)

// try {
//   throw "Hello World"
// } catch (msg) {
//   console.log(msg)
// }

// const num = 1

// try {
//   eval("console.log('Hello World)")
// } catch (err) {
//   console.log(err.message)
// }

//! Switch Cash

// const date = new Date().getDay()

// switch (date) {
//   case 0:
//     console.log("Sunday")
//     break
//   case 1:
//     console.log("Monday")
//     break
//   case 2:
//     console.log("Tuesday")
//     break
//   case 3:
//     console.log("Wednesday")
//     break
//   case 4:
//     console.log("Thursday")
//     break
//   case 5:
//     console.log("Friday")
//     break
//   case 6:
//     console.log("Saturday")
// }

//! Loops

//? for, for in, for of, while ,do while

//?  map(), forEach()

// const numbers = [1, 2, 3, 4, 5]

// const printer = document.getElementById("printer")

//? map()

// let text = ""

// printer.innerHTML = numbers.map((print) => {
//   return `<p>${print}</p>`
// }).join("")


// numbers.forEach((print) => {
//   text += print
// })

// console.log(typeof text)

//? forEach()

// let text = ""

// numbers.forEach((p) => {
// text += p
// console.log(p)
// })

// printer.innerHTML = text

//? for

// const numbers = ["Chagan", "Magan", "John", "Doe", "Jane"]
// const printer = document.getElementById("printer")

// let text = ""

// for (let i = 0; i < numbers.length; i++) {
//   text += `<p>${numbers[i]}</p>`
// }

// printer.innerHTML = text

//? for in

// const numbers = ["Chagan", "Magan", "John", "Doe", "Jane"]
// const printer = document.getElementById("printer")

// let i = 0
// let text = ""
// for (i in numbers) {
//   text += `<p>${numbers[i]}</p>`
// }

// printer.innerHTML = text

//? for of

// const numbers = ["Chagan", "Magan", "John", "Doe", "Jane"]
// const printer = document.getElementById("printer")

// let i = 0
// let text = ""
// for (i of numbers) {
//   text += `<p>${i}</p>`
// }

// printer.innerHTML = text

//? while
// const numbers = ["Chagan", "Magan", "John", "Doe", "Jane"]
// let i = 0
// let text = ""
// while (i < numbers.length) {
//   text += `<p>${numbers[i]}</p>\n`

//   i++
// }

// console.log(text)

//? do while
// const numbers = ["Chagan", "Magan", "John", "Doe", "Jane"]
// let i = 0

// do {
//   console.log(i)

//   i++
// } while (i > numbers.length)

//! fetch (API Fetching)

//* https://server.jatssdev.com/api/courses
//* https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI
//* https://jsonplaceholder.typicode.com/

// Get, Post, Put, Patch, Delete

// fetch("https://server.jatssdev.com/api/courses").then((x) => x.json()).then((data) => console.log(data))

//? asynchronous function

async function getCoursesData() {
  const getRowData = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
  const data = await getRowData.json()

  console.log(data) // data is the response from the server
}

getCoursesData()

//! Number Method

//! String Method

//! Array Method

//! Match
