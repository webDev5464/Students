//! Type's Of Variable

// let
// const
// var

//! Debuting

// console.log("Hello")

//! How to declare variable

// let magan = "my name is magan.";

// const myAge = 22;

// var fullName = "Magan Chapri";

// document.getElementById("demo").innerHTML = fullName;

// console.log(magan + " " + myAge);

// console.log("My Full Name " + fullName);

// let x, y;

// x = 5;
// y = 7;

// console.log(x - y);

//! Variable Name

// let myName = "John" // True
// let _myName = "Doe" // true
// let $myName = "Smith" // true
// let myAge_22 = 22 // true

// let my name = "lol" // false
// let 1age = 22 // false
// let %asd = 22 // false

// ++++++++++++++++++++++++++++++++++++++++++++++++++

//? 1. Problem (Not use var)
// var myName = "John"
// John

// var myName = "Doe"
// Doe

//! Block Scope

// let x = 5;
// 5

{
  // let x = 10;
  // 10
}

// 5

{
  // let x = 20
  // 20
}

// 5

// ------------

// const y = 10

{
  // const y = 50
  // 50
}

// 10

// -----------

// var z = 9
// console.log(z);
// 9

{
  // console.log(z);
  // 9
  // var z = 6
  // console.log(z);
  // 6
}

// console.log(z);
// 6

// var z = 999
// console.log(z);
// 999

// using const

//? ++++++++++++ Type of Operators ++++++++++++

// {
//   let x = 5;
//   let y = 7;
//   let z = x + y;
//   console.log(z);
// }

// {
//   let x = 5;
//   let y = 7;
//   let z = x - y;
//   console.log(z);
// }

// {
//   let x = 5;
//   let y = 7;
//   let z = x * y;
//   console.log(z);
// }

// {
//   let x = 5;
//   let y = 7;
//   let z = x / y;
//   console.log(z);
// }

// {
//   let x = 5;
//   let y = 2;
//   let z = y ** x;
//   console.log(z);
// }

// {
//   let x = 6;
//   let y = 2;
//   let z = x % y;
//   console.log(z);
// }

// {
// let x = 5;
// console.log(x);

//   x++;
//   console.log(x);

// x *= 10
// console.log(x);

//   x++;
//   console.log(x);
// }

// {
//   let x = 5;

//   x--;

//   console.log(x);
// }

//? ++++++++ Data Type's ++++++++++

//! String

// {
// let myName = "John Doe"
// console.log(myName);

// let x = 'My Name is "John"';
// console.log(x);

// let y = "let's play pubg";

// let x = 'let\'\s Go'
// console.log(x);

// let x = "5";
// let y = "5";
// console.log(typeof x);

// let z = x + y;
// console.log(z);
// }

//! Number

// {
//   let x = 5;
//   console.log(typeof x + " " + x);
// }

// {
//   let x = true;
//   let y = false;

//   console.log(x + " " + x);
//   console.log(y + " " + y);
// }

//! Undefined

// {
//   let x;
// let y = "";
//   console.log(typeof x);
// }

//! Object

// {
//* -------- Object ------------
// let person = { FirstName: "John", LastName: "Doe", age: 22 };

// console.log(person);
// let personDetail = person.FirstName + " " + person.LastName;
// personDetail = "My name is" + " " + personDetail;
// console.log(personDetail + ". My age is " + person.age);

// console.log(typeof person);

//* ----------- Array ------------
// let x = ["Dip", "Vishrut", "Jigar", "Deven"];
// console.log(x[0], x[2]);
// console.log(typeof x);

//* ---------- Date --------------
// let myDate = new Date();
// console.log(myDate);
// }

//? +++++++++ Function +++++++++++

// let demo = document.getElementById("demo");

// demo.innerHTML = 0;

// function addition() {
//   demo.innerHTML++;
// }

// function decrement() {
//   demo.innerHTML--;
// }

// let condition = false;

// function theme() {
//   if (!condition) {
//     condition = true;
//     demo.style.backgroundColor = "black";
//     demo.style.color = "white";
//   } else {
//     condition = false;
//     demo.style.backgroundColor = "white";
//     demo.style.color = "black";
//   }
// }

// let age = 61;

// const person = () => {
//   if (age < 18) {
//     demo.innerHTML = "To small";
//   } else if (age <= 60) {
//     demo.innerHTML = "perfect age";
//   } else {
//     demo.innerHTML = "to big";
//   }
// };

// console.log("====================================");
// console.log(myF(10, 2));
// console.log("====================================");

// function myF(a, b) {
//   return a * b;
// }

// console.log("====================================");
// console.log(myArr(10, 5));
// console.log("====================================");

// const myArr = (a, b) => {
//   return a * b;
// };

