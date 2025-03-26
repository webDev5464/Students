// document.getElementsByTagName("h1")[0].innerHTML = "hello"

// document.getElementById("myId").innerText = "<a href=''>Hello World!</a>"

// console.log(document.getElementsByTagName("h1"))

// console.log("Hello Chagan")

//! Variables

//? var, let, const

// var variableName = "Value"
// console.log(variableName)

// const num = 5
// console.log(num)

// var name = "Chagan"

// var name = "magan"

// console.log(name) // magan

// let val = 5

// const val = 6

// console.log(val)

//? let and const

// let num = 5

// console.log(num) // 5
// num = 10


// console.log(num) // 10

//! Block scope

// let num = 5
// let b = 50

// {
//   let num = 10
//   let a = 20
//   console.log(b)
//   // console.log(num) // 10
// }


// let a = 10
// let b = 40

// {
//   console.log(a) // 10
//   let b = 20
//   let a = 50
//   console.log(b) // 20
// }

// console.log(b) // 40

//* var

// var a = 10

// {
//   console.log(a) // 10
//   var a = 20
// }

// console.log(a) // 20

// let a = 10; let b = 20; let c = 30; let d = 40;

//! Operators

// let a = 10

// console.log(a + 10)
// console.log(a - 10)
// console.log(a / 10)
// console.log(a * 10)
// console.log(a % 10)
// console.log(a ** 10)

// a++

// a = a + 20

// a += 10

// console.log(a)

//! Data types

//? string

// let person = "John 'Doe'"

// console.log(person)

// let a = 10
// let b = "50"

// console.log(a + b + 10 + 10)

// let a = "10"

// let b = Number(a)

// let c = toString(b)

// console.log(b)

// console.log(typeof NaN)

// let a = undefined

// console.log(typeof typeof a)

// let a = null

// console.log(typeof a)

// let a = "Chagan"
// let b = Number(a)
// console.log(b)

//? Object

// const b = [{}, {}, {}]
// const b = ["", "", ""]
// const b = [1, {}, ""]

// console.log(b[2])

// const b = [1, 2, 3, 4, 5]
// const a = {
//   fName: "Chagan",
//   lName: "Chapri",
//   username: "chagan123"
// }

// console.log(Array.isArray(a))

// console.log(a.username)

//! Function

// const username = "magan"

// console.log(`My name is ${username}`)


//? regular function
// myFunction(50, 100)

// function myFunction(age) {
//   const username = "Chagan"

//   return {
//     username: username,
//     age: age
//   }
// }

// console.log(myFunction(23).age)


//? Arrow function

// const addition = (a, b) => {
//   return a + b
// }

// console.log(addition(10, 20))

//? difference between regular function and arrow function

// function myFunction() {

//   return {
//     lname: "Chagan",
//     fname: "Chapri",
//     fullName: function () {
//       return this.lname + this.fname
//     }
//   }
// }

// console.log(myFunction().fullName())

// const myFunction = () => {

//   return {
//     lname: "Chagan",
//     fname: "Chapri",
//     fullName: () => {
//       return this.lname + this.fname
//     }
//   }
// }

// console.log(myFunction().fullName())

//! Date

// const date = Date.now()
// date.setDate(12)
// console.log(date.getDate(), date.getMinutes())
// console.log(date)

//! if else statement or ternary operator

//? condition operators
// ==, ===, !=, !==, >, <, >=, <=

// console.log(10 == 10)
// console.log("10" === "10")

// console.log(10 != 10)
// console.log(10 !== "10")

// console.log(10 < 10)
// console.log(10 >= 20)

//? Logical Operators
// &&, ||, !

// console.log(true || true)
// console.log(true && true)

// let a = "magan"
// console.log(!a)

// const a = 10 > 5 && 10 < 15
// console.log(!a)
// console.log(10 > 5 || 10 < 15)

// if (5 === "5") {
//   console.log(true)
// } else if (4 < 5) {
//   console.log("Yes 4 < 5")
// }
// else {
//   console.log(false)
// }

//? Ternary Operator

// 5 == 5 ? true : false

//! loop

// for, while, do while, for of, for in, for each, map, forEach

//! try catch

// let a;

// try {
//   if (!a) {
//     throw new Error("Somethings wrong")
//   }
// } catch (err) {
//   console.log(err.message);
// }


//! switch case

//! fetch method or async await

//! Object Method

//! String Method

//! Number Method

const navigation = [
  "home", { page: "About", children: ["About us", "Our team"] }, "contact"
]