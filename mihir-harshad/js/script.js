//! What is variable

//* type's of variable

/*
  var, const, let
*/

// var harshad = "My Friend"
// let harshad = "My Friend"
// const harshad = "My Friend"

// document.getElementById("myId").innerHTML = harshad
// console.log(harshad)

//* do not use var : reason one
// var x = 5

// var x = 9

// console.log(x)

//* const & let

// let x = 5

// console.log(x);

// x = 10 //? update

// console.log(x);


// const person = "Chagan"

// person = "Magan"

// console.log(person);

//-----------------------

// const y = 10

// y = 20

// console.log(y); //! not update

//! BlockScope

// const x = 5

// {
//   console.log(x);
//   const y = 7
// }

// ------------------

// const x = 9

// {
//   console.log(x);
//   const _x = 5
// }

// console.log(_x);

//! Arithmetic Operators
// let x = 5
// console.log(x + 5);
// console.log(x - 3);
// console.log(x * 3);
// console.log(x / 3);
// console.log(x % 3);

// x++
// console.log(--x);

// console.log(5 ** 2);

//! Assignment Operators

// let a = 10;
// a += 30
// a -= 30
// a *= 30
// a /= 30
// a %= 30
// console.log(a);

//! Datatype

/* String, Number, Object - Array - Date, Boolean, null, undefine, NaN */

// const person = "Chagan" // String
// const rollNumber = "5" // String
// const contactNumber = 5 // Number

//* Object

// const language = ["HTML", "CSS", "Js", "React js", 5, 32, 6] // Object - Array
// console.log(language[0]);
//? console.log(Array.isArray(language)); // true or false

// const users = {
//   fName: "Chagan",
//   lName: "Chapri",
//   age: 16
// } // Object

// console.log(users.fName + " " + users.lName);

// const todayDate = new Date(); // Date
// console.log(todayDate)

//* Boolean

// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

//* Null & Undefined

// console.log(typeof null) // Object

// let c
// console.log(typeof c);

//* NaN

// console.log(typeof NaN); // Not a Number

//! Function, Arrow Function

// function myFunction() {
//   console.log("Hello World");

//   function nestingFunction() {
//     console.log("This is a nesting function");
//   }

//   nestingFunction()
// }

// myFunction()

// function cal() {
//   return "Hello World!"
// }

// document.getElementById("myId").innerHTML = cal()

// function calculation(p1, p2) {
//   return p1 + p2
// }

// console.log(calculation("World", "Hello"));

// console.log(myArrow());

// const myArrow = () => {
//   return "I am an arrow function"
// }

// const person = {
//   fname: "Chagan",
//   lname: "chatriWala",
//   fullname: function () {
//     return this.fname + " " + this.lname
//   }
// }

// console.log(person.fullname());

//! if else & else if statement, ternary operator

// if (5 != "5") {
//   console.log("Condition is true")
// } else if (4 >= 5) {
//   console.log("Second Condition is true")
// } else {
//   console.log("False");
// }

// console.log(a == b ? true : false);

// function checking(a, b) {
//   return a == b ? true : false
// }

// console.log(checking(10, 10));

/*
  ==
  ===
  !=
  !==
  <
  >
  <=
  >=
  &&
  ||
  !value
*/

//TODO :- Try & catch, finally
//TODO :- Switch
//TODO :- loops
//TODO :- Date
//TODO :- async & await
//TODO :- fetch API
//TODO :- localStorage, setTimeout, setInterval