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