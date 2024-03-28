//! What is variable

//* type's of variable

/*
  var, const, let
*/

// var harshad = "My Friend"
// let harshad = "My Friend"
// const harshad = "My Friend"

// document.getElementById("myId").innerHTML = harshad
// console.log(harshad)

//* do not use var : reason one
// var x = 5

// var x = 9

// console.log(x)

//* const & let

// let x = 5

// console.log(x);

// x = 10 //? update

// console.log(x);


// const person = "Chagan"

// person = "Magan"

// console.log(person);

//-----------------------

// const y = 10

// y = 20

// console.log(y); //! not update

//! BlockScope

// const x = 5

// {
//   console.log(x);
//   const y = 7
// }

// ------------------

// const x = 9

// {
//   console.log(x);
//   const _x = 5
// }

// console.log(_x);

//! Arithmetic Operators
// let x = 5
// console.log(x + 5);
// console.log(x - 3);
// console.log(x * 3);
// console.log(x / 3);
// console.log(x % 3);

// x++
// console.log(--x);

// console.log(5 ** 2);

//! Assignment Operators

// let a = 10;
// a += 30
// a -= 30
// a *= 30
// a /= 30
// a %= 30
// console.log(a);

//! Datatype

/* String, Number, Object - Array - Date, Boolean, null, undefine, NaN */

// const person = "Chagan" // String
// const rollNumber = "5" // String
// const contactNumber = 5 // Number

//* Object

// const language = ["HTML", "CSS", "Js", "React js", 5, 32, 6] // Object - Array
// console.log(language[0]);
//? console.log(Array.isArray(language)); // true or false

// const users = {
//   fName: "Chagan",
//   lName: "Chapri",
//   age: 16
// } // Object

// console.log(users.fName + " " + users.lName);

// const todayDate = new Date(); // Date
// console.log(todayDate)

//* Boolean

// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

//* Null & Undefined

// console.log(typeof null) // Object

// let c
// console.log(typeof c);

//* NaN

// console.log(typeof NaN); // Not a Number

//! Function, Arrow Function

// function myFunction() {
//   console.log("Hello World");

//   function nestingFunction() {
//     console.log("This is a nesting function");
//   }

//   nestingFunction()
// }

// myFunction()

// function cal() {
//   return "Hello World!"
// }

// document.getElementById("myId").innerHTML = cal()

// function calculation(p1, p2) {
//   return p1 + p2
// }

// console.log(calculation("World", "Hello"));

// console.log(myArrow());

// const myArrow = () => {
//   return "I am an arrow function"
// }

// const person = {
//   fname: "Chagan",
//   lname: "chatriWala",
//   fullname: function () {
//     return this.fname + " " + this.lname
//   }
// }

// console.log(person.fullname());

//! if else & else if statement, ternary operator

// if (5 != "5") {
//   console.log("Condition is true")
// } else if (4 >= 5) {
//   console.log("Second Condition is true")
// } else {
//   console.log("False");
// }

// console.log(a == b ? true : false);

// function checking(a, b) {
//   return a == b ? true : false
// }

// console.log(checking(10, 10));

/*
  ==
  ===
  !=
  !==
  <
  >
  <=
  >=
  &&
  ||
  !value
*/

/* const popupMsg = document.querySelector(".popupMsg")
function submitForm() {
  try {
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value
    const conPass = document.getElementById("conPass").value

    if (!username) throw "Username field is blank"
    if (!email) throw "email field is blank"
    if (!pass) throw "password field is blank"
    if (!conPass) throw "Confirm Password field is blank"
    if (pass !== conPass) throw "Password and confirm password does not match."

  } catch (x) {

    popupMsg.innerHTML = `Error :- ${x}` //! Backtick
    // popupMsg.getAttribute("class")
    popupMsg.setAttribute("class", "popupMsg active")

  } finally {
    document.getElementById("username").value = ""
    document.getElementById("email").value = ""
    document.getElementById("pass").value = ""
    document.getElementById("conPass").value = ""

    setTimeout(() => {
      popupMsg.innerHTML = ``
      popupMsg.setAttribute("class", "popupMsg notActive")
    }, 2000)
  }
} */

//! Array Method's
// const frt = ['Apple', 'Banana', 'Mango']

// frt.push('Kiwi')
// frt.pop()
// frt.unshift('Orange')
// frt.shift()
// frt.reverse()
// frt.sort()

// console.log(frt);

//! String Method

// let text = "Hello"
// text.reverse()
// console.log(text);
// console.log(text.toLowerCase());

//! Switch

/* const today = new Date()

switch (today.getDay()) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Error, invalid day number")
} */

//! Date
// const setYear = new Date()
// setYear.setFullYear(1987)
// console.log(setYear);

//! loops
/*
  map()
  forEach()
  for
  for in
  for of
  while
  do while
*/
// const render = document.getElementById('render')
// const language = ['html', 'css', 'javaScript', 'react', 'node js', 'express js', 'mongo db']

//? map()

// --------------------------------------
// let text = ""
// language.map((y) => {
//   text += y + "<br>"
// })

// render.innerHTML = text
// --------------------------------------

// render.innerHTML = language.map((x) => {
//   return x + "<br>"
// })

//? forEach

// let text = ""
// language.forEach((x) => {
//   text += x + "<br>"
// })

// render.innerHTML = text

//? Real Example

// const person = [
//   { fname: "Chagan", lname: "Chapri" },
//   { fname: "Magan", lname: "Bloger" },
//   { fname: "John", lname: "Doe" },
//   { fname: "Smith", lname: "Duck" },
//   { fname: "Mihir", lname: "Chapri" },
// ]

// console.log(person.map((x) => {
//   return x.fname + " " + x.lname
// })); // ['Chagan Chapri', 'Magan Bloger', 'John Doe', 'Smith Duck', 'Mihir Chapri']

// let text = ""
// person.forEach((x) => {
//   text += x.fname + " " + x.lname
// })
// console.log(text); // Chagan ChapriMagan BlogerJohn DoeSmith DuckMihir Chapri

// const showPeople = person.map((x) => {
//   return x.fname + " " + x.lname + "<br>"
// }).join("")

// render.innerHTML = showPeople

//! DOM & BOM

//* DOM // Document Object Model

// select element

// document.getElementById("render").innerHTML = "<h1>Hello</h1>"

/*
  const renderId = document.getElementById("render")
  renderId.setAttribute('class', 'chagan')
  const getClass = renderId.getAttribute("class")
  renderId.innerHTML = "<h1>Hello World!</h1>"
  console.log(getClass);
*/

/*
  const allClass = document.querySelectorAll(".myClass")
  console.log(allClass);
  allClass.forEach((e) => {
    e.innerHTML = "Hello"
  })
*/

/*
  const render = document.getElementById('render')
  const createHeading = document.createElement('h1')
  createHeading.innerHTML = "Hello World!"
  render.appendChild(createHeading)
*/

//TODO :- async & await
//TODO :- fetch API
//TODO :- localStorage, setTimeout, setInterval, windows
//TODO :- Error Handling
