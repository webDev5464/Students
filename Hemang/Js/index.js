// document.getElementById("demo").innerHTML = "Hello JavaScript";

// let myPhoneBox = "Samsung Galaxy A50s";
// document.getElementById("demo").innerHTML = myPhoneBox;
// document.getElementById("demo").innerHTML = "<h1>" + myPhoneBox + "</h1>";

//! Debugging

// console.log("Hello Hemang")

//! Type of Variables

/*
1. let
2. const
3. var
*/

// demo = document.getElementById("demo");
// let myName = "Hemang"; // String
// demo.innerHTML = "<h1>" + myName + "</h1>";
// console.log(myName);

// const age = 22;
// demo.innerHTML = age;

// let x = 5
// console.log(x);

//? Kem var no use nathi karta ?

// let y = 5;
// let y = 8;

// console.log(x)

// const x = 2;
// const x = 7;

// var a = 9

// console.log(a);

// var a = 10

// console.log(a);

//! Block Scope

// const myName = "deven"
// console.log(myName);

// {
//   const myName = 'Hemang';
//   console.log(myName);
// }

// console.log(myName);

// {
//   const myName = "Chagan"
//   console.log(myName);
// }

// console.log(myName);

// +++++++++++++++++++

// var x = 5

// console.log(x);

// {
//   var x = 9
//   console.log(x);
// }

// console.log(x);

//! Variable name

//? Valid
// let x = 5;
// let _x = 5;
// let _x_ = 5;
// let $x = 6;
// let $_x = 6;
// let _5 = 5;
// let $$$$$$ = 5;
// let $5 = 5

//? Invalid
// let 5name = 5
// let 5_ = 5
// let &5 = 5

// ! What is deferent let end const

// let x = 5;
// console.log(x);

// x = 10; // Update
// console.log(x);

// const y = 5;
// console.log(y);

// y = 10

//! Data types

//? 8 type's of data types

/*

1. String
2. Number
3. Boolean
4. object
- 5. Bigint
6. undefined
7. null
- 8. symbol

*/

//* How to check data type with variable :- typeof(variableName)

//? What is string

// let dabbleQuotes = "Chagan Chapri";
// let singleQuotes = "Chagan Chapri";

// let ex = "Let's play";
// console.log(ex);
// let ex2 = 'Let"s Play'
// console.log(ex2);

//? Number

// let x = 6;
// console.log(typeof x);

//? Boolean

// let a = true;
// console.log(Number(a) + " " + "true");

// let b = false;
// console.log(Number(b) + " " + "false");

//? Undefined

// let x;

// console.log(typeof x);

//? null

// let x = null;
// console.log(x , ':' , typeof x);

//? Object

//* Object
// const personDetail = { firstName: "John", lastName: "Doe" };

// let fullName = personDetail.firstName + " " + personDetail.lastName;

// console.log(fullName);

// ----------------------

//* Array
/*
Array start with 0 index.
*/

// const persons = ["Hemang", "Deven", "Chagan", "Magan", "John"];

// console.log(persons[2]);

// ----------------------

//* Date
// let date = new Date();
// console.log("====================================");
// console.log(date);
// console.log("====================================");

// let x = 5;
// let b = 7; // number
// let y = "Hello"; // string

// let a = "10"; // string
// let b = 20; // String
// let c = 5;

// let x = 5; // Old value

// x = 10; // Updated Value

// x += 10 // addition

// x = 10 // Update

// console.log(x);

// let x = "let's play";

// let y = 'My Name is "John Doe"';

// let y = "My Name is \"John\". I'm a fullstack developer";

// "My Name is "
// ". I'm a fullstack developer"

// console.log(y);

// let y = "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
//  Unde provident, aliquid, enim modi quo fugit voluptas hic obcaecati tempore \
//  suscipit id exercitationem laboriosam corporis excepturi sit libero earum ut! Doloribus?";

// let y =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Unde provident, aliquid, enim modi quo fugit voluptas hic obcaecati tempore suscipit id\n exercitationem laboriosam corporis excepturi sit libero earum ut! Doloribus?";

// console.log(y);

