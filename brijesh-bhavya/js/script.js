//! ------------ Introduction -------------

// document.getElementById("heading").innerHTML = "Hello World!"
// document.getElementById("headingTwo").innerHTML = "Hello Magan!"

// const headingTwo = document.getElementById("headingTwo")

// headingTwo.innerHTML = "Hello World!"

// const myName = "Magan"
// console.log(myName);

/*

This is a Comment

multiple line

*/

// single line comment

//! Variables

//* variable declaration
// const myName = "Magan"

//* type's of variable

/*
  var, const, let
*/

// const myName = "Magan"
// let myName = "Magan"
// var myName = "Magan"

//* do not use var. reason : 1
// var myName = "chagan"
// var myName = "magan"

// console.log(myName);

//* const and let

// let myName = "Magan"

// myName = "chagan"

// console.log(myName);



// const myName = "Chagan"

// myName = "Magan"

// console.log(myName);



//! blockScope

// let myName = "Chagan"

// {

//   console.log(myName);
//   let person = "Magan"

// }

//* do not use var. reason : 2

// var num = 5

// {

//   var num = 9

// }

// console.log(num);

//! Data Types

/*
  * string
  * number
  * boolean
  * undefined
  * null
  * object
  // bigint
  // symbol
*/

//? typeof operator :- check the data type of a variable

// console.log(typeof(myName));

//? Primitive Data Types

//* String

// const myName = "John Doe"
// const myName = 'John Doe'
// const myName = "My Name is \"John Doe\""
// const myName = "My Name is \
//  'John Doe'"
// console.log(myName);

// const myName = "Brijesh"
// console.log(myName.length)

//* Number

// const rollNum = -7.5
// console.log(rollNum);

//* boolean

// const isRaining = true // 1
// const isRaining = false // 0
// console.log(Number(isRaining));

//* undefined

// let myName;

// console.log(typeof myName);

//* null

// const users = null

// console.log(users);

//* object

//? object
//? array
//? null
//? Date() // Object

//* object

// const obj = {
//   key: "value",
//   keyTwo: "Value Two"
// }

// console.log(obj.key);

// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 24
// }

// console.log(person.fname, person.lname);

// document.getElementById("heading").innerHTML = person.fname + " " + person.lname

//* Array

// const frt = ["Apple", "Banana", "Mango", "Kiwi", "Orange"]

// console.log(frt[2]);

// console.log(Array.isArray(frt)); // true

//! function, arrow function

// function MyFunction() {
//   // document.getElementById("heading").innerHTML = "Hello World!"
//   document.getElementById("heading").style.display = "none"
// }

// function Addition() {
//   return "Hello"
//   // console.log("Hello");
// }

// Addition()
// console.log(Addition());

// function Addition(price, qty) {
//   return price * qty
// }

// console.log(Addition(499, 4));

// const myFunction = (price, qty) => {
//   return price * qty
// }

// console.log(myFunction(999, 2));

// MyFunction()

// function MyFunction() {
//   console.log("Hello");
// }


// MyFunction()

// const MyFunction = () => {
//   console.log("Hello");
// }


// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 29,
//   fullName: () => {
//     return person.fname + ' ' + person.lname
//   }
// }

// console.log(person.fullName());

// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 29,
//   fullName: function () {
//     return this.fname + ' ' + this.lname
//   }
// }

// console.log(person.fullName());


//! if else and else if

// if (5 == 6) {
//   console.log("Hello");
// } else {
//   console.log("Bye");
// }


// if (5 == 6) {
//   console.log("Hello");
// } else if (5 != 5) {
//   console.log("Not Same");
// } else {
//   console.log("Bye");
// }

//? ternary Operator

// 5 == 6 ? console.log(true) : console.log(false);

// 5 == 6 ?
//   console.log(true) :
//   5 !== 5 ?
//     console.log("yes its not match") :
//     console.log("Bye")

//! Operator

//? Assignment

// const val = 5

// console.log(5 + 5);
// console.log(5 - 5);
// console.log(5 * 5);
// console.log(5 / 5);
// console.log(5 % 5);
// console.log(5 ** 2);

// let val = 5

// val++ // increment
// val-- // decrement

// console.log(++val);

//? Arithmetic

// let val = 12

// val = val + 10

// val += 10
// val -= 10
// val *= 10
// val /= 10
// val **= 10
// val %= 10

// console.log(val);

//? conditional

// == , === , != , !== , < , > , <= , >=

//? logical

// && , || , !

//TODO :- Date(), getDate(), setDate()

//! try catch

// try {
//   const num = 5

//   console.log(num.toUppercase());
// } catch (myError) {
//   console.log(myError.name + ':- ' + myError.message);
// }

// function formHandler() {
//   try {
//     const fname = document.getElementById("fname").value
//     const lname = document.getElementById("lname").value
//     const username = document.getElementById("username").value
//     const email = document.getElementById("email").value
//     const pass = document.getElementById("pass").value
//     const conPass = document.getElementById("conPass").value

//     console.log([fname, lname, username, email, pass, conPass]);

//     if (!pass) {
//       throw "password is required"
//     }
//   } catch (msg) {
//     console.log(msg);
//   }
// }


//! async and await with fetch data
//? https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI

// async function fetchData() {
//   const renderAllData = document.getElementById("renderAllData")
//   const rowData = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
//   const objData = await rowData.json()

//   const newObj = [...objData.earbud, ...objData.tshirt]

//   renderAllData.innerHTML = newObj.map((MyValue) => {
//     return `
//       <section class="card">
//         <div>
//           <img src="${MyValue.img1}" alt="ProductImage">
//         </div>

//         <div>
//           <p>${MyValue.title}</p>
//         </div>
//       </section>
//     `
//   }).join("")
// }

// fetchData()

//? String templates

// const person = "John"

// console.log(`Hello ${person}`);

//? call back function

// const func = () => {
//   return () => {

//   }
// }

//! Loops

//? map(), forEach(), for , for in , for of , do while, while
// const frtRender = document.getElementById("frtRender")
// const frt = ["Apple", "Banana", "Mango", "Kiwi", "Orange"]

//? Map() method
// console.log(frt.join(" * "));

// frtRender.innerHTML = frt.map((MyFrtVal) => {
//   return `<h1>${MyFrtVal}</h1>`
// }).join("")

//? forEach() method

// let text = ""

// frt.forEach((frtValue) => {
//   text += frtValue + "<br>"
// })

// frtRender.innerHTML = text

//? for

// let text = ""

// for (let init = 0; init < frt.length; init++) {
//   text += frt[init] + "<br>"
// }

// frtRender.innerHTML = text

//? for in

// for (let init in frt) {
//   console.log(init);
// }

//? for of

// for (let init of frt) {
//   console.log(init);
// }

// console.log(JSON.stringify(products));

//! BOM

//? localStorage

// localStorage.setItem("person", "John")
// localStorage.setItem("username", "John")
// localStorage.setItem("fname", "John")

// localStorage.removeItem("person")
// localStorage.clear()

// const getData = localStorage.getItem("username")
// console.log(getData)

// localStorage.setItem("data", JSON.stringify(products))
// const localData = JSON.parse(localStorage.getItem("data"))
// console.log(localData);

//? setTimeout()

// setTimeout(() => {
//   console.log("Hello World");
// }, 5000)

//? setInterval()

// setInterval(() => {
//   console.log("Hello World");
// }, 2000)

//? window

setInterval(() => {
  const initValue = window.scrollY > 1000

  if (initValue) {
    document.querySelector("body").style.backgroundColor = "black"
  } else {
    document.querySelector("body").style.backgroundColor = "white"
  }
})
