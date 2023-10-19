// document.getElementById("demo").innerHTML = "Hello World";

// console.log("Hello World!")

// let
// const
// var

// let x = 5;
// const y = 5;
// var z = 5;

// console.log(z);

// var x = 10;
// console.log(x);

// var x = 12;
// console.log(x);

// let x = 12;
// console.log(x);

// {
// let x = 24;
// console.log(x);
// }

// const y = 4;

// {
// const y = 7;
// console.log(y);
// }

// {
// const y = 414;
// console.log(y);
// }

// console.log(y);

// console.log(y);

// var d = 10;

// {
//   var d = 12;
// }

// console.log(d);

// ===============================================

// let x = 5;  // Valid
// let _x = 5;   // Valid
// let _x_ = 5;  // Valid
// let $x = 5;   // Valid
// let $x$ = 5;  // Valid
// let x5 = 5;   // Valid
// let $x_5 = 5;   // Valid

// let x y = 5 // invalid
// let 5x = 5 // invalid
// let #x = 5 // invalid
// let %x = 5 // invalid

// ================================================

// let x = 5;
// console.log(x);

// x = 7
// console.log(x);

// const y = 10
// console.log(y);

// y = 15
// console.log(y);

// let switch = 5
// console.log(const);

// let x = 6
// x += 6
// console.log(x);

// let x = "16";
// let y = "16";
// let z = x + y;

// let a = "Hello";
// let b = 10;
// let c = 20;

// let z = a + b + c;
// let z = b + c + a;

// console.log(z);

// Single quote inside double quotes:
// let answer1 = "It's alright";

// Single quotes inside double quotes:
// let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
// let answer3 = 'He is called "Johnny"';

// console.log(answer1);
// console.log(answer2);
// console.log(answer3);

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[2]);

// const person = ["John", "Smith", "Lio"];

// const personDetail = { fName: "John", lName: "Doe", age: 22 };
// console.log(personDetail.fName + " " + personDetail.lName);

// const today = new Date();
// console.log(today);

// let car = "";
// document.getElementById("demo").innerHTML = car;

// function myFunction(a, b) {
//   return a * b;
// }
// console.log(myFunction(50, 2));

// const ArrowFunction = (a, b) => {
//   return a / b;
// };
// console.log(ArrowFunction(100, 2));

// const person = () => {
//   let FirstName = "John";
//   console.log(typeof FirstName + " " + FirstName);
// };

// person();

// const personDetail = {}  // Object
// const persons = []  // Array

// const personDetail = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 26,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(personDetail.fullName());

// let text = 'We are the so-called "Vikings" \
// from the north.';

// console.log(text);

// let x = 'Lorem ipsum dolor sit "amet" consectetur adipisicing elit.'; // string
// let y = new String(x); // object

// console.log(x === y);

// x === y // value end data type check
// x == y // value check

// console.log(x.length);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7); // Banana
// console.log("====================================");
// console.log(part);
// console.log("====================================");

// let text = "Apple, Banana, Kiwi";
// let rep = text.replace("Banana", "mango");
// console.log("====================================");
// console.log(rep);
// console.log("====================================");

// let text = "Please visit microsoft and microsoft! , Microsoft";
// let y = text.replace(/Microsoft/i, "CodeKaro");

// console.log("====================================");
// console.log(y);
// console.log("====================================");

// let y = text.toUpperCase()
// let y = text.toLowerCase();

// console.log("====================================");
// console.log(y);
// console.log("====================================");

// let x = "Hello";
// let y = "World!";

// let z = x.concat(y);
// console.log("====================================");
// console.log(z);
// console.log("====================================");

// const girls = ["g1", "g2", "g3", "g4"];
// const boys = ["b1", "b2", "b3"];

// const children = girls.concat(boys);
// console.log("====================================");
// console.log(children.length);
// console.log("====================================");

// let x = 5;
// let y = String(x);
// let price = y.padEnd(5, "0");
// console.log(price, ":", typeof y);

// let word = "H,E,L,L,O";
// console.log(word.length);
// word = word.split(",");

// len = word.length;
// console.log(len);

// let text = "";
// let i;
// for (i = 0; i < len; i++) {
//   text += word[i] + "<br>";
// }

// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate", 8);

// console.log(`index: ${index}`);

// let y = ` let's Play "Game" `;
// console.log(y);

// ctrl + ~`

// var products = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 10.99,
//     description: "This is product 1.",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 19.99,
//     description: "This is product 2.",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     price: 7.49,
//     description: "This is product 3.",
//   },
//   {
//     id: 4,
//     name: "John Doe",
//     price: null,
//     description: "SAKSBDKLANSD ;LNLASNDL",
//   },
// ];

// let render = products.map((x) => {
//   return `
//     <div style="background-color: lightGray; padding: 10px; border: 2px solid green; width: fit-content">
//       <h1>${x.name}</h1>
//       <p>${x.price}</p>
//       <p>${x.description}</p>
//     </div>
//   `;
// });

// render = render.join("");