// let x = 6;
// let y = 5;
// let z = 6;
// let a = "5";
// let b = "5";
// let c = "6"

// console.log(x == z);
// console.log(x == y);
// console.log(b === c);

// let Language = ["HTML", "CSS", "JavaScript", "React"]; // Array

// document.getElementById("demo").innerHTML = Language[0];

// let multiNumber = [1, 5, 2, 6, 7];

// console.log(multiNumber[4] + multiNumber[3] + multiNumber[2]);

// let fruits = ["apple", "Banana", "kiwi", "Mango"];

// console.log(fruits[2]);

// let personData = {
//   fName: "John",
//   lName: "Doe",
//   age: 22,
// };
// Object

// console.log(personData.fName + " " + personData.lName);

/*
* Array
! ["apple", "Banana", "kiwi", "Mango"]
? array[0] // apple

* Object
! { fName: "John", lName: "Doe", age: 22 }
? object.fName // John
*/

//? Array Object
// let data = [
//   { fName: "Hemang", lName: "Chavda", age: 22, from: "Dhandhuka" },
//   { fName: "Deven", lName: "Dave", age: 22, from: "Ahmedabad" },
//   { fName: "Jatin", lName: "Raval", age: 22, from: "Ahmedabad" },
// ];

// let HemangData = data[0].fName + " " + data[0].lName;
// console.log(HemangData);

//? Date

// date() is object
// console.log(typeof new Date());

//? Updated value
// let person = "John";
// Hre is : John
// person = "Hemang";
// Hre is : Hemang

//! Function

//? Simple Function

// function myFunction(a, b) {
//   console.log(a + b);
// }

// myFunction(5, 10);

//? Self using function

// (function (a, b) {
//   console.log(a + b);
// })(10, 20);

//? Arrow Function
// const myArr = (a, b) => {
//   return a * b;
// };

// console.log(myArr(10, 2));

//? Using Function end create logic like toggleTheme
// let heading = document.getElementById("heading");
// let condition = false;

// function toggleTheme() {
//   if (condition == false) {
//     heading.style.backgroundColor = "black";
//     heading.style.color = "white";
//     condition = true;
//   } else {
//     heading.style.backgroundColor = "white";
//     heading.style.color = "black";
//     condition = false;
//   }
// }

//? If Else Example
// let creamOnion = true;

// if (creamOnion == true) {
//   console.log("cream End Onion");
// } else {
//   console.log("Kurkure");
// }

//? Object in using function

// let person = {
//   fName: "John",
//   lName: "Doe",
//   age: 22,
//   fullName: function () {
//     return this.fName + " " + this.lName;
//   },
// };

// console.log(person.fullName());

//! String

// let y = "Let's play"
// let x = "Hello \"asd\" World"
// console.log(x);

//? Length

// let p = "Lorem ipsum dolor sit,adipisicing elit. Neque explicabo dolore eligendi, blanditiis error sint excepturi? Molestiae voluptate molestias temporibus, illum, repellat placeat ullam quidem magni blanditiis ducimus sint aliquid!"

// console.log(p.length);

//* replace

// let text = "Please visit Microsoft! , Microsoft , MICROSOFT";
// let x = text.replace(/Microsoft/gi, "HelloWorld");
// console.log(x);

// let x = "     Hello World!           ";
// console.log(x.length); // 28
// console.log(x.trim().length); // 12
// console.log(x.trimEnd().length); // 17
// console.log(x.trimStart().length); // 23

//* String match

// let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match(/ain/gi)

// console.log(result);

//! String template

// let person = "hemang"
// esc bottom side (`) or (~)
// console.log(`Hello ${person}`);

// console.log(typeof ``); // String

// let x = `Let's play "Pubg"`
// console.log(x);

// let personData = [
//   { fName: "Hemang", lName: "Chavda", age: 22, from: "Dhandhuka" },
//   { fName: "Deven", lName: "Dave", age: 22, from: "Ahmedabad" },
//   { fName: "Jatin", lName: "Raval", age: 22, from: "Ahmedabad" },
// ]

