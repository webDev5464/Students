//? Types of Variable

// let
// const
// var

//? how to use variables

// let myVariable = "Hello World!";
// console.log(myVariable);

// let age = 27;
// console.log(age);
// document.getElementById("demo").innerHTML = myVariable;

//? What is use variables

//* let type variable updated
// let x = 5;
// console.log(x);

//* x is updated
// x = 9;
// console.log(x);

//* const is Constant
// const y = 8
// console.log(y);

// y = 12
// console.log(y);

//* var

// var a = 5

// console.log(a);

// var a = 6
// a = 12
// console.log(a);

//! variable name

//* Valid
// let x = 5
// let $x = 8
// let $$$$x = 1
// let _x = "Hello"
// let $x_ = 12
// let x1 = "x1"

//* invalid
// let 1x = 0
// let for = 2
// let else = 2
// let function = 12

//! Block Scope

//* let

// let y = 5; // 5

// {
//   let y = 12; // 12
//   console.log(y);
// }

// console.log(y); // 5

//* const

// const x = "Hello";

// {
//   const x = "World!";
//   console.log(x);
// }

// console.log(x);

//* var

// var a = 10; // 10

// {
//   var a = 20; // 20
// }

// console.log(a); // 20

//! Data Types

// let text = "Hello World"; // String
// console.log(typeof text);

// let num = 25; // Number
// console.log(typeof num);

// let nameAge = "John is 22 year old"; // 22 is not a number is string.
// console.log(typeof nameAge);

// let bully = true; // boolean
// let wrongBully = false; // boolean
// console.log(typeof bully);

/*
value of true : 1
value of false : 0 
*/

// console.log(Number(bully));
// console.log(Number(wrongBully));

// let x = null; // Object
// console.log(typeof x);

// let y = undefined; // undefined
// console.log(typeof y);

// let numm = NaN; // number
// // Not a Number

// console.log(typeof numm);

//* Object

/*
Multiple value store in object
*/

//* Array
// const num = [4, 5, 1, 9, 7, "Hello"];

// const language = ["HTML", "CSS", "JavaScript"];
// console.log(language);
// console.log(language[0]); // HTML
// console.log(language[2]); // JavaScript

// console.log(typeof language);
// console.log(Array.isArray(language));

//* Object

// const person = { fName: "John", lName: "Doe", age: 22 };
// console.log(typeof person);

// console.log(person.fName + person.lName);
