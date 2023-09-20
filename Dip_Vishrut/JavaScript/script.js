//! Type's Of Variable

// let
// const
// var

//! Debuting

// console.log("Hello")

//! How to declare variable

// let magan = "my name is magan.";

// const myAge = 22;

// var fullName = "Magan Chapri";

// document.getElementById("demo").innerHTML = fullName;

// console.log(magan + " " + myAge);

// console.log("My Full Name " + fullName);

// let x, y;

// x = 5;
// y = 7;

// console.log(x - y);

//! Variable Name

// let myName = "John" // True
// let _myName = "Doe" // true
// let $myName = "Smith" // true
// let myAge_22 = 22 // true

// let my name = "lol" // false
// let 1age = 22 // false
// let %asd = 22 // false

// ++++++++++++++++++++++++++++++++++++++++++++++++++

//? 1. Problem (Not use var)
// var myName = "John"
// John

// var myName = "Doe"
// Doe

//! Block Scope

// let x = 5;
// 5

{
  // let x = 10;
  // 10
}

// 5

{
  // let x = 20
  // 20
}

// 5

// ------------

// const y = 10

{
  // const y = 50
  // 50
}

// 10

// -----------

// var z = 9
// console.log(z);
// 9

{
  // console.log(z);
  // 9
  // var z = 6
  // console.log(z);
  // 6
}

// console.log(z);
// 6

// var z = 999
// console.log(z);
// 999

// using const

//? ++++++++++++ Type of Operators ++++++++++++

// {
//   let x = 5;
//   let y = 7;
//   let z = x + y;
//   console.log(z);
// }

// {
//   let x = 5;
//   let y = 7;
//   let z = x - y;
//   console.log(z);
// }

// {
//   let x = 5;
//   let y = 7;
//   let z = x * y;
//   console.log(z);
// }

// {
//   let x = 5;
//   let y = 7;
//   let z = x / y;
//   console.log(z);
// }

// {
//   let x = 5;
//   let y = 2;
//   let z = y ** x;
//   console.log(z);
// }

// {
//   let x = 6;
//   let y = 2;
//   let z = x % y;
//   console.log(z);
// }

// {
// let x = 5;
// console.log(x);

//   x++;
//   console.log(x);

// x *= 10
// console.log(x);

//   x++;
//   console.log(x);
// }

// {
//   let x = 5;

//   x--;

//   console.log(x);
// }

//? ++++++++ Data Type's ++++++++++

//! String

// {
// let myName = "John Doe"
// console.log(myName);

// let x = 'My Name is "John"';
// console.log(x);

// let y = "let's play pubg";

// let x = 'let\'\s Go'
// console.log(x);

// let x = "5";
// let y = "5";
// console.log(typeof x);

// let z = x + y;
// console.log(z);
// }

//! Number

// {
//   let x = 5;
//   console.log(typeof x + " " + x);
// }

// {
//   let x = true;
//   let y = false;

//   console.log(x + " " + x);
//   console.log(y + " " + y);
// }

//! Undefined

// {
//   let x;
// let y = "";
//   console.log(typeof x);
// }

//! Object

// {
//* -------- Object ------------
// let person = { FirstName: "John", LastName: "Doe", age: 22 };

// console.log(person);
// let personDetail = person.FirstName + " " + person.LastName;
// personDetail = "My name is" + " " + personDetail;
// console.log(personDetail + ". My age is " + person.age);

// console.log(typeof person);

//* ----------- Array ------------
// let x = ["Dip", "Vishrut", "Jigar", "Deven"];
// console.log(x[0], x[2]);
// console.log(typeof x);

//* ---------- Date --------------
// let myDate = new Date();
// console.log(myDate);
// }

//? +++++++++ Function +++++++++++

// let demo = document.getElementById("demo");

// demo.innerHTML = 0;

// function addition() {
//   demo.innerHTML++;
// }

// function decrement() {
//   demo.innerHTML--;
// }

// let condition = false;

// function theme() {
//   if (!condition) {
//     condition = true;
//     demo.style.backgroundColor = "black";
//     demo.style.color = "white";
//   } else {
//     condition = false;
//     demo.style.backgroundColor = "white";
//     demo.style.color = "black";
//   }
// }

// let age = 61;

// const person = () => {
//   if (age < 18) {
//     demo.innerHTML = "To small";
//   } else if (age <= 60) {
//     demo.innerHTML = "perfect age";
//   } else {
//     demo.innerHTML = "to big";
//   }
// };

