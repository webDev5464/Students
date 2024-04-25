// document.getElementById("myId").innerHTML = "Hello World"

//! types of variable

/*
var
const
let
*/

// let myName = "John"
// console.log(myName);
// document.getElementById("myId").innerHTML = myName

//! blockScope

// const myName = "John"

// {
//   console.log(myName);
//   const myName = "Chagan"
// }

// var myName = "John"

// {
//   var myName = "Chagan"
// }

// console.log(myName);

// const myName = "John"

// myName = "Chagan"

// console.log(myName);

//! data type

//? string

// const myName = "Chagan"
// const myName = 'Chagan'

// const heading = "hello"
// const myName = `${heading} Chagan`

// document.getElementById("myId").innerHTML = myName

// console.log(typeof myName);

//? number

// const myNumber = 10.254

// console.log(myNumber);

//? boolean

// const val = false // false : 0 , true : 1

// console.log(Number(val));

// const val = "10"

// console.log(typeof Number(val));

//? undefine

// let myValue

// console.log(typeof myValue);

//? null

// const myValue = null

// console.log(typeof myValue);

//? array

// const myArray = ["html", "css", 'js']

// console.log(typeof myArray);

// console.log(Array.isArray(myArray));

//? object

// const person = {
//   name: "Chagan", age: 25, isMarried: false
// }

// console.log(typeof person);

//? date

// const myDate = new Date()

// console.log(myDate.getHours(), myDate.getMinutes());

//! function and arrow function

// document.getElementById("myId").innerHTML = myFunction(10, 15)

// function myFunction(a, b) {
//   return a + b
// }

//? Arrow function

// const myFunction = (a, b) => {
//   return a + b
// }

// console.log(myFunction(5, 10));
// console.log(myFunction(15, 100));

//? obj function

// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 19,
//   fullname: () => {
//     return person.fname + ' ' + person.lname
//   }
// }

// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 19,
//   fullname: function () {
//     return this.fname + ' ' + this.lname
//   }
// }

// console.log(person.fullname());

//! if else and else if , ternary operator

// if (5 == 6) {
//   console.log(true);
// } else {
//   console.log(false);
// }


// if ((5 == 5) && (6 < 5)) {
//   console.log(true);
// } else if ("chagan" != "chagan") {
//   console.log("chagan is same");
// } else {
//   console.log(false);
// }

/*

== , === , != , !== , < , > , <= , >= , !VALUE

&& , ||

*/

//? ternary

// 5 != 5 ? console.log(true) : console.log(false);

// 5 != 5 ? console.log(true) : 5 !== "5" ? console.log("not same") : console.log(false);

// let num = 5

// num = num + 5
// num *= 5

// console.log(num);

// console.log(--num);

// num++

// console.log(num)

// let strNum = "5"

// console.log(5 + 5 + strNum);

// let text = 'Lorem ipsum dolor sit amet.'

// let impText = "dolor"
// let text = `Lorem ipsum ${impText} sit amet.`

// console.log(text);

// const person = {
//   fname: "John",
//   lname: "doe"
// }

// console.log(`Hello ${person.fname} ${person.lname}`);

// let text = "Lorem ipsum \n dolor sit amet."
// let text = `Lorem ipsum dolor sit amet.
//   hello
//   world
// `
// console.log(text.length);

// try {

// } catch () {

// }

// try {
//   textAlert("Hello World");
// } catch (err) {
//   console.log(err.name);
// }

// let num = 9.656
// let num = 19.656

// const number =
//   num.toPrecision() +
//   "<br>" +
//   num.toPrecision(2) +
//   "<br>" +
//   num.toPrecision(4) +
//   "<br>" +
//   num.toPrecision(6);

// console.log(number);

// let lorem = 5
// try {
//   eval("lorem");
// } catch (err) {
//   console.log(err.message);
// }

// function formHandler() {
//   try {
//     const fname = document.getElementById("fname").value
//     const lname = document.getElementById("lname").value
//     const email = document.getElementById("email").value
//     const username = document.getElementById("username").value
//     const pass = document.getElementById("pass").value
//     const conPass = document.getElementById("conPass").value
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     // if (!fname || !lname || !email || !username || !pass || !conPass) throw "Input field is empty..."

//     if (!emailRegex.test(email)) throw "Invalid email address..."
//     if (pass !== conPass) throw "Password does not match..."
//   } catch (msg) {
//     console.log(msg);
//   } finally {
//     document.getElementById("fname").value = ""
//     document.getElementById("lname").value = ""
//     document.getElementById("email").value = ""
//     document.getElementById("username").value = ""
//     document.getElementById("pass").value = ""
//     document.getElementById("conPass").value = ""
//   }
// }

// function formHandler() {
//   try {
//     const fname = document.getElementById("fname").value
//     const lname = document.getElementById("lname").value
//     const email = document.getElementById("email").value
//     const username = document.getElementById("username").value
//     const pass = document.getElementById("pass").value
//     const conPass = document.getElementById("conPass").value

//     if (!fname || !lname || !email || !username || !pass || !conPass) throw "Input field is empty..."
//     if (pass !== conPass) throw "Password does not match..."

//   } catch (err) {
//     console.log(err);
//   } finally {
//     document.getElementById("fname").value = ""
//     document.getElementById("lname").value = ""
//     document.getElementById("email").value = ""
//     document.getElementById("username").value = ""
//     document.getElementById("pass").value = ""
//     document.getElementById("conPass").value = ""
//   }
// }