//! Object

// const myDetail = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 22,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log("====================================");
// console.log(myDetail.fullName());
// console.log("====================================");

// let person = myDetail.firstName + ' ' + myDetail.lastName
// console.log('====================================');
// console.log(person);
// console.log('====================================');

// let text =
//   'We are the\
//  so-called "Vikings" from the north.';

// console.log("====================================");
// console.log(text);
// console.log("====================================");

//! String

// let x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(x.length);

// let x =
//   'Lorem ipsum \n dolor \nsit amet "consectetur" adipisicing elit. Quis, quibusdam.';

// console.log(x);

// let x = "Hello World!";
// let y = new String(x);

// console.log(x === y);

// let x = "Apple, Banana, Kiwi, Orange";
// console.log("====================================");
// console.log(x.slice(15, 19));
// console.log("====================================");

// let text = "Please visit microsoft!, Microsoft";
// let newText = text.replace(/Microsoft/ig, "CodeWithDw");
// console.log(newText);

// let x = "Hello";
// let y = "World!";

// console.log("====================================");
// // console.log(x, y);
// // console.log(x + " " + y);

// console.log(x.concat(" " + y));
// console.log("====================================");

// const girls = ["g1", "g2", "g3"];
// const boys = ["b1", "b2", "b3"];

// let x = girls.concat(boys);
// let y = girls + boys;

// console.log(typeof girls);

//! Using Array Object
// const data = [
//   {
//     fName: "John",
//     lName: "Doe",
//     age: 40,
//     fullName: function () {
//       return this.fName + " " + this.lName + "\nMy Age is " + this.age;
//     },
//   },
//   {
//     fName: "Jane",
//     lName: "Smith",
//     age: 67,
//     fullName: function () {
//       return this.fName + " " + this.lName + "\nMy Age is " + this.age;
//     },
//   },
//   {
//     fName: "Magan",
//     lName: "Khan",
//     age: 8,
//     fullName: function () {
//       return this.fName + " " + this.lName + "\nMy Age is " + this.age;
//     },
//   },
// ];

// //! render all data in html as s loop
// document.getElementById("data").innerHTML = data.map(function (x) {
//   return `
//     <h1>${x.fName} ${x.lName}</h1>
//   `;
// });

//! Template literals
// let x = `Hello "World", let's write code. \n My name is ${data[0].fullName()}`;
// console.log(x);

// let x = "                     Hello                          ";
// x = x.trim("")
// console.log(x.length);
// console.log(x);

// let x = "5";
// console.log(x.padStart(3, "0"));

// let text = "a,b,c,d,e,f";
// console.log(text[0]);

// const myArray = text.split("a");
// console.log(myArray[1]);

// let data = document.getElementById("data");

// let Heading = "H,E,L,L,O";
// console.log(Heading.length); // 9

// Heading = Heading.split(",");
// let len = Heading.length; // 5

// let text = "<ul>";
// for (let i = 0; i < len; i++) {
//   text += "<li>" + Heading[i] + "</li>";
// }
// text += "</ul >";

// data.innerHTML = text;
// document.getElementById("data").style.listStyle = "none";

// let data = document.getElementById("data");

// let renderData = product.map(function (x) {
//   return `
//     <div>
//       <img src="${x.img}" alt="ProductsImage">
//       <p>${x.title.slice(0, 80)}</p>
//       <p>${x.price}/-</p>
//     </div>
//   `;
// });

// data.innerHTML = renderData.join("");

// let x = "John";
// let y = "Doe";

// let data = document.getElementById("data");

// data.innerHTML = `<h1><span id="styles">${x}</span> ${y}</h1>`;

// document.getElementById("styles").style.color = "red";

// let header = "Templates Literals";
// let tags = ["template literals", "javascript", "es6"];

// let html = `<h1>${header}</h1><ul>`;

// for (const x of tags) {
//   html += `<li>${x}</li>`;
// }

// html += "</ul>";

// document.getElementById("demo").innerHTML = html;

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let render = "<ul>";

// for (const i of num) {
//   render += `<li class="list">${i}</li>`;
// }

// render += "</ul>";

// document.getElementById("demo").innerHTML = render;

// let num = 9.656;
// const number =
//   num.toFixed(0) +
//   "<br>" +
//   num.toFixed(1) +
//   "<br>" +
//   num.toFixed(4) +
//   "<br>" +
//   num.toFixed(6);
// console.log(number);

/*
10
9.66
9.6560
9.656000
*/

// let num = 9.656;
// const number =
//   num.toPrecision() +
//   "\n" +
//   num.toPrecision(2) +
//   "\n" +
//   num.toPrecision(4) +
//   "\n" +
//   num.toPrecision(6);
// console.log(number);