// document.getElementById("demo").innerHTML = render;

// let x = `Hello
// World`

// console.log(typeof x);

// let firstName = "John";
// let lastName = "Doe";

// let fullName = `My Name is ${firstName + " " + lastName}`;
// console.log(fullName);

// let x = 10;
// let y = 20;
// let z = "30";
// let a = 50;
// let result = x + y + z + a;
// console.log(result);
// 30201050
// 303050

// let _x = "Hello"
// let _y = "World!"

// console.log(_x + _y); // Hello World!

// let num = 100
// let fru = "Apple"
// let result = num / fru
// console.log(result); //NaN

// console.log(typeof NaN); // Number

// let num = 124
// num = new Number(num)
// console.log(num); // Number

// let x = 41
// x = toString(x)
// console.log(typeof x);

// let x = 9.656
// console.log(x.toFixed(6));
// console.log(x.toPrecision(6));

// Array.isArray(fruits)

// let demo = document.getElementById("demo");

// let fruits = ["Banana", "Apple", "Kiwi", "Mango", "Orange", "Watermelon"];

//* for loop
// let len = fruits.length;
// console.log(len);
// let list = "<ul>";
// for (let x = 0; x < len; x++) {
//   list += `<li>${fruits[x]}</li>`;
// }
// demo.innerHTML = list
// list = "</ul>";

//* ForEach function
// let text = "<ul>";
// fruits.forEach((state) => (text += `<li>${state}</li>`));
// text += "</ul>";

// document.getElementById("demo").innerHTML = text;

//* Push method
// const language = ["HTML", "CSS", "JavaScript"];
// demo.innerHTML = language;

// function myLang() {
//   language.push("React");
//   demo.innerHTML = language;
// }
// myLang()

// (function () {
//   language.push("React");
//   demo.innerHTML = language;
// })();

//* join method

// const language = ["HTML", "CSS", "JavaScript"];
// demo.innerHTML = x;

// language.pop();
// language.push("MongoDb");
// language.shift();
// language.unshift("React");
// language[1] = "JSX";
//! Do not use delete method
// delete language[0];
// console.log(language[0]);
// language.unshift("HTML");
// language.splice("2", "0", "Python");
// let x = language.slice("1");
// console.log(typeof x);
// x.sort();
// x.reverse()
// demo.innerHTML = x;

// let demo = document.getElementById("demo");
// const num = [3, 53, 12, 76, 9];

// let sorted = num.sort(function (a, b) {
//   return a - b;
// });

// demo.innerHTML = sorted;

// demo.innerHTML = num.sort();

//? Array Sorting

// const languages = ["z", "HTML", "CSS", "javaScript", "node js", "Python", "A"];
// console.log(languages);
// console.log(languages.sort());
// console.log(languages.sort().reverse());

// const num = [40, 100, 1, 5, 25, 10];
// console.log(num);
// console.log(num.sort());

//? Number Sorting method
// console.log(
//   num.sort((a, b) => {
//     return a - b;
//   })
// );

// const cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
// ];

// cars.sort((a, b) => {
//   return a.year - b.year;
// });

// function displayCars() {
//   document.getElementById("demo").innerHTML =
//     cars[0].type +
//     " " +
//     cars[0].year +
//     "<br>" +
//     cars[1].type +
//     " " +
//     cars[1].year +
//     "<br>" +
//     cars[2].type +
//     " " +
//     cars[2].year;
// }

// displayCars();

//? Using ForEach Function
// const numbers = [45, 4, 9, 16, 25];

// let text = "";
// numbers.forEach((chagan) => {
//   text += chagan + "<br>";
// });

// document.getElementById("demo").innerHTML = text;

//? Map Method

// let renderArray = numbers.map((x) => {
//   return x;
// });

// document.getElementById("demo").innerHTML = renderArray;

/*
? Array Iteration > Array every()
*/

// const numbers = [45, 4, 9, 16, 25, 99];

// numbers.shift()

// console.log(
//   numbers.findIndex((x) => {
//     return x > 18
//   })
// )

// let date = new Date()

// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getDate());
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

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// const date = new Date()
// console.log(months[date.getMonth()] + " " + days[date.getDay()]);

// const date = new Date()
// date.setFullYear(2025)
// console.log(date);
// console.log(date.getFullYear());

//? Boolean

// console.log("5" == 5); // value
// console.log("5" === 5); // data type , value

// console.log(9 > 10);
// console.log(9 < 10);

// console.log(Number(false));
// console.log(Number(true));

// let result = 10 < 20 ? "Yes" : "No"
// console.log(result);

//? if else or else if, Ternary Operator

// let x = true
// if (x == false) {
//   console.log("Condition True");
// } else {
//   console.log("condition false");
// }

// let date = new Date()

// if (date.getHours() < 10) {
//   console.log("Good Morning");
// } else if (date.getHours() < 20) {
//   console.log("Good Day");
// } else {
//   console.log("Good Night");
// }

// console.log(date.getHours());

// let result = 10 < 20 ? "Yes" : "No"
