"use strict";

//! ++++++++ Type of Variable's +++++++++
// document.getElementById("secondDemo").innerHTML = "Hello World!"
// let x = "John";
// const y = "Doe";
// var z = 26;
// document.getElementById("demo").innerHTML = x + " " + y;
// let fullName = x + " " + y;
// document.getElementById("demo").innerHTML = fullName + "<br>" + "My Age is " + z;
//! ++++++++ Block Scope +++++++++
// let x = "Hello";
// let x = "Doe";
// console.log(x);
//? ====================

/**
 ** let or const follow block scope rule.
 ** Jobhi variable hum block scope me add karenge vo sirf block scope tak simit rahegi.
 ** Block scope ke bahar define ki hue value hum bahar hi define karenge.
 */
// let x = 5;
// {
//   let x = 7;
//   console.log(x);
// 7
// }
// {
//   let x = "Hello World!";
//   console.log(x);
// Hello World!
// }
// console.log(x);
// 5
//? ======================
// const y = 5;
// {
//   const y = 7;
//   console.log(y);
// 7
// }
// console.log(y);
// 5
//? ======================

/** Kyu var ka use nahi karenge ?
 ** same variable name not throw error.
 ** can not follow block scope.
 */
// var x = 2;
// console.log(x);
// {
//   var x = 5;
// }
// console.log(x);
//! ++++++++++++ Hot wo define same name variable  ++++++++++++
// let x = 5;
// let _x = 10;
// let __x = 15;
// let ___x = 43;
// let $x = "Hello";
// let $$x = "Doe!";
// let x1 = "Right";
// let #x = "Error"  //* Not valid
// let 3x = "Error"  //* Not valid
// let &1 = "Error"  //* Not valid
// let function = "hello"   //* Not valid
// let var = 404    //* Not valid
//! +++++++++++ How to use variable's +++++++++++++++++
//* First Method
// let demo = "memo";
//* Second Method
// let x, y, z, a, b, c;
// x = 5;
// y = 10;
// z = x + y;
// console.log(x + y);      //* 15
// console.log(z);          //* 15
// a = "Hello";
// b = "World!";
// c = a + " " + b;
// console.log(c);
// document.getElementById("demo").innerHTML = c;
//! ++++++++++ What is dirent const or let
// let x = 5;
// x += 10
// console.log(x); // 15
// Addition
// console.log(x + 12);
// const y = 7;
// y += 20
// console.log(y); // err
//! Arithmetic Operators
// let x = 9;
// let y = 7;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// x++
// x--
// console.log(x);
//! Assignment operators
// let x = 10;
// let y = 5;
// console.log((x *= y));
//! Data types
var address = "Lorem ipsum dolor sit amet."; //? String

var rollNo = 22; //? Number

var rank = false; //? boolean

var $rank = true; //? boolean

var user = null; //? object

var none = undefined; //? Undefined

var neverNumber = NaN; //? Number

/*
 ? How to check data type's 

 - typeof value

 console.log(typeof variable name or value)
*/

/*
  ? Boolean value

  console.log(Number(true)); //? 1
  console.log(Number(false)); //? 0
*/
//? Array

/*
 * Arrays data type is = object
  array is constant 
 */
// const fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits[2]);
//? Object

/*
 * Object data type is = Object
    Object is constant
 */

var person = {
  fName: "John",
  lName: "Doe",
  age: 22
};