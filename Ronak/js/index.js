//? Types of Variable

// let
// const
// var

//? how to use variables

// let myVariable = "Hello World!";
// console.log(myVariable);

// let age = 27;
// console.log(age);
// document.getElementById("demo").innerHTML = myVariable;

//? What is use variables

//* let type variable updated
// let x = 5;
// console.log(x);

//* x is updated
// x = 9;
// console.log(x);

//* const is Constant
// const y = 8
// console.log(y);

// y = 12
// console.log(y);

//* var

// var a = 5

// console.log(a);

// var a = 6
// a = 12
// console.log(a);

//! variable name

//* Valid
// let x = 5
// let $x = 8
// let $$$$x = 1
// let _x = "Hello"
// let $x_ = 12
// let x1 = "x1"

//* invalid
// let 1x = 0
// let for = 2
// let else = 2
// let function = 12

//! Block Scope

//* let

// let y = 5; // 5

// {
//   let y = 12; // 12
//   console.log(y);
// }

// console.log(y); // 5

//* const

// const x = "Hello";

// {
//   const x = "World!";
//   console.log(x);
// }

// console.log(x);

//* var

// var a = 10; // 10

// {
//   var a = 20; // 20
// }

// console.log(a); // 20

//! Data Types

// let text = "Hello World"; // String
// console.log(typeof text);

// let num = 25; // Number
// console.log(typeof num);

// let nameAge = "John is 22 year old"; // 22 is not a number is string.
// console.log(typeof nameAge);

// let bully = true; // boolean
// let wrongBully = false; // boolean
// console.log(typeof bully);
// console.log(5 == "5");
// console.log(5 === "5");
// console.log("5" === "5");
// console.log("5" === "4");

/*
value of true : 1
value of false : 0
*/

// console.log(Number(bully));
// console.log(Number(wrongBully));

// let x = null; // Object
// console.log(typeof x);

// let y = undefined; // undefined
// console.log(typeof y);

// let numm = NaN; // number
// // Not a Number

// console.log(typeof numm);

//* Object

/*
Multiple value store in object
*/

//* Array
// const num = [4, 5, 1, 9, 7, "Hello"];

// const language = ["HTML", "CSS", "JavaScript"];
// console.log(language);
// console.log(language[0]); // HTML
// console.log(language[2]); // JavaScript

// console.log(typeof language);
// console.log(Array.isArray(language));

//* Object

// const person = { fName: "John", lName: "Doe", age: 22 };
// console.log(typeof person);

// console.log(person.fName + person.lName);

//* Date

// let date = new Date()
// console.log(typeof date);

//* Arithmetic Operators

// let x = 5
// let y = 10

// console.log(x + y); // Addition
// console.log(x - y); // Subtraction
// console.log(x * y); // Multiplication
// console.log(x / y); // division
// console.log(x % y); // Modulus
// console.log(x ** 2); // Exponentiation
// x++
// console.log(x);
// y--
// console.log(y);


// let x = 5
// let y = 10

// x += 20
// console.log(x);

//! Function

//? Simple Function
// function myFunction(a, b) {
//   return a + b
// }

// console.log(myFunction(10, 5));

// myF()

// function myF() {
//   let x = 5
//   console.log(x);
// }

//? Arrow Function

// const myFunction = (a, b) => {
//   return a * b
// }

// console.log(myFunction(20, 2));

//? Self calling function

// (function () {
//   console.log("lol");
// })();

//? using object function

// const person = {
//   fName: "John",
//   lName: "Doe",
//   age: 25,
//   height: 145,
//   fullName: function () {
//     return this.fName + " " + this.lName
//   }
// }

// console.log(person.fullName());

//! String

// let p = "Lorem, ipsum \"dolor\" sit amet's \
// consectetur \\ adipisicing elit. \nPossimus, fuga."
// console.log(p);
// console.log(p.length);

// let text = "Please visit Microsoft! microsoft , Microsoft , MICROSOFT";
// let chanag = text.replace(/Microsoft/gi, "Hello")
// console.log(chanag);
// console.log(text);

// let h = "Hello"
// let w = "World"

// let hw = h.concat(" " + w)
// console.log(hw);
// console.log(h + " " + w);

// const g = ["g1", "g2", "g3"]
// const b = ["b1", "b2", "b3"]

// const child = g.concat(b)
// console.log(typeof child);

//! Number

// let x = 5
// let y = 5.5

// let x = 5
// let y = 10

// console.log(x + y);

// let x = 5
// let y = "5"

// let result = x + y
// console.log(typeof result);

// console.log(5 + 20 + "25");
// console.log("25" + 20 + 5);

// console.log("5" / "2");
// console.log("5" * 2);

// console.log("Hello" * 2);

//! String template

// let x = "let's play"
// let y = '"Hello"'
// console.log(y);

// let x = `Hello World!`
// let y = `"Hello"`
// let z = `let's play`
// console.log(y);

// let data = ["html", "css", "JavaScript"]

// let result = `I understand this language ${data[0] + " " + data[2]}`
// console.log(result);

// let word = "JavaScript"
// let wordLength = word.length

// let text = ""
// for (let i = 0; i < wordLength; i++) {
//   text += word[i]
// }

// document.getElementById("demo").innerHTML = `<h1>${text}</h1>`

// let text = `The rain in SPAIN stays mainly in the plain`;
// let result = text.match(/ain/gi)
// console.log(result);
// console.log(Array.isArray(result));
// console.log(result[1]);

//! Array

// const language = ["html", "css", "JavaScript", "Python"]
// console.log(language.length);
// console.log(Array.isArray(language));
// language[2] = "NodeJs"
// language[language.length] = "NodeJs"

// language.pop()
// language.push("dJango")

// language.shift()
// language.unshift("PHP")

