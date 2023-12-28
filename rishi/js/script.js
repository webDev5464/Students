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

//! String Template

// const data = {
//   fname: "John",
//   lname: "Doe"
// }

// let person = "Chagan"

// let render = document.getElementById("render")

// let article = `<h1 style="background-color:red">Hello World! My Name is ${person} my full  name is ${data.fname} ${data.lname}</h1>`

// render.innerHTML = article

//! Looping Array Element

// const language = ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDb"]

// language.pop()
// language.push("Chagan")
// language.shift()
// language.unshift("Magan")
// language.splice(3, 0, "Val 1", "Val 2")
// let x = language.slice(2, 5)
// console.log(x);

// let x = language.toString()
// console.log(typeof x);


// const $langLeng = language.length // 6

// let text = ""

// for (let x = 0; x < $langLeng; x++) {
//   text += `<h1>${language[x]}</h1>`
// }

// document.getElementById("result").innerHTML = text

// console.log(Array.isArray(language));

//! Array Sorting

// let num = [40, 100, 1, 5, 25, 10];

// num.sort()
// console.log(num);

// const x = num.sort((a, b) => {
//   return a - b
// })

// console.log(x);

// const x = num.sort(() => {
//   return 0.5 - Math.random()
// })

// console.log(x);

//* forEach

// let num = [40, 100, 1, 5, 25, 10];

// console.log(num.join(" * "));
// num.forEach((value) => {
//   console.log(value);
// })

// ------------------

// let print = ""

// num.forEach(x => print += `<h1>${x}</h1>`)

// console.log(print);

// document.getElementById("result").innerHTML = print

//* map

// let num = [40, 100, 1, 5, 25, 10];

// let render = num.map(x => {
//   return `<h1>${x}</h1>`
// })

// console.log(render);
// document.getElementById("result").innerHTML = render.join("")

//! Date get and set

// let date = new Date()

// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// console.log(months[date.getMonth()]);

//! if else and else if

// let x = 5
// let y = 5
// let z = 6

// if (x && z == y) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const date = new Date().getHours()

// if (date < 12) {
//   console.log("Good Morning");
// } else if (date > 12 && date < 18) {
//   console.log("Good Afternoon");
// } else {
//   console.log("Good Night");
// }

//* ternary operator

// let x = 5
// let y = 6

// x == 5 ? console.log(true) : console.log(false)

//! try catch statement

// function submit() {
//   const inputVal = document.getElementById("inputVal").value
//   const result = document.getElementById("result")

//   try {
//     if (isNaN(inputVal)) throw "Not a Number"
//     if (inputVal == "") throw "Blank"
//     if (inputVal.length < 4) throw "to low"
//     if (inputVal.length > 8) throw "to high"

//     if (inputVal.length > 4 || inputVal.length < 8) throw "Submitted"

//   } catch (msg) {
//     result.innerHTML = msg
//   } finally {
//     document.getElementById("inputVal").value = ""
//   }

// }

//! Switch case

// let date = new Date().getMonth()

// let val;

// switch (date) {
//   case 0:
//     val = "January"
//     break;

//   case 3:
//     val = "March"
//     break;

//   case 10:
//     val = "November"
//     break;

//   case 11:
//     val = "December"
// }

// console.log(val);

//! loop

// const users = [
//   {
//     fname: "John",
//     lname: "Doe",
//     age: 27
//   },
//   {
//     fname: "Smith",
//     lname: "Duck",
//     age: 45
//   },
//   {
//     fname: "Chagan",
//     lname: "Chapri",
//     age: 16
//   },
//   {
//     fname: "Magan",
//     lname: "Bloger",
//     age: 18
//   }
// ]

//? for

// const dataLength = users.length
// let text = ""

// for (let x = 0; x < dataLength; x++) {
//   text += `<h1>${users[x].fname + " " + users[x].lname}</h1>`
// }

// document.getElementById("result").innerHTML = text

//? for in

// let text = ""

// for (let x in users) {
//   text += users[x].fname + "\n"
// }

// console.log(text);

//? for of

// let text = ""

// for (let x of users) {
//   text += x.fname + "\n"
// }

// console.log(text);

//? map (function)

// const render = users.map((e) => {
//   return `<h1>${e.fname + " " + e.lname}</h1>`
// })

// document.getElementById("result").innerHTML = render.join("")
// console.log(render);

//? forEach (function)

// let text = ""
// users.forEach((x) => {
//   text += `<h1>${x.fname + " " + x.lname}</h1>`
// })

// console.log(typeof text);
// document.getElementById("result").innerHTML = text

//? while loop

// let x = 0
// let text = ""

// while (x < 10) {
//   text += x
//   x++
// }

// console.log(text);

//? do while

// let x = 0
// let text = ""

// do {
//   text += x
//   x++
// } while (x > 10)

// console.log(text);

// let x = 5
// console.log(x.toPrecision(3));

let num = 9.656;
const number =
  num.toPrecision() +
  "<br>" +
  num.toPrecision(2) +
  "<br>" +
  num.toPrecision(4) +
  "<br>" +
  num.toPrecision(6);

document.getElementById('result').innerHTML = number