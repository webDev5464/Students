//! Js Introduction

// document.getElementById("heading").innerHTML = "Hello JavaScript"

// function hideFunction() {
//   document.getElementById("hideElement").style.display = "none"
// }

// function showElement() {
//   document.getElementById("hideElement").style.display = "block"
// }

//! What is variable

// let myVar = "Hello Js"

// console.log(myVar)
// document.getElementById("heading").innerHTML = myVar

//* type of variable

/*
 * let
 * const
  var
*/

// let x = 5
// const y = 6
// var b = 9

// console.log(x);
// console.log(y);
// console.log(b);

//* Why not use var ? reason - 1

// let x = 10
// let x = 15

// const x = 15

// var x = 15
// var x = 10

// console.log(x);

//! blockScope

// let x = 5
// console.log(x); // 5

{

  // console.log(x); // 5

  // let x = 15

  // console.log(x); // 15

}

// console.log(x); // 5

// -------------------------

// const x = 5
// console.log(x); // 5

// {

//   // console.log(x); // 5

//   const x = 15

//   console.log(x); // 15

// }

// console.log(x); // 5

// ---------------------

//* Why not use var ? reason - 2

// var x = 6

// console.log(x); // 6

// {

//   console.log(x); // 6

//   var x = 9

//   console.log(x); // 9

//   var x = 19

//   console.log(x); // 19
// }

// console.log(x); // 19

//! What is deferent let and const

// let x = 5

// console.log(x); // 5

// x = 10
// console.log(x); // 10

// ---------------------

// const x = 5

// console.log(x); // 5

// x = 15 // err
// console.log(x); // err

//! Assignment Operator

//! Asthmatic Operator