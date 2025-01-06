//! Introduction To JavaScript

// function showHeading() {
//   // document.getElementById("heading").style = "display: block;"
//   console.log("Hello World")
// }

// showHeading()



//! Variable declaration

// Es6 > ; not required

// const age = 25; //* declare

// const switch = "Chagan" //* Error
// console.log(switch)

// const chaganAge = 25 //* Camel Case

// console.log(age) //* define



//! types of variables

// var, const, let

//? Issue: 1

// var x = 5

// var x = 10

// console.log(x) // 10

//? let and const

//* let

// let a, b, c // declare

// a = 5
// b = 10

// c = a + b

// console.log(c) // 15

// let person = 'Magan' // define

// person = 'chagan' // update

// console.log(person) // declare

//* const

// const person = 'Magan' // define

// person = 'chagan' // update

// console.log(person) // declare



//! Block-scope {}

// const person = 'Magan'

// {
//   console.log(person) // Magan
//   const personOne = 'chagan'

// }

// console.log(personOne) // Error



//! Operators

// const age = 25

// const person = 5

// const totalPerson = age - person

// console.log(totalPerson) // 20

//? Types :- =, +, -



//! Arithmetic Operators

//? +, -, *, /, **, %, ++, --

// const a = 50
// const b = 2

// console.log(a ** b) // 1


// ++ (Increment)
// -- (Decrement)

// let age = 5

// age--

// console.log(age) // 6



//! Assignment Operators

//? +=, -=, /=, *=, %=, **=

// let a = 5

// a = a + 15

// a += 15
// a -= 15
// a /= 15

// console.log(a) // 20



//! Datatypes (Most IMP)

/*
  ? types :-

  string
  number
  boolean
  undefined
  null
  object
  // symbol
  // bigint
*/

// const person = "Megha" // Datatype:- String
// const age = "25" // Datatype:- String


// const result = 5 + "5" + 10

// console.log(result)

//? backtick

// const age = 20

// const x = `Chagan chapri, my age is ${age}`

// console.log(x)

//? number

// const age = 25 // Datatype:- Number

// const isAdmin = true // Datatype:- Boolean
// const isAdmin = false // Datatype:- Boolean

// let who = undefined // Datatype:- undefined
// let who // Datatype:- undefined

// console.log(who) // undefined

// let magan = null // Datatype:- Object
// console.log(magan)

//? Object and Array

//* Array

// const users = ["Magan", "Chagan", "Dabbo"] // Array
// console.log(typeof users) // Object

// const users = [1, 2, 3, 4, 5] // Array
// const users = [1, "Chagan", "Magan", 5] // Array

// const data = [1, 5, 3, 6]
// console.log(Array.isArray(data)) // true

//* Object

// const data = { userOne: "Magan", userTwo: "Chagan" }

// console.log(data.userTwo) // Object

//* Array with Object

// const data = [
//   { username: 'Chagan', pass: '12345', age: 23 },
//   { username: 'Magan', pass: 'asdasd', age: 19 },
//   { username: 'Dabbo', pass: '41945464', age: 23 }
// ]

// console.log(data[2])

//* Object with array

// const personData = {
//   personName: "Dabbo",
//   mavaTime: [10, 2, 7, 10]
// }

//? typeof

// const person = null
// console.log(typeof person) // Object



//! Conditional Operators

//? ==, ===, <, >, <=, >=, ! (not), !=, !==

// let a = 5
// let b = "5"
// let c = 10

/* == matlab value check karse. */
// console.log(a == b) // true

/* === value and datatype check karse. */
// console.log(a === b) // false

// console.log(c < a) // false
// console.log(c > a) // false

// console.log(c <= a) // false
// console.log(a >= c) // false

// let username;
// console.log(!username) // true

//? !, !=, !==

// let a = 5
// let b = 10
// let c = "5"

// console.log(a != b) // true

// console.log(a !== c) // true



//! Logical Operators

//? || (or), && (And)

// let a = true
// let b = false
// let c = true

// console.log(a && c) // true
// console.log(a || b) // true

//? -------- Test --------

// let a = 10
// let b = 20
// let c = 10
// let d = 30
// let e = "10"
// let f = "30"
// let g = "20"

// console.log(a != b && c <= a) // true
// console.log(1, d === f || a >= b) // true :- Wrong
// console.log(2, e == a || b == g)  // true
// console.log(3, a == c && c !== e || b < a) // true



//! functions and Arrow function

//? Regular function

// function functionName() {
//   const person = "Chagan"

//   console.log("Hello, I am " + person)
// }

// functionName() // Jo tmare function ne run karvu hoy to function ne call kravu zaruri che.

//? ----------- Parameter and argument --------------


// function meghDevlo(a, b) {
//   console.log(a + b)
// }

// meghDevlo("Hello", "World")
// meghDevlo(50, 10)
// meghDevlo(5, 10)

//? ----------- return --------------

//? Ex:- 1

// function cal(username) {
//   console.log("Magan")