// let renderData = personData.map((x) => {
//   return `
//     <p>${x.fName} ${x.lName}</p>
//   `
// })

// document.getElementById("renderHereData").innerHTML = renderData.join("")

//! Number Method

// let num = 9.656;
// const number =
//   num.toPrecision() +
//   "<br>" +
//   num.toPrecision(2) +
//   "<br>" +
//   num.toPrecision(4) +
//   "<br>" +
//   num.toPrecision(6);
// console.log(number);

//! Array

// const cars = ["Saab", "Volvo", "BMW"]
// console.log(typeof cars);
// console.log(Array.isArray(cars));
// console.log(cars[cars.length - 1]);
// cars[1] = "Not have car"
// console.log(cars);
// console.log(cars.toString());

//* for loop
// const language = ["html", "css", "javascript", "reactjs", "nodejs"]
// let renderLanguage = document.getElementById("renderLanguage")

// const languageLength = language.length
// // console.log(languageLength);
// let text = ""
// let x;

// for (x = 0; x < languageLength; x++) {
//   text += `<h2>${language[x]}</h2>`
// }

// renderLanguage.innerHTML = text

//* forEach loop
// const language = ["html", "css", "javascript", "reactjs", "nodejs"]
// let renderLanguage = document.getElementById("renderLanguage")

// let text = "<ul>"
// language.forEach((x) => {
//   text += `<li>${x}</li>`
// })
// text += "</ul>"

// renderLanguage.innerHTML = text

//? Array Methods
// const language = ["html", "css", "javascript", "reactJs", "nodejs"]
// console.log(language);
// console.log(language.pop());
// console.log(language.push("Python"));
// console.log(language.shift());
// console.log(language.unshift("django"));
// // delete language[2] // Do not use delete method

// // [ 'django', 'css', 'javascript', 'reactJs', 'Python' ]
// language.splice(4, 0, "PHP")
// console.log(language.length);
// console.log(language);
// console.log(language.toString());
// console.log(language.join(" * "));
// console.log(language.splice(3));

//? Array Sort

// const language = ["html", "css", "javascript", "reactJs", "nodejs"]
// console.log(language);
// console.log(language.sort());

// const aToz = ["A", "C", "G", "Q", "T", "V", "Y", "W", "Z", "E"]
// console.log(aToz.sort().reverse());

// const num = [40, 100, 1, 5, 25, 10]
// console.log(num);
// console.log(num.sort());

// const numberSort = num.sort((a, b) => {
//   return a - b
// })
// console.log(numberSort.reverse());

//? Array iteration

//* forEach() loop (function)

// const language = ["html", "css", "javascript", "reactJs", "nodejs"]

// let demo = document.getElementById("demo")

// let text = "<ul>"
// language.forEach((x) => {
//   text += `<li>${x}</li>`
// })
// text += "</ul>"

// demo.innerHTML = text

//* map() loop (function)

// const language = ["html", "css", "javascript", "reactJs", "nodejs"]
// let demo = document.getElementById("demo")

// let render = language.map((x) => {
//   return `
//     <li>${x}</li>
//   `
// })

// demo.innerHTML = `<ul>${render.join("")}</ul>`

//* filter

// const numbers = [45, 4, 9, 16, 25];

// const filter = numbers.filter((val) => {
//   return val > 18
// })

// console.log(filter);

//* reduce

// const numbers = [45, 4, 9, 16, 25];

// const total = numbers.reduce((tol, val) => {
//   return tol + val
// })

// console.log(total);

//* every

// const numbers = [45, 20, 22, 27, 25];

// const checking = numbers.every((val) => {
//   return val > 18
// })

// console.log(checking);

//* some

// const numbers = [45, 4, 9, 16, 25];

// const checking = numbers.some((val) => {
//   return val > 18
// })

// console.log(checking);

//* find

// const numbers = [45, 4, 9, 16, 25];

// const checking = numbers.find((val) => {
//   return val > 18
// })

// console.log(checking);

//* findIndex

// const numbers = [45, 4, 9, 16, 25];

// const checking = numbers.findIndex((val) => {
//   return val > 18
// })

// console.log("Index: "+checking + ", Value : " + numbers[0]);

