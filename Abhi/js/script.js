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

// let x = 5
// let y = 10

// let z = x + y
// console.log(z);

// let z = x - y
// console.log(z);

// let z = x * y
// console.log(z);

// let z = x / y
// console.log(z);

// let z = x % y
// console.log(z);

// let z = 10 ** 2
// console.log(z);

// console.log(x); // 5
// x++ // increment
// console.log(x); // 6

// console.log(y); // 10
// y-- // decrement
// console.log(y); // 9

//! Asthmatic Operator

// let x = 10

// x = x + 5
// console.log(x);

// x += 5
// console.log(x);

// x -= 5
// console.log(x);

// x *= 5
// console.log(x);

// x /= 5
// console.log(x);

// x %= 5
// console.log(x);

// x **= 5
// console.log(x);

//! Datatype's

// let render = document.getElementById("render")

//? string

// let message = "Hello 'World!'" // string

// let $message = 'Hello World!, \
// this is a "JavaScript"'

// console.log(typeof message);

            // template
// let strTem = `message : 
// ${message}`
// console.log(typeof strTem);

// render.innerHTML = <h1>Hello Js</h1>

// let numstr = "5"

// console.log(typeof Number(numstr));

//? Number

// let x = 5
// console.log(x);

//? boolean

// let x = false
// let y = true

// console.log(typeof x);
// console.log(Number(x)); // 0
// console.log(Number(y)); // 1

//? object

//-------------------------------

//* Array

// const language = ["HTML" , "CSS" , "JavaScript"]
// console.log(language[2] + " " + language[0]);
// console.log(typeof language);

// console.log(Array.isArray(language));

// const backendLanguage = ["React" , "Nodejs" , "MongoDb"]

// const newArr = language.concat(backendLanguage)
// console.log(typeof newArr);

//-------------------------------

//* object

// const personData = {
//     fName: "John",
//     lName: "Doe",
//     age: 27
// }

// console.log(personData.fName + " " + personData.lName);

//-------------------------------

//* null

// let x = null
// console.log(typeof x);

//? undefine

// let $x = undefined
// console.log(typeof $x);

//? NaN

// let _x = NaN // Not a Number
// console.log(typeof _x); // number
