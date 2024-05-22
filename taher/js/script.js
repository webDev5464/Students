//! Data types

/*
  String
  Number
  Boolean
  Undefined

  Object
*/

// const name = "John"

// const rollNumber = 8

// const isAdmin = false

//! function

// function MyFunction(price, qty) {
//   return price * qty
// }

// console.log(MyFunction());


//? Arrow function

// console.log(myFunction());

// function myFunction() {
//   return "Hello"
// }


// myFunction()

// const myFunction = () => {
//   console.log("Hello World");
// }

// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 72,
//   fullname: () => {
//     return person.fname + " " + person.lname
//   }
// }

// console.log(person.fullname());


// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 72,
//   fullname: function () {
//     return this.fname + " " + this.lname
//   }
// }

// console.log(person.fullname());

//? Callback function

// function callBack(name, cal) {
//   return cal(`Hello ${name}`)
// }

// console.log(callBack("John", (val) => {
//   return val
// }));

//! if else and else if

// if (5 === "5") {
//   console.log(true);
// } else if (5 == 5) {
//   console.log("Hello");
// } else {
//   console.log(false);
// }

//? ternary operator

// 5 !== 6 ? console.log("second condition") : console.log(false);

// 5 == 6 ? console.log(true) : 5 !== 6 ? console.log("second condition") : console.log(false);

//! operators

//? Arithmetic

// const num1 = 10;
// const num2 = 20;

// console.log(num1 + num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 - num2);
// console.log(5 ** 2);

// let val = 5
// val--
// console.log(val);

//? Assignment

// let a = 5

// a = a + 5

// a += 5
// a -= 5
// a *= 5
// a /= 5
// a %= 5
// a **= 5

// console.log(a);

//? Comparison

// console.log(5 == 5);
// console.log(5 === "5");
// console.log(5 != "6");
// console.log(5 !== 5);
// console.log(3 < 4);
// console.log(3 > 4);
// console.log(3 >= 3);
// console.log(3 <= 5);

//? Logical

//* and operator
// console.log(5 == 5 && 6 === 6);

//* or operator
// console.log(5 == 6 || 6 !== 6);

//* not operator
// const val = "Hello"

// console.log(!Number(val));

//! try catch

// function submitHandler() {
//   try {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const username = document.getElementById("username").value
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value

//     if (!username || !email || !password) throw "Input fields are required."
//     if (!emailRegex.test(email)) throw "Somethings wrong in your email."


//   } catch (xyz) {
//     console.log(xyz);
//   } finally {
//     document.getElementById("username").value = ""
//     document.getElementById("email").value = ""
//     document.getElementById("password").value = ""
//   }
// }

// function showPass() {
//   const passIcon = document.getElementById("passIcon")
//   const password = document.getElementById("password")

//   if (password.getAttribute("type") == "password") {
//     password.setAttribute("type", "text")
//     passIcon.setAttribute("class", "fa-solid fa-eye")
//   } else {
//     password.setAttribute("type", "password")
//     passIcon.setAttribute("class", "fa-solid fa-eye-slash")
//   }
// }

// const val = 15

// try {
//   console.log(eval("alert(Hello World!')"));
// } catch (msg) {
//   console.log(msg.name, msg.message);
// }

//! BOM

//? setTimeout()

// setTimeout(() => {
//   console.log("Hello World!");
// }, 2000)

//? setInterval()

// setInterval(() => {
//   console.log("Hello World!");
// })

//? localStorage

// localStorage.setItem("person", "John")
// localStorage.setItem("Username", "John")
// localStorage.setItem("admin", "John")
// const getData = localStorage.getItem("person")
// localStorage.removeItem("person")
// localStorage.clear()

// const data = [
//   { fname: "John", lname: "Doe" },
//   { fname: "Smith", lname: "Duck" },
//   { fname: "Chagan", lname: "Chapri" },
//   { fname: "Magan", lname: "Bloger" }
// ]

// localStorage.setItem("data", JSON.stringify(data))
// const storageData = JSON.parse(localStorage.getItem("data"))
// console.log(storageData);

//? Theme change using localStorage

// function themeChange() {
//   const themeCss = document.getElementById("themeCss")

//   if (themeCss.getAttribute('href') == "./lightTheme.css") {
//     themeCss.setAttribute('href', "./darkTheme.css")
//     localStorage.setItem("theme", "dark")
//   } else {
//     themeCss.setAttribute('href', "./lightTheme.css")
//     localStorage.setItem("theme", "light")
//   }
// }

// const storageTheme = localStorage.getItem("theme")
// const themeCss = document.getElementById("themeCss")

// if (storageTheme == "dark") {
//   themeCss.setAttribute("href", "./darkTheme.css")
// } else {
//   themeCss.setAttribute('href', "./lightTheme.css")
// }

//! Loops

//? map(), forEach(), for, for in, for of, while, do while

// const renderData = document.getElementById("renderData")
// const Language = ["HTML", "CSS", "JavaScript", "React Js", "Node Js", "Express js", "MongoDb"]

//? map()

// console.log(Language.join(" * "));
// console.log(Language);

// renderData.innerHTML = Language.map((MyValue) => {
//   return MyValue + "<br>"
// }).join("")

//? forEach()

// let text = ""

// Language.forEach((MyValue) => {
//   text += `<h1>${MyValue}</h1>`
// })

// renderData.innerHTML = text

//? for

// let text = ""

// for (let init = 0; init < Language.length; init++) {
//   text += `<h1>${Language[init]}</h1>`
// }

// renderData.innerHTML = text

//? for in

// for (let init in Language) {
//   console.log(init);
// }

//? for of

// for (let init of Language) {
//   console.log(init);
// }

//? while

// let text = ""
// let init = 0
// let languageLength = Language.length

// while (init < languageLength) {
//   text += Language[init] + "<br>"
//   init++
// }

// renderData.innerHTML = text

//? do while

// let text = ""
// let init = 0
// let languageLength = Language.length

// do {
//   text += Language[init] + "<br>"
//   init++
// } while (init > languageLength)

// renderData.innerHTML = text

//TODO :- Date() - setDate() - getDate()

//! Date() , setDate() , getDate()

//! DOM

//! Methods

//? String Method

// let text = "abcdefghijklmnopqrstuvwxyz";
// let length = text.toUpperCase();
// console.log(length);

// let text = "Please visit Microsoft MICROSOFT Microsoft!"
// let change = text.replace(/Microsoft/ig, "World")
// console.log(change);

// let text = "a,b,c d,e,f"
// let arr = text.split(' ')
// console.log(arr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// fruits.unshift("Kiwi")
// fruits.push("Kiwi")

// const result = fruits.slice(2, 3)
// console.log(result);

// const num = [40, 100, 1, 5, 25, 10]
// console.log(num.sort((a, b) => {
//   return a - b
// }));

// const points = [40, 100, 1, 5, 25, 10];

// function myArrayMax(arr) {
//   return Math.max.apply(null, arr);
// }

// console.log(myArrayMax(points));

// const arr = [[10, 20], [30, 40, [50, 60]]]

// console.log(arr.flat().flat().reduce((a, b) => {
//   return a + b
// }));

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// console.log(q1.concat(q2, q3, q4));

async function getData() {
  const rowData = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
  const obj = await rowData.json()

  obj.map((value) => console.log(value.title))
}

getData()

console.log("Hello");