//* from

// const arr = Array.from("JavaScript")
// console.log(arr);

/* ---------- */

// const render = arr.map((x) => {
//   return x + "<br>"
// })

// document.getElementById("demo").innerHTML = render.join("")

//? /* Keys  */

// const arrKey = arr.keys()
// let text = ""

// for (let init of arrKey) {
//   text += init
// }

// console.log(text);

//! Date

// const date = new Date(2024, 11, 5, 12, 30, 59, 500)
// console.log(date);

//? get date

// const date = new Date()

// console.log(date.getFullYear());
// console.log(date.getMonth()); // 0 - 11
// console.log(date.getDate());
// console.log(date.getDay()); // 0 - 6
// console.log(date.getHours()); // 0 - 23
// console.log(date.getMinutes()); // 0 - 59
// console.log(date.getSeconds()); // 0 - 59
// console.log(date.getMilliseconds()); // 0 - 999

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

// let getMonths = months[date.getMonth()]
// console.log(getMonths);

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// let getDays = days[date.getDay()]
// console.log(getDays);

//? set date

// const date = new Date()

// date.setFullYear(2025)
// console.log(date.getFullYear());

// date.setMonth(11)
// console.log(date.getMonth());

// date.setDate(31)
// console.log(date.getDate());

// date.setHours(24)
// console.log(date.getHours());

// date.setMinutes(30)
// console.log(date.getMinutes());

// date.setSeconds(59)
// console.log(date.getSeconds());

// date.setMilliseconds(999)
// console.log(date.getMilliseconds());

//! Math method's

//? round

// console.log(Math.round(4.6));
// 5

// console.log(Math.round(4.5));
// 5

// console.log(Math.round(4.4));
// 4

//? ceil

// console.log(Math.ceil(4.3));
// 5

// console.log(Math.ceil(4.5));
// 5

// console.log(Math.ceil(4.6));
// 5

// console.log(Math.ceil(4));
// 4

// console.log(Math.ceil(-4.3));
// -4

// console.log(Math.ceil(-4));
// -4

//? floor

// console.log(Math.floor(4.9));
// 4

// console.log(Math.floor(4.7));
// 4

// console.log(Math.floor(4.4));
// 4

// console.log(Math.floor(4.2));
// 4

// console.log(Math.floor(-4.2));
// -5

//? trunc

// console.log(Math.trunc(4.9));
// 4

// console.log(Math.trunc(4.7));
// 4

// console.log(Math.trunc(4.4));
// 4

// console.log(Math.trunc(4.2));
// 4

// console.log(Math.trunc(-4.2));
// -4

//! Boolean

// console.log(10 < 9);

// console.log(10 > 9);

// console.log(Number(10 > 9)); // true :- 1

// console.log(Number(10 < 9)); // false :- 0

// console.log(5 == "5"); // true

// console.log(5 === "5"); // false

//! if else & else if

// if (10 < 9) {
//   console.log("true"); // true
// } else {
//   console.log("false"); // false
// }

// if (10 > 9) {
//   console.log("true"); // true
// } else {
//   console.log("false"); // false
// }

// const date = new Date()
// console.log(date.getHours());

// if (date.getHours() < 12) {
//   console.log("good Morning");
// } else {
//   console.log("Good Day");
// }

//* ternary operator

// let date = new Date()
// let result = date.getHours() < 14 ? "True" : "False"
// console.log(result);

//* else if

// if (date.getHours() < 12) {   // 12:00Am pehla
//   console.log("Good Morning");
// } else if (date.getHours() < 17) { // 05:00Pm pehla
//   console.log("Good Afternoon");
// } else if (date.getHours() < 20) { // 08:00pm pehla
//   console.log("Good Evening");
// } else { // 08:00pm pachi
//   console.log("Good Night");
// }

//! Switch statement

// let init = true

// switch (init) {
//   case true:
//     console.log("true");
//     break;

//   case false:
//     console.log("false");
//     break;
// }

//* ---- day message -----

// const date = new Date()
// const hours = date.getHours()
// console.log(hours);

