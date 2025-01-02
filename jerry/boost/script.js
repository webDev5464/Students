//! Declare and Define variables

//? const and let

// let x = 10

// x = 20

// console.log(x)

//! Blockscope

// const x = 10

// {
//   const y = 50
//   // console.log(x) //
// }

// console.log(y) // Error
// // console.log(x) // 10

//! Assignment Operators
//? +, -, *, /, %, **, ++, --

// const x = 10
// const y = 50

// const a = x + y

// console.log(a) // 60

//! Arithmetic Operators

//? +=, -=, *=, /=, %=, **=

// let a = 10

// a = a + 10
// a += 10

// a++

// console.log(a) // 21

// a--

// console.log(a) // 20

//! Datatypes

/*
  String
  Number
  Boolean
  Null
  Undefined
  Object
  NaN

  // Symbol
  // BigInt

*/

//? String
// const person = "Chagan Chapri"
// const person = 'Chagan Chapri'

//* Backtick
// const person = `Chagan Chapri`

// console.log(typeof person)

// const username = "Chagan"
// const age = 25

// console.log(`My name is ${username}, my age is ${age} year old.`)

//? Number

// const x = "10"

// console.log(typeof Number(x))

// const person = "Chagan"

// NaN ni datatype Number
// console.log(typeof Number(person)) // NaN :- Not a Number

//? Boolean

//* true, false
//* 0 :- false
//* 1 :- true

// console.log(Boolean(1)) // true
// console.log(Boolean(0)) // false

//? null

// const x = null
// console.log(typeof x) // Object

//? Undefined

// let x;
// console.log(typeof x) // undefined

//? Object

//* Array, Object

// const userData = [
//   {
//     username: "Deven",
//     age: 25,
//     petName: ["Chagan", "Dabbo"]
//   },
//   {
//     username: "Megha",
//     age: 25,
//     petName: ["Shemdi", "Dabbi"]
//   },
//   {
//     username: "Jatin",
//     age: 25,
//     petName: ["Magan", "Kalio"]
//   }
// ]

// console.log(typeof userData[1].petName[1])
// console.log(userData[2].age)

//* Most IMP question
// console.log(Array.isArray(userData[0].petName)) // true
// console.log(Array.isArray(userData[0].age)) // false

//! Conditional Operators

//? ==, ===, !, !=, !==, <, >, <=, >=

// const a = 10
// const b = 20
// const c = 10
// const d = "20"
// let e;

// console.log(!e) // true

// console.log(a == b) // false
// console.log(a == c) // true
// console.log(b === d) // false
// console.log(!Number(d)) // false
// console.log(a != c) // false
// console.log(b !== d) // true
// console.log(a < b) // true
// console.log(b > a) // true
// console.log(a <= d) // true

//! Logical Operators

//? &&, ||

// console.log(true || false) // true
// console.log(false || false) // false
// console.log(true || true) // true

// console.log(true && false) // true
// console.log(false && false) // false
// console.log(true && true) // true

// console.log((true || false) && (false || true)) // true
// console.log((true && false) && (false || true)) // false

//! Function and arrow function

// function myJerry(a, b) {
//   // const detail = "Jerry is a good wife"

//   return a + b
// }

// console.log(myJerry(10, 20))

//? Arrow function

// const myDabbo = (a, b) => {
//   // const detail = "Dabbo is a good husband"

//   return a + b
// }

// console.log(myJerry(10, 20))

//? function and arrow function deference

// const data = {
//   fname: "Chagan",
//   lname: "Chapri",
//   age: 25,
//   fullName: function () {
//     return this.fname + " " + this.lname
//   }
// }

// console.log(data.fullName())

// -------------

// const data = {
//   fname: "Chagan",
//   lname: "Chapri",
//   age: 25,
//   fullName: () => {
//     return data.fname + " " + data.lname
//   }
// }

// console.log(data.fullName())