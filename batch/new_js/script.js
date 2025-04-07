// var heading = document.getElementById("myHeading")

//! Variables
//? var, const, let

// let myRollNum = 10
// heading.innerHTML = myRollNum

// console.log(myRollNum)

//! var

// var x = 10

// var x = 20

// console.log(x) // 20

//! let, const

// let a = "Magan"
// console.log(a)

// const ab = "Chagan"

// console.log(a)

// const x = 5

// console.log(x) // 5

// x = 10

// console.log(x) // 10


//! Block scope

// const x = 10

// {
//   console.log(x)
//   let y = 20
//   console.log(y)
// }

//! Operators

// let x = 10

// let y = 20

// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x ** 2)
// console.log(5 % 2)

// x = x + 10

// x += 10

// console.log(x)

//! Datatypes

//? String

// const username = 'My name is "Chagan"'
// const name = "chagan"

// console.log(`My name is ${name}`)

// console.log( username)

//? Number

// let x = "Chagan"

// x = Number(x)

// console.log(typeof x)

//? Undefine

// let a;

// console.log(typeof typeof a)

//? null

// const x = null
// console.log(typeof x)

//? Object

// const users = ["Chagan", "Magan", "john"]

// console.log(users[0])
// console.log(users.length)
// console.log(typeof users)
// console.log(Array.isArray(userData))

// const userData = {
//   name: "Chagan",
//   age: 25
// }

// console.log(`My name is ${userData.name}. I am ${userData.age} years old.`)
// console.log(typeof userData)

// -------------------------

// const users = [
//   { name: "Chagan", age: 25 },
//   { name: "Magan", age: 30 },
//   { name: "John", age: 35 }
// ]

// const user = {
//   fname: "Chagan",
//   x: [1, 2, 3, 4]
// }

//! function

// console.log(sayHello(40, 60))

// function sayHello(a, b) {
//   return a + b
// }

// console.log(sayHello(20, 100))

//-----------------------------------------

// console.log(sayHello(10, 40))

// const sayHello = (a, b) => {
//   return a + b
// }

// ------------------------------------------


// const user = {
//   fname: "Chagan",
//   lname: "Chapri",
//   fullName: () => {
//     return this.fname + " " + this.lname
//   }
// }

// console.log(user.fullName())

// const myHeading = document.getElementById("myHeading")
// myHeading.innerHTML = sayHello(40, 60)

//! Comparison Operators
//? ==, ===, !=, !==, >, <, >=, <=

// console.log(5 == 6) // false
// console.log(5 == 5) // true

// console.log(5 == "5") // true
// console.log(5 === "5") // false
// console.log("5" === "5") // true

// console.log(5 != 6) // true
// console.log(5 != 5) // true

// console.log(5 !== "5") // true
// console.log(5 !== 5) // false

// console.log(7 > 6) // true
// console.log(6 > 6) // false
// console.log(5 < 4) // false

// console.log(6 >= 6) // true
// console.log(8 <= 6) // false

//! Logical Operators
//? &&, ||, !

// console.log(5 == 5 && 5 == 6)
// console.log(5 == 5 || 5 == 6)

// let username = "Chagan"

// console.log(!username)

//! if else and ternary Operators

// if (5 == 6) {
//   console.log("Yes")
// } else {
//   console.log("No")
// }

// ------------

// if (5 < 4) {
//   console.log("If Condition")
// } else if (5 == 5) {
//   console.log("Else if Condition")
// } else {
//   console.log("Else")
// }

// -----------

// console.log(5 == 5 ? "Yes" : "No") // Yes
// console.log(5 == 6 ? "yes" : 5 == 5 ? "no" : "maybe")

//! try catch, finally


