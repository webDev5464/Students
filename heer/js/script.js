// console.log("Hello")

// document.getElementById("heading").innerHTML = "Hello World!"

// function myFunction() {
//   console.log('Hello')
// }

//! variables

// var, const, let

// var a = 10
// const b = 20
// let c = 30

//* Var bug - 1

// var person = "John"

// var person = "Chagan"

// console.log(person) // Chagan

//! const or let

// let x = 10

// console.log(x)

// x = 30

// console.log(x)

// -----------------

// const x = 10

// console.log(x)

// x = 30

// console.log(x)

//! Block-scope

// const person = "Chagan"

// {
//   console.log(50, person)
//   const person = "Magan"
// }

// console.log(54, person)

//! Operators

// const x = 50
// const y = 10

// const x = 5
// const y = 2

//! Arithmetic Operators

// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x ** y)

//! Assignment Operators

// let x = 50
// let y = 10

// x += 10

// console.log(x)

//! Data Types

// const num = "5"

// const condition = null // Object
// const condition = [] // Array :- Datatype: Object
// const condition = {} // Object

// console.log(typeof condition)

// const person = `Chagan
// magan
// john
// ` // back-tick

// console.log(person)

// const person = "Chagan"

// console.log(`Hello ${person}`)

//! Array And Object

// const arr = [1, 2, 3, 4, 5]

// console.log(arr[2])

// const obj = {
//   name: "Magan",
//   age: 25,
//   address: "Kathmandu",
// }

// console.log(obj.age)

// const data = [
//   {
//     name: "Magan",
//     age: 25,
//     address: "Kathmandu",
//   }, {
//     name: "Rohan",
//     age: 30,
//     address: "Pokhara",
//   }, {
//     name: "Sohan",
//     age: 35,
//     address: "Biratnagar",
//   }
// ]

// console.log(data[1].address)


//! function

// const data = "Chagan"

// console.log(myFunction("Chagan"))

// function myFunction(val) {

//   return val
// }


// const data = {
//   fName: "Magan",
//   lName: "Bloger",
//   fullname: function () {
//     return this.fName + ' ' + this.lName
//   }
// }

// console.log(data.fullname())

//? Arrow function

// const ArrowFunction = (a, b) => {
//   return a * b
// }

// console.log(ArrowFunction(5, 50))

// const data = {
//   fName: "Magan",
//   lName: "Bloger",
//   fullname: () => {
//     return this.fName + ' ' + data.lName
//   }
// }

// console.log(data.fullname())

//! Loops

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const person = "Chagan"

//? for loop

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }

// console.log(person.length)

//? for in loop

// let i = 0;

// for (i in fruits) {
//   console.log(fruits[i])
// }

//? for of loop

// for (i of fruits) {
//   console.log(i)
// }

//? while loop

// let i = 0

// while (i > fruits.length) {
//   console.log(i)

//   i++
// }

//? do while loop

// let i = 0

// do {
//   console.log(i)

//   i++
// } while (i > fruits.length)


//? map function // loop

// fruits.map((value, index, arr) => {
//   console.log(arr)
// })


//! Conditional Operator

//? ==, ===, !=, !==, <, >, <=, >=, !

// let username = "Chagan";

// console.log(!username)


// console.log(5 !== "5")

//! Logical Operators

//? ||, &&

//! DOM (Document Object Model)

// const body = document.getElementById("heading")
// body.innerHTML = "Hello Chagan"

// console.log(body.innerHTML)
// console.log(body.getAttribute("id"))

// const pTitle = document.querySelector("p")
// pTitle[2].innerHTML = "Hello"
// console.log(pTitle)


//! BOM (Browser Object Model)

// document.getElementById("myBtn").addEventListener("click", () => console.log("Hello"))

//? setTimeout

// setTimeout(() => { console.log("Hello") }, 5000)

//? setInterval

// setInterval(() => { console.log(window.scrollY) })

//? localStorage

// localStorage.setItem("myData", "THis is my heading")
// localStorage.setItem("data", "THis is my heading")
// localStorage.setItem("my", "THis is my heading")
// localStorage.setItem("lorem", "THis is my heading")

// const data = localStorage.getItem("myData")
// console.log(data)

// localStorage.removeItem("myData")
// localStorage.clear()

// const userdata = [
//   {
//     person: "chagan",
//     age: 25,
//     city: "Tokyo"
//   },
//   {
//     person: "chagan",
//     age: 25,
//     city: "Tokyo"
//   },
//   {
//     person: "chagan",
//     age: 25,
//     city: "Tokyo"
//   }
// ]

// const convertToJson = JSON.stringify(userdata)

// localStorage.setItem("userData", convertToJson)

// const getUserData = localStorage.getItem("userData")
// const convertToObject = JSON.parse(getUserData)

// console.log(convertToObject)

//! try catch

// function myFunction() {
//   try {
//     eval("alert(hello World')")
//   } catch (e) {
//     console.log(e.name)
//   }
// }

// myFunction()

//! fetch API and asynchronous function

// const renderData = document.getElementById("renderData")
// async function fetchingData() {
//   try {
//     const rowData = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const data = await rowData.json()

//     console.log(data)

//     renderData.innerHTML = data.map((value) => {
//       return `<p>${value.title}</p>`
//     }).join("")

//   } catch (err) {
//     console.log(err.name)
//   }
// }

// fetchingData()

//! Array Methods

// const boy = ["boy1", "boy2", "boy3"]
// const girl = ["girl1", "girl2", "girl3"]

// const combined = boy.concat(girl)
// const combined = [...boy, ...girl]
// console.log(combined)

// numbers.push("Hello")
// numbers.unshift("World")

// numbers.shift()
// numbers.pop()

// console.log(numbers.length)

// numbers.splice(1, 1, "New Value")
// console.log(numbers)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort().reverse())

//! String Methods

//! Number Methods