// const x = "Hello World!"
// document.getElementById("demo").innerHTML = x

// let x = "Hello World!";
// console.log(x)

// {
//   let x = 5;
// console.log(x);
// }

// {
//   let x = 12;
// }

// console.log(x);

// {
//   const y = "Hello";
//   console.log(y);
// }

// {
//   const y = "World";
// }

// {
//   var x = 9;
// }

// {
//   console.log(x);
//   var x = 6;
// }

// console.log(x);

// let x = 5
// let $x = 10
// let _x = 12
// let $$$x = 122
// let ____x = 14
// let x1 = ""

// let 1x = 12 // Wrong
// let x-1 = 33 // Wrong

// let x = 5;
// let y = 2;
// let z = x + y;

// console.log(z);

/* This
is
    a
    Multiple line
    Comment
*/

// const x = 10
// const y = x + 20
// console.log(y);

// x = 20
// console.log(x);

// let x = 10
// x += 6
// console.log(x);

// console.log(myFun(12, 2));

// function myFun(a, b) {
//   return a * b;
// }

// const myFun = function () {
//   return "Hello";
// };

// console.log(myFun());

// const x = (a, b) => {
//   return a / b;
// };

// document.getElementById("demo").innerHTML = x(50, 2);

// let text = "Outside : " + typeof car;
// console.log(text);

// function carDetail() {
//   let car = "Volvo";
//   let text = "Inside : " + typeof car + " " + car;

//   console.log(text);
// }

// carDetail();

// const person = {
//   fName: "John",
//   lName: "Doe",
//   age: 22,
//   fullName: function () {
//     return this.fName + " " + this.lName;
//   },
// };

// console.log(person.fullName());

// document.getElementById("demo").innerHTML =
//   "Hello My name is " + person.fName + "<br>" + "my age is " + person.age;

//? Array Loop

//* for loop

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length

// let unOrder = "<ul>"

// for (let inti = 0; inti < fLen; inti++) {
//   unOrder += `<li>${fruits[inti]}</li>`
// }

// unOrder += "</ul>"

// document.getElementById("demo").innerHTML = unOrder

//* forEach

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let text = ""
// fruits.forEach((x) => {
//   text += x + "<br>"
// })

// document.getElementById("demo").innerHTML = text

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log( fruits.join(""));
// console.log(fruits.toString());

// fruits.push("Kiwi")
// console.log(fruits);
// document.getElementById("demo").innerHTML = fruits

// console.log(fruits[fruits.length] = "Kiwi");

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"]

// let child = myBoys.concat(myGirls)
// console.log(child);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.splice(0, 1, "Kiwi")
// console.log(fruits);

//? Date

// const date = new Date()

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// date.setFullYear(2024)
// console.log(date);
// console.log(date.getFullYear());

// console.log(typeof date);

// const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
// ];

// console.log(months[date.getMonth()]);

// const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
// ];

// console.log(days[date.getDay()]);

//? Boolean

// console.log(10 > 9);

// console.log(Number(true));
// console.log(Number(false));

//? if else & else if

// if (10 > 9) {
//     console.log("True");
// } else {
//     console.log("false");
// }

//* ternary operator

// let result = 9 < 10 ? console.log("true") : console.log("false");

//* else if

// const date = new Date()

// if (date.getHours() < 9) {
//     console.log("Good Morning");
// } else if (date.getHours() < 11) {
//     console.log("good Day");
// } else {
//     console.log("Good Night");
// }

//! Switch Statement
// let date = new Date().getDay()
// console.log(date);
// let msg = ""

// switch (date) {
//     case 0:
//         msg += "Sunday"
//         break;

//     case 1:
//         msg += "Monday"
//         break;

//     case 2:
//         msg += "Tuesday";
//         break;

//     case 3:
//         msg += "Wednesday";
//         break;

//     case 4:
//         msg += "Thursday";
//         break;

//     case 5:
//         msg += "Friday";
//         break;

//     case 6:
//         msg += "Saturday";
// }

// console.log(msg);

//=========== Example ==============

// check index.html file
// function subBtn() {
//     let inputValue = Number(document.getElementById("inputValue").value)

//     switch (inputValue) {
//         case 1:
//             console.log(true);
//             break;

//         case 0:
//             console.log(false);
//             break

//         default:
//             console.log("Somethings Wrong");
//     }
// }

//! Loops

// let languages = ["HTML", "CSS", "JavaScript", "React", "Node js", "Python"]

// let loopRender = document.getElementById("loopRender")

// let text = ""

// let languagesLength = languages.length

//* for Loop

// for (let init = 0; init < languagesLength; init++) {
//     text += `<li>${languages[init]}</li>`
// }

// loopRender.innerHTML = `<ul>${text}</ul>`

//* for in

// for (let x in languages) {
//     text += `<li>${x} ${languages[x]}</li>`
// }

// loopRender.innerHTML = `<ul>${text}</ul>`

//* for of

// for (let x of languages) {
//     text += `<li>${x}</li>`
// }

// loopRender.innerHTML = `<ul>${text}</ul>`

//* while

// let init = 0
// while (init < languagesLength) {
//     console.log(languages[init] + "<br>");
//     init++
// }

// loopRender.innerHTML = text

//* do while

// let init = 0

// do {
//     text += languages[init] + "<br>"
//     init++
// } while (init < languagesLength)

// loopRender.innerHTML = text

//* forEach()

// let personData = [
//     {
//         fName: "John",
//         lName: "Doe",
//         age: 22
//     },
//     {
//         fName: "Smith",
//         lName: "Duck",
//         age: 29
//     },
//     {
//         fName: "Chagan",
//         lName: "Chapri",
//         age: 68
//     }
// ]

// let loopRender = document.getElementById("loopRender")
// let text = ""

// personData.forEach((e) => {
//     text += `<h1>${e.fName} ${e.lName}</h1>`
// })

// loopRender.innerHTML = text

//* map()

// let personData = [
//     {
//         fName: "John",
//         lName: "Doe",
//         age: 22
//     },
//     {
//         fName: "Smith",
//         lName: "Duck",
//         age: 29
//     },
//     {
//         fName: "Chagan",
//         lName: "Chapri",
//         age: 68
//     }
// ]

// let loopRender = document.getElementById("loopRender")
// let text = ""

// const render = personData.map((e) => {
//     return `<h1>${e.fName}</h1>`
// })

// loopRender.innerHTML = render.join("")