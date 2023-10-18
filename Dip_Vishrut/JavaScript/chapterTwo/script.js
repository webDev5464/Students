// let demo = document.getElementById("demo");
//! Array

// const language = ["HTML", "CSS", "JavaScript"];

//* array convert to string
// let x = language.toString();
// demo.innerHTML = typeof x;

//* How to confirm is Array ?
// const language = "javaScript";
// let x = Array.isArray(language);
// console.log(x);

//* Create array dirent method.
//* Method One
// const lang = [];
// lang[0] = "JavaScript";
// lang[1] = "HTML";
// lang[2] = "CSS";

// console.log(lang);

//* Method Two
// const lang = new Array("HTML", "CSS", "JavaScript");
// console.log(Array.isArray(lang));
// console.log(lang);

//* How to get last index ?
// const language = ["HTML", "CSS", "JavaScript"];
// console.log(language.length);
// console.log(language[language.length - 1]);

//* Index with value change
// language[1] = "React";
// console.log(language);

//* For loop
// const language = ["HTML", "CSS", "JavaScript", "React"];

// let unOrder = "<ul>";
// for (let x = 0; x < language.length; x++) {
//   unOrder += `<li>${language[x]}</li>`;
// }
// unOrder += "</ul>";

// demo.innerHTML = unOrder;

//* forEach Function

// let unOrder = "<ul>";
// language.forEach(loopFunction);
// unOrder += "</ul>";

// demo.innerHTML = unOrder;

// function loopFunction(x) {
//   unOrder += "<li>" + x + "</li>";
// }

//* Arrow Function

// const language = ["HTML", "CSS", "JavaScript"];
// let unOrder = "<ul>";
// language.forEach((x) => (unOrder += "<li>" + x + "</li>"));
// unOrder += "</ul>";
// demo.innerHTML = unOrder;

//* d.Structuring
// const frontend = ["HTML", "CSS", "JavaScript", "React"];
// const backend = ["NodeJs", "MongoDb", "dJango", "PHP"];

// const fullStack = [...frontend, ...backend];
// console.log(fullStack);

// const fullStack = frontend.concat(backend);
// demo.innerHTML = fullStack.join(" | ")
// console.log(fullStack);

//! Array Methods

// const lang = ["HTML", "CSS", "JS"];
// lang.push("React");
// lang.pop()
// lang.shift()
// lang.unshift("MongoDb");

//? ['MongoDb', 'HTML', 'CSS', 'JS', 'React']

// lang.splice("1", "4");
// lang.splice("3", "0", "NodeJs");
// console.log(lang);

//? ['MongoDb', 'HTML', 'CSS', 'NodeJs', 'JS', 'React']
//! Warning : Do not use Delete method.
// delete lang[2];
// console.log(lang);

// console.log(lang.length);
// let newLanguage = lang.slice(1, 4);
// console.log(newLanguage);

//? Array Sorting

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// console.log(fruits.sort());
// console.log(fruits.sort().reverse());

// const points = [40, 100, 1, 5, 25, 10];
// console.log("Alphabetically : " + points.sort());

// let result = points.sort((a, b) => {
//   return a - b;
// });
// console.log("Numeric : " + result);

//? Random Number sort

// let demo = document.getElementById("demo");
// const points = [40, 100, 1, 5, 25, 10];
// demo.innerHTML = points;

// function randomMethod() {
//   points.sort(() => {
//     return 0.5 - Math.random();
//   });
//   demo.innerHTML = points;
// }

// let demo = document.getElementById("demo");
// const cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
// ];

// cars.sort((a, b) => {
//   return a.year - b.year;
// });

// let result = "";

// for (let x = 0; x < cars.length; x++) {
//   result += cars[x].type + " " + cars[x].year + "<br>";
// }

// demo.innerHTML = result;

//! Date

// const toDate = new Date()
// console.log(toDate.getTime());

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

// let x = date.setMonth(11)
// console.log(x);

//! Boolean end if else

//? Boolean
// console.log(Number(10 < 9));

// == :- value
// === :- value Datatype

// let y = "6" // string
// let x = 6 // Number

// console.log(y === x);

//? if else 

// const hours = new Date().getHours();
// console.log(hours);
// let greeting = "";

// if (hours < 10) {
//   greeting = "Good Morning";
// } else if (hours < 20) {
//   greeting = "Good Day";
// } else {
//   greeting = "Good Evening";
// }

// console.log(greeting);