//   return username
// }

// cal("Chagan")

//? Ex:- 2

// const x = 20

// function cal() {
//   const x = 10

//   return x
// }

// console.log(x)
// console.log(cal())

// console.log(Boolean(0)) // false

//? --------------- Arrow function ---------------

// const myFunction = (val1, val2) => {
//   return val1 + val2
// }

// console.log(myFunction(10, 5)) // 15

//? --------------- What is deference regular function and arrow function ---------------

//* Regular function
// const user = {
//   fname: "Chagan",
//   lname: "Chapri",
//   age: 20,
//   fullName: function () {
//     return `${this.fname} ${this.lname}`
//   }
// }

// console.log(user.fullName())

// console.log(user.fname + ' ' + user.lname)
// console.log(`${user.fname} ${user.lname}`)



//* Arrow function
// const user = {
//   fname: "Chagan",
//   lname: "Chapri",
//   age: 20,
//   fullName: () => {
//     return `${user.fname} ${user.lname}`
//   }
// }

// console.log(user.fullName())


//! If else statement and ternary Operator

// if (5 == 5) {
//   console.log("Hello World!")
// } else {
//   console.log("Condition is false")
// }

// if (15 < 10) {
//   console.log("If condition is true")
// } else if (15 == 25) {
//   console.log("if else condition is true")
// } else {
//   console.log("else condition")
// }

//? ternary operator

// const testing = 5 == 6 ? "Hello World!" : "Somethings wrong"

// console.log(testing)

// const testingTwo = 5 == 6 ? "Hello world!" : 5 == 5 ? "Chagan" : "Magan"

// console.log(testingTwo)

// console.log(5 == 6 ? "Hello world!" : 5 === "5" ? "Chagan" : "Magan")


//! DOM (Document Object Model)

//? getElementsByTagName
// const element = document.getElementsByTagName("h1")
// console.log(element)

//? getElementById, innerHTML, innerText
// const element = document.getElementById("jerry")
// console.log(element)
// element.innerText = "I Love You Jerry Darling"
// element.innerHTML = "<span>Jerry</span>"
// element.style = "color: red; font-size: 50px;"

//? getElementsByClassName
// const element2 = document.getElementsByClassName("dabbo")
// console.log(element2)

//? getAttribute, setAttribute
// const element = document.getElementById("mainHeading")
// element.setAttribute("class", "dabbo")
// const getAttribute = element.getAttribute("class")
// console.log(getAttribute)

//? querySelectorAll, querySelector

// const element = document.querySelector("h1")
// const element = document.querySelectorAll("h1")

// const element = document.querySelector("#jerry")
// const element = document.querySelectorAll(".dabbo")

// console.log(element)

//? object length
// const obj = [1, 2, 4, 7, 5, 3, 5]
// console.log(obj.length)
// console.log(obj[2])

//! BOM (Browser Object Model)

//? setTimeout
// setTimeout(() => {
//   console.log("Hello")
// }, 5000)

//? setInterval
// setInterval(() => {
//   console.log("setInterval")
// }, 5000)

//? window

// setInterval(() => {
//   console.log(window.scrollY >= 500)
// })

// const bodyElement = document.getElementsByTagName("body")[0]
// setInterval(() => {
//   if (window.scrollY >= 500) {
//     bodyElement.style = "background-color: black; color: white;"
//   } else {
//     bodyElement.style = "background-color: white; color: black;"
//   }
// })

//? localStorage

// localStorage.setItem("myData", "My wife is jerry")
// const data = localStorage.getItem("myData")
// console.log(data)
// document.getElementById("print").innerHTML = data

// localStorage.removeItem("myData")
// localStorage.clear()


//? store object data in localStorage

// const userData = [
//   {
//     id: 1,
//     name: "John",
//     age: 25,
//   },
//   {
//     id: 2,
//     name: "Jane",
//     age: 30,
//   },
//   {
//     id: 3,
//     name: "Bob",
//     age: 35,
//   }
// ]

// const objToJson = JSON.stringify(userData) // convert object to json
// localStorage.setItem("jerryData", objToJson)
// localStorage.setItem("jerryData", JSON.stringify(userData))

// const getData = localStorage.getItem("jerryData")
// const jsonToObj = JSON.parse(getData) // convert json to object

// console.log(jsonToObj)

//! JSON
//? Complete

// const userData = [
//   {
//     id: 1,
//     name: "John",
//     age: 25,
//   },
//   {
//     id: 2,
//     name: "Jane",
//     age: 30,
//   },
//   {
//     id: 3,
//     name: "Bob",
//     age: 35,
//   }
// ]

// const jsonUserData = JSON.stringify(userData) //? convert to json

//! Loops



//! Fetch API



//! Error Handling (try catch)



//! Practical Task

//? Rendering Data
//? ThemeChanger with local storage
//? Responsive Navigation




//! String Methods



//! Number Methods



//! Array Methods



//! Date



//! Switch cash


