// document.getElementById("heading").innerHTML = "Hello World!"

//! variable's

/*

* let
* const
* var

*/

// const myName = "John"
// let continue = "Magan"
// var myName = "John"
// console.log(continue);


// var myName = "John"

// var myName = "Magan"

// console.log(myName);

//? let and const

// let myName = "John"
// console.log(myName);

// myName = "Chagan"

// const myName = "John"

// myName = "Chagan"

// console.log(myName);

//! blockScope

// let myName = "John"

// {

//   let myName = "Chagan"
//   console.log(myName);
// }

/* var x = 5

{
  var x = 10
}

console.log(x); */

//! DataTypes

/*
   Number
   NaN
   String
   Boolean
   Object
   undefined
   null
  // Symbol
  // BigInt
*/

// typeof operator :- for check datatype

//? Number

// let num = 5

// let num = 5.595

// let isNotNumber = NaN

// console.log(typeof isNotNumber);

// console.log(typeof num);

//? String

// let str = "Hello \
// chagan"
// let str = 'Hello \'Chagan\''

// console.log(str);

// let str = 'Hello'

// let str = `Hello`

//   lorem
//   asdasd
//   asdasd
//   asdasd

// `

// console.log(typeof str);


// let user = "Chagan"
// let person = `Hello, ${user}`

// console.log(person);

//? boolean

// let isAdmin = true // 1
// let isAdmin = false // 0

// console.log(isAdmin);
// console.log(Number(isAdmin));

//? object

//* Array, null, object

// Array
// const frt = ["Orange", "Apple", "Banana", "Mango"]
// index = start with 0

// console.log(frt[1]);
// console.log(frt.length);
// console.log(typeof frt);

// console.log(Array.isArray(frt));



// object

// const person = { key: "Value" }

// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 29
// }

// console.log(typeof person);
// console.log(person.fname + " " + person.lname);

// null

// const myValue = null
// console.log(typeof myValue);

//? undefined

// let myValue
// console.log(typeof myValue);

//! function and arrow function

//? regular function

// function MyFunction() {
//   console.log("Hello World!");
// }

// MyFunction()



// function Calculator() {
//   return "Hello World!"
// }

// console.log(Calculator());



// function Calculator(price, qty) {
//   return price * qty
// }

// console.log(Calculator(999, 4));


//? arrow function

// const Calculator = () => {
//   return "Hello World!"
// }

// console.log(Calculator());



// const Calculator = (price, qty) => {
//   return price * qty
// }

// console.log(Calculator(599, 6));


// const myFunction = () => {
//   return "Hello World!"
// }

// console.log(myFunction());


// console.log(fun());

// function fun() {
//   return "Hello World!"
// }


// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 27,
//   fullName: function () {
//     return this.fname + " " + this.lname;
//   }
// }



// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 27,
//   fullName: () => {
//     return person.fname + " " + person.lname;
//   }
// }

// console.log(person.fullName());

//! if else statement and else if

// if (10 == 10) {
//   console.log("true");
// } else {
//   console.log('false');
// }


// if (10 === "10") {
//   console.log("true");
// } else if (10 !== "10") {
//   console.log("10 not match");
// } else {
//   console.log("false");
// }

//! ternary Operator

// console.log(5 == 5 ? true : false);

// 5 != "5" ? console.log("true") : 5 != "5" ? console.log("second Condition true") : console.log(false)

//! Conditional Operators

// == (only check value)
// console.log(5 == '5' ? true : false);

// === (check value and datatype)
// console.log(5 === '5' ? true : false);

// != (only check value)
// console.log(5 != 5 ? true : false);

// !== (check value and datatype)
// console.log(5 !== '5' ? true : false);

// <
// console.log(5 < 6 ? true : false);

// >
// console.log(5 > 6 ? true : false);

// <=
// console.log(4 <= 5 ? true : false);

// >=
// console.log(6 >= 5 ? true : false);

//! logical operators

// &&
// console.log(5 == 5 && 5 == 6);

// ||
// console.log(5 == 6 || 5 == 7);

// !

// let text = 5
// console.log(!Number(text));