// let text = ""
// switch (true) {
//   case hours < 12:
//     text += "Good Morning"
//     break;

//   case hours < 17:
//     text += "Good Afternoon"
//     break;

//   case hours < 20:
//     text += "Good Evening"
//     break;

//   default:
//     text += "Good night"
// }

// console.log(text);

//* ----- the days -----

// const x = new Date().getDay()
// console.log(x);

// let days = ""
// switch (x) {
//   case 0:
//     days = "Sunday";
//     break;
//   case 1:
//     days = "Monday";
//     break;
//   case 2:
//     days = "Tuesday";
//     break;
//   case 3:
//     days = "Wednesday";
//     break;
//   case 4:
//     days = "Thursday";
//     break;
//   case 5:
//     days = "Friday";
//     break;
//   case 6:
//     days = "Saturday";
// }

// console.log(days);

//* ---- the months ----

// let text = ""
// switch (new Date().getMonth()) {
//   case 0:
//     text += "January"
//     break;

//   case 1:
//     text += "February"
//     break;

//   case 2:
//     text += "March"
//     break;

//   case 3:
//     text += "April"
//     break;

//   case 4:
//     text += "May"
//     break;

//   case 5:
//     text += "June"
//     break;

//   case 6:
//     text += "July"
//     break;

//   case 7:
//     text += "August"
//     break;

//   case 8:
//     text += "September"
//     break;

//   case 9:
//     text += "October"
//     break;

//   case 10:
//     text += "November"
//     break;

//   case 11:
//     text += "December"
//     break;
// }

// console.log(text);

//* ---- using multiple condition ----

// let text;

// switch (new Date().getDay()) {
//   case 4:
//   case 5:
//     text = "Soon it is Weekend";
//     break;
//   case 0:
//   case 6:
//     text = "It is weekend";
//     break;
//   default:
//     text = "Looking forward to the  Weekend";
// }

// console.log(text);

//! Loop
const language = ["HTML", "CSS", "JavaScript", "React", "Nodejs", "MongoDb"]

let renderingLoop = document.getElementById("renderingLoop")

let text = ""

//* for

// for (let init = 0; init < language.length; init++) {
//   text += `<li>${language[init]}</li>`
// }

// renderingLoop.innerHTML = text

//* for in

/*
  array index print
*/

// for (let x in language) {
//   text += x + "<br>"
// }

// renderingLoop.innerHTML = text

//* for of

/*
  array value print
*/

// for (let x of language) {
//   text += x + "<br>"
// }

// renderingLoop.innerHTML = text

//* while

// let init = 0
// while (init < language.length) {
//   text += language[init] + "<br>"
//   init++
// }

// renderingLoop.innerHTML = text

//* do while

// let init = 0

// do {
//   text += language[init] + "<br>"
//   init++
// } while (init < language.length)

// renderingLoop.innerHTML = text

//* forEach()

// const personData = [
//   {
//     fName: "John",
//     lName: "Doe",
//     age: 22
//   },
//   {
//     fName: "Smith",
//     lName: "Duck",
//     age: 29
//   },
//   {
//     fName: "Chagan",
//     lName: "Chapri",
//     age: 68
//   }
// ]

// let render = ""
// personData.forEach((e) => {
//   render += `
//     <h1>${e.fName} ${e.lName}</h1>
//     <p>${e.age}</p>
//   `
// })

// renderingLoop.innerHTML = render

//* map()

// const personData = [
//   {
//     fName: "John",
//     lName: "Doe",
//     age: 22
//   },
//   {
//     fName: "Smith",
//     lName: "Duck",
//     age: 29
//   },
//   {
//     fName: "Chagan",
//     lName: "Chapri",
//     age: 68
//   }
// ]

// const render = personData.map((x) => {
//   return `
//     <h3>My name is ${x.fName + " " + x.lName}</h3>
//     <p>i'm ${x.age} year old.</p>
//   `
// })

// renderingLoop.innerHTML = render

//! ---- Extra tips ----

// let text = []
// console.log(text);

// function addValue() {
//   text.push("Hello Hemang")
//   console.log(text);

//   renderingLoop.innerHTML = text
// }
