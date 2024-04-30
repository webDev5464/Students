//! ------------ Introduction -------------

// document.getElementById("heading").innerHTML = "Hello World!"
// document.getElementById("headingTwo").innerHTML = "Hello Magan!"

// const headingTwo = document.getElementById("headingTwo")

// headingTwo.innerHTML = "Hello World!"

// const myName = "Magan"
// console.log(myName);

/*

This is a Comment

multiple line

*/

// single line comment

//! Variables

//* variable declaration
// const myName = "Magan"

//* type's of variable

/*
  var, const, let
*/

// const myName = "Magan"
// let myName = "Magan"
// var myName = "Magan"

//* do not use var. reason : 1
// var myName = "chagan"
// var myName = "magan"

// console.log(myName);

//* const and let

// let myName = "Magan"

// myName = "chagan"

// console.log(myName);



// const myName = "Chagan"

// myName = "Magan"

// console.log(myName);



//! blockScope

// let myName = "Chagan"

// {

//   console.log(myName);
//   let person = "Magan"

// }

//* do not use var. reason : 2

// var num = 5

// {

//   var num = 9

// }

// console.log(num);

//! Data Types

/*
  * string
  * number
  * boolean
  * undefined
  * null
  * object
  // bigint
  // symbol
*/

//? typeof operator :- check the data type of a variable

// console.log(typeof(myName));

//? Primitive Data Types

//* String

// const myName = "John Doe"
// const myName = 'John Doe'
// const myName = "My Name is \"John Doe\""
// const myName = "My Name is \
//  'John Doe'"
// console.log(myName);

// const myName = "Brijesh"
// console.log(myName.length)

//* Number

// const rollNum = -7.5
// console.log(rollNum);

//* boolean

// const isRaining = true // 1
// const isRaining = false // 0
// console.log(Number(isRaining));

//* undefined

// let myName;

// console.log(typeof myName);

//* null

// const users = null

// console.log(users);

//* object

//? object
//? array
//? null
//? Date() // Object

//* object

// const obj = {
//   key: "value",
//   keyTwo: "Value Two"
// }

// console.log(obj.key);

// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 24
// }

// console.log(person.fname, person.lname);

// document.getElementById("heading").innerHTML = person.fname + " " + person.lname

//* Array

// const frt = ["Apple", "Banana", "Mango", "Kiwi", "Orange"]

// console.log(frt[2]);

// console.log(Array.isArray(frt)); // true

//! function, arrow function

// function MyFunction() {
//   // document.getElementById("heading").innerHTML = "Hello World!"
//   document.getElementById("heading").style.display = "none"
// }

// function Addition() {
//   return "Hello"
//   // console.log("Hello");
// }

// Addition()
// console.log(Addition());

// function Addition(price, qty) {
//   return price * qty
// }

// console.log(Addition(499, 4));

// const myFunction = (price, qty) => {
//   return price * qty
// }

// console.log(myFunction(999, 2));