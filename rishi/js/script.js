//! DOM (Document object model)
// document.getElementById("demo").innerHTML = "Hello"

//! What is variables

/*
1. Var
2. let
3. const
*/

// var myVar = 5
// let x = 7
// const y = 10

// console.log(myVar)

//? Reason One
// var x = 5

// var x = 0
// console.log(x);


//! BlockScope

//? let
// let x = 5

// {
//   let x = 10
//   console.log(x);
// }

// console.log(x);

//? const

// const x = 5

// {
//   const x = 10
//   console.log(x);
// }

// console.log(x);

//? var

// var x = 5

// {
//   console.log(x);
//   var x = 10

// }

// console.log(x);

//! what's deferent const and let

//? let

// let x = 5

// console.log(x);

// x = 10

// console.log(x);

//? const

// const a = 20

// a = 50

// console.log(a);

//! Arithmetic Operator

// let x = 5

// let y = 15

// let z = x + y

// console.log(z);

// console.log(x - y);

// console.log(x * y);

// console.log(x % y);

// console.log(x / y);

// console.log(x ** 3);

//! assignment operator

// let x = 5

// x = x + 10

// x += 10
// x -= 10
// x /= 10
// x **= 2
// x %= 10

// console.log(x);

// let x = 5

// x++
// x--

// console.log(x);

// let a = 5
// let x = 5
// let y = "10"

// console.log(a + x + y);

//! Data Types

// let x = 5 // Number


// let person = "Hello World!" // String
// let $person = 'Hello World!' // String
// let player = "let's play" // String

// let _x = 'Hello World! it\'s \
// javaScript' // String


// let win = true // boolean - 1
// let fail = false // boolean - 0

// console.log(typeof Number(fail));

// let _person = ["John", "Magan", "Chagan"] // object
// console.log(_person[1]);

// console.log(Array.isArray(_person));

// let datas = {
//   fName: "John",
//   lName: "Doe",
//   age: 27
// } // object

// console.log(datas.fName + " " + datas.lName);

// let xx
// console.log(typeof xx);

// let obj = null // object
// console.log(typeof obj);

//! function

// function MyFunction() {
//   console.log("Hello World");
// }

// MyFunction()

// // ========

// function MyFunction() {
//   return "Hello JavaScript"
// }

// console.log(MyFunction());

// // ========

// console.log(MyFunction(50, 30));

// function MyFunction(a, b) {
//   return a + b
// }

// console.log(MyFunction(50, 70));
// console.log(MyFunction(50, 10));

// // ========

// const MyArrowFunction = (a, b) => {
//   return a - b
// }

// console.log(MyArrowFunction(50, 20))

// // ============

// const person = {
//   fName: "John",
//   lName: "Doe",
//   age: 22,
//   fullName: function () {
//     return this.fName + " " + this.lName
//   }
// }

// console.log(person.fullName());

// // ============

// ((a, b) => {
//   console.log(a + b)
// })(100, 200);

// (function (a, b) {
//   console.log(a - b);
// })(100, 50);

// function button() {
//   alert("Button Click")
// }

//! Sting Method

// let aToz = "ABCDEFGHIJKL      MNOPQRSTUVWXYZ"

// console.log(aToz.length);

// let x = "Lorem \n ipsum \"dolor\" sit amet."

// console.log(x);

// let y = "lorem"

// let x = new String(y)

// console.log(typeof x);

// let text = "Please visit Microsoft! microsoft Microsoft microsoft";
// let newTest = text.replace(/microsoft/gi, "Hello")
// console.log(newTest);

// let h = "Hello"
// let w = "World"

// console.log(h.concat(" " + w + " " + "It's JavaScript"));
// console.log(h + " " + w);

// let x = "J,a,v,a,S,c,r,i,p,t"

// let y = x.split(",")
// console.log(y);