// language.splice(1, 2, "NodeJs")

// console.log(language.slice(1, 1));

// delete language[1]
// console.log(language);

// console.log(language.toString());

// console.log(language.join(" * "));

//! Array sort

// const aToz = ['G', 'F', 'Y', 'W', 'Z', 'Y', 'A', 'B']
// console.log(aToz.sort().reverse());

// const num = [40, 100, 1, 5, 25, 10]
// console.log(num.sort());

// console.log(num.sort((a, b) => {
//   return a - b
// }));

//! Array iteration

//* forEach

// const numbers = [45, 4, 9, 16, 25];
// let demo = document.getElementById("demo")

// let text = ""
// numbers.forEach((x) => {
//   text += x + "<br>"
// })

// demo.innerHTML = text

//* map

// const numbers = [45, 4, 9, 16, 25];
// let demo = document.getElementById("demo")

// const render = numbers.map((x) => {
//   return x + "<br>"
// })

// demo.innerHTML = render.join("")


//* Array in object render data

// const personData = [
//   {
//     fName: "John",
//     lName: "Doe",
//     age: 24
//   },
//   {
//     fName: "Smith",
//     lName: "Trunc",
//     age: 29
//   },
//   {
//     fName: "Chagan",
//     lName: "Bloger",
//     age: 31
//   },
//   {
//     fName: "Magan",
//     lName: "Chapri",
//     age: 62
//   }
// ];

// let demo = document.getElementById("demo")

// const render = personData.map((x) => {
//   return `
//     <p>${x.fName} ${x.lName}</p>
//   `
// })

// demo.innerHTML = render.join("")

//* for od loop Key()

// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// let key = fruits.keys()

// let text = ""
// for (let x in fruits) {
//   text += x + " , " + fruits[x] + "<br>"
// }
// document.getElementById("demo").innerHTML = text

//* d-structuring

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// let allProducts = [...q1, ...q2, ...q3, ...q4]
// let allData = q1.concat(q2, q3, q4)

// console.log(allProducts);

//! Math.random()

// let demo = document.getElementById("demo")
// demo.innerHTML = Math.round(Math.random())

// function randomNum(max, min) {
//   demo.innerHTML = Math.round(Math.random() * (max - min)) + min
// }

// function randomNum() {
//   demo.innerHTML = Math.round(Math.random() * (9999 - 1111)) + 1111
// }

//! boolean

// console.log(10 > 9);
// console.log(10 < 9);

// console.log(Number(true));
// console.log(Number(false));

// console.log(5 == 5);
// console.log(5 === "5");
// console.log(5 == "5");

// console.log(5 !== "5");

//! if else & else if

// if (5 == 5) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// if (5 == 6) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// -------

// let date = new Date().getHours()
// console.log(date);

// if (date < 18) {
//   console.log("Good day");
// } else {
//   console.log("Good Evening");
// }

// if (date >= 6 && date < 12) {
//   console.log("Good Morning");
// } else if (date < 18) {
//   console.log("Good Afternoon");
// } else if (date < 22) {
//   console.log("Good Evening");
// } else {
//   console.log("Good Night");
// }

// let date = 5
// console.log(date >= 6 && date < 12);

//* ternary operator

// let x = 10 > 9 ? "Yes" : "No"
// console.log(x);

//! Switch statement

// let int = 0

// switch (int) {
//   case false:
//     console.log("Its false");
//     break;

//   case true:
//     console.log("its true");
//     break;

//   default:
//     console.log("Something Wrong");
// }

//! Loops

//* For loop

// let demo = document.getElementById("demo")
// const language = ["HTML", 'CSS', 'JavaScript', "React", "Node js"]

// let int
// let text = "<ul>"

// for (int = 0; int < language.length; int++) {
//   text += `<li>${language[int]}</li>`
// }

// text += "</ul>"

// demo.innerHTML = text

//* for in loop

// let demo = document.getElementById("demo")
// const language = ["HTML", 'CSS', 'JavaScript', "React", "Node js"]

// let text = "<ul>"
// for (let x in language) {
//   text += `<li>${x} :- ${language[x]}</li>`
// }
// text += "</ul>"

// demo.innerHTML = text

//* for of 

// let demo = document.getElementById("demo")
// const language = ["HTML", 'CSS', 'JavaScript', "React", "Node js"]

// let text = ""

// for (let x of language) {
//   text += `<li>${x}</li>`
// }

// demo.innerHTML = `<ul>${text}</ul>`

//* while loop

// let demo = document.getElementById("demo")
// const language = ["HTML", 'CSS', 'JavaScript', "React", "Node js"]

// let x = 0
// let LangLeng = language.length
// let text = ""

// while (x < LangLeng) {
//   text += language[x] + "<br>"
//   x++
// }

// demo.innerHTML = text

//* do while loop

// let demo = document.getElementById("demo")
// const language = ["HTML", 'CSS', 'JavaScript', "React", "Node js"]

// text = ""
// let x = 0

// do {
//   text += language[x] + "<br>"
//   x++
// } while (x > language.length)

// demo.innerHTML = text

//* forEach function (loop)

// let demo = document.getElementById("demo")
// const language = ["HTML", 'CSS', 'JavaScript', "React", "Node js"]

// let text = ""
// language.forEach((x) => {
//   text += `<p>${x}</p>`
// })

// demo.innerHTML = text

//* map function (loop)

// let demo = document.getElementById("demo")
// const language = ["HTML", 'CSS', 'JavaScript', "React", "Node js"]

// const text = language.map((x)=> {
//   return `<p>${x}</p>`
// })

// demo.innerHTML = text

//! Errors

// try {
//   eval(`${demo}`)
// } catch (err) {
//   console.log(err.message);
// }
