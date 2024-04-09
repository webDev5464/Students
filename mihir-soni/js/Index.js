//! Variable

/*
  var, const, let
*/

// var x = 6
// var x = 10
// console.log(x);

// var x = 10
// var x = 15
// console.log(x);

//? let - (lateral)
// let x = 10

// x = 15

// console.log(x);

//? const - (constant)
// const y = 20

// y = 50

// console.log(y);

//! blockScope

// const chagan = "Magan"

{
  // console.log(chagan)
  // const chagan = "Chapri"
}

//! Datatype

//? How to check datatype :- typeof <value>

// const title = "Hello World!" // string
//
// const rollNumber = 7 // number
// const unknownNumber = NaN // NaN :- Not a Number , Datatype :- Number
//
// const person = ["Chagan", "Magan", "John", "Smith"] // Array
//
// const user = {
// fname: "Chagan",
// lname: "Magan",
// age: 34
// } // Object
//
// const isAuth = true // boolean :- 1
// const admin = false // boolean :- 0
//
// let notValue; // undefined
//
// const nullValue = null // Object

// const con = "5"
// const non = 5

// console.log(con + "non");

//! Array Method

const person = ["Chagan", "Magan", "John", "Smith"]

person.pop()
person.push("Tom")
person.shift()
person.unshift("Alice")

person.splice()

console.log(person);

//! Object Method