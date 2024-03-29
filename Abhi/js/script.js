//! Js Introduction

// document.getElementById("heading").innerHTML = "Hello JavaScript"

// function hideFunction() {
//   document.getElementById("hideElement").style.display = "none"
// }

// function showElement() {
//   document.getElementById("hideElement").style.display = "block"
// }

//! What is variable

// let myVar = "Hello Js"

// console.log(myVar)
// document.getElementById("heading").innerHTML = myVar

//* type of variable

/*
 * let
 * const
  var
*/

// let x = 5
// const y = 6
// var b = 9

// console.log(x);
// console.log(y);
// console.log(b);

//* Why not use var ? reason - 1

// let x = 10
// let x = 15

// const x = 15

// var x = 15
// var x = 10

// console.log(x);

//! blockScope

// let x = 5
// console.log(x); // 5

{

  // console.log(x); // 5

  // let x = 15

  // console.log(x); // 15

}

// console.log(x); // 5

// -------------------------

// const x = 5
// console.log(x); // 5

// {

//   // console.log(x); // 5

//   const x = 15

//   console.log(x); // 15

// }

// console.log(x); // 5

// ---------------------

//* Why not use var ? reason - 2

// var x = 6

// console.log(x); // 6

// {

//   console.log(x); // 6

//   var x = 9

//   console.log(x); // 9

//   var x = 19

//   console.log(x); // 19
// }

// console.log(x); // 19

//! What is deferent let and const

// let x = 5

// console.log(x); // 5

// x = 10
// console.log(x); // 10

// ---------------------

// const x = 5

// console.log(x); // 5

// x = 15 // err
// console.log(x); // err

//! Assignment Operator

// let x = 5
// let y = 10

// let z = x + y
// console.log(z);

// let z = x - y
// console.log(z);

// let z = x * y
// console.log(z);

// let z = x / y
// console.log(z);

// let z = x % y
// console.log(z);

// let z = 10 ** 2
// console.log(z);

// console.log(x); // 5
// x++ // increment
// console.log(x); // 6

// console.log(y); // 10
// y-- // decrement
// console.log(y); // 9

//! Asthmatic Operator

// let x = 10

// x = x + 5
// console.log(x);

// x += 5
// console.log(x);

// x -= 5
// console.log(x);

// x *= 5
// console.log(x);

// x /= 5
// console.log(x);

// x %= 5
// console.log(x);

// x **= 5
// console.log(x);

//! Datatype's

// let render = document.getElementById("render")

//? string

// let message = "Hello 'World!'" // string

// let $message = 'Hello World!, \
// this is a "JavaScript"'

// console.log(typeof message);

// template
// let strTem = `message :
// ${message}`
// console.log(typeof strTem);

// render.innerHTML = <h1>Hello Js</h1>

// let numstr = "5"

// console.log(typeof Number(numstr));

//? Number

// let x = 5
// console.log(x);

//? boolean

// let x = false
// let y = true

// console.log(typeof x);
// console.log(Number(x)); // 0
// console.log(Number(y)); // 1

//? object

//-------------------------------

//* Array

// const language = ["HTML" , "CSS" , "JavaScript"]
// console.log(language[2] + " " + language[0]);
// console.log(typeof language);

// console.log(Array.isArray(language));

// const backendLanguage = ["React" , "Nodejs" , "MongoDb"]

// const newArr = language.concat(backendLanguage)
// console.log(typeof newArr);

//-------------------------------

//* object

// const personData = {
//     fName: "John",
//     lName: "Doe",
//     age: 27
// }

// console.log(personData.fName + " " + personData.lName);

//-------------------------------

//* null

// let x = null
// console.log(typeof x);

//? undefine

// let $x = undefined
// console.log(typeof $x);

//? NaN

// let _x = NaN // Not a Number
// console.log(typeof _x); // number

//! Function

// function MyFunction() {
//   console.log("Hello World!");
// }

// MyFunction()

// function totalFunc(a, b) {
//   return a + b
// }

// console.log(totalFunc(10, 15));
// console.log(totalFunc(100, 50));
// console.log(totalFunc(200, 700));

//* arrow

// const MyArrowFunc = () => {
//   console.log("Hello World!");
// }

// MyArrowFunc()

// const decrementtation = (x, y) => {
//   return x - y
// }

// console.log(decrementtation(10, 5));

//* ------------

// MyFunc()

// function MyFunc() {
//   console.log("Simp Func");
// }

// MyArrFunc()

// const MyArrFunc = () => {
//   console.log("Arr Func");
// }

// let x = 5
// let y = 6
// let z = 5

// if (x || y == z) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (x && y == z) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//? Example :

// let themeContent = document.getElementById("themeContent")

// function changeTheme() {
//   let $class = themeContent.getAttribute("class")

//   if ($class == "box light") {
//     themeContent.setAttribute("class", "box dark")
//   } else {
//     themeContent.setAttribute("class", "box light")
//   }
// }

//! Array methods

// const language = ["HTML", "CSS", "JavaScript", "React"]

// language.pop()
// language.push("Node js")
// language.shift()
// language.unshift("Github")

// language.splice(0, 2)
// language.splice(3, 0, "Node js", "Mongodb")

// console.log(language.length);

// let x = language.toString()
// console.log(x);

// console.log(language);

//? for loop

// const render = document.getElementById("render")
// const language = ["HTML", "CSS", "JavaScript", "React"]
// const $length = language.length

// let text = ""
// for (let x = 0; x < $length; x++) {
//   // text +=
//   console.log(language[x]);
// }

// render.innerHTML = text

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

//* for

// const userlegh = users.length
// let $render = ""

// for (let x = 0; x < userlegh; x++) {
//   $render += `<h1>${users[x].fname + " " + users[x].lname}</h1>`
// }

// document.getElementById("render").innerHTML = $render

//* map (function)

// const mapLoop = users.map((x) => {
//   return `<h1>${x.fname + " " + x.lname}</h1>`
// })

// console.log(mapLoop.join(""));
// document.getElementById("render").innerHTML = mapLoop.join("")

//* forEach (function)

// let render = ""

// users.forEach((x) => {
//   render += `<h1>${x.fname + " " + x.lname}</h1>`
// })

// console.log(render);
// document.getElementById("render").innerHTML = render

//* for in loop

// let text = ""
// for (x in users) {
//   text += " " + users[x].fname
// }

// console.log(text);

//* for of loop

// let text = ""
// for (x of users) {
//   text += x.fname
// }

// console.log(text);

//* while loop

// let lang = users.length
// let x = 0
// let text = ""

// while (x > lang) {
//   text += users[x].fname
//   x++
// }

// console.log(text);

//* do while loop

// text = ""
// let lang = users.length
// let x = 0

// do {
//   text += users[x].fname
//   x++
// } while (x < lang)

// console.log(text);

//! Break and continue

// let text = ""
// let x = 0

// for (; x < 10; x++) {
//   if (x == 5) {
//     // break;
//     continue;
//   }

//   text += x + "\n"
// }

// console.log(text);

//! Date

// const date = new Date()

// console.log(date.getFullYear());
// console.log(date.getMonth()); // index : 0
// console.log(date.getDate());
// console.log(date.getDay()); // index : 0
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// console.log(date.setMonth(2));

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

//! if else

// if (5 > 10) {
//   console.log('Yes 5 is less 10');
// } else {
//   console.log('no');
// }

// let y = 5
// let x = 5
// let z = 6

//! if else , else if

// if (5 !== 5) {
//   console.log(true);
// } else if (10 > 20) {
//   console.log("center value");
// } else {
//   console.log(false);
// }

//! ternary operator

// let compar = 5 !== 10 ? true : false

// console.log(compar);

//! or operator ( || )

// console.log(1 || 5 == 6 ? true : false);

//! and operator ( && )

// console.log(6 && 5 == 5 ? true : false);

//! try catch

// function submitBtn() {
//   let input = document.getElementById('input').value
//   let text = document.getElementById('text')

//   try {

//     if (isNaN(input)) throw "Require only number"
//     if (input.trim() == "") throw "Please fill input"
//     input = Number(input)
//     if (input < 4) throw "to low"
//     if (input > 8) throw "to high"
//     if (input > 4 || input < 8) throw "Done"

//   } catch (msg) {
//     text.innerHTML = msg
//   } finally {
//     if (input > 4 || input < 8) {
//       document.getElementById('input').value = ""
//     }
//   }
// }

//! switch statement
// let date = new Date()
// console.log(date.setMonth(1));

// function submitBtn() {

//   let inputVal = Number(document.getElementById('input').value)
//   let text = document.getElementById('text')

//   switch (inputVal) {
//     case 0:
//       console.log(false);
//       break;

//     case 1:
//       console.log(true);
//       break;
//   }

// }

// const x = new Date().getDay();

// let days;

// switch (x) {
//   case 6:
//     days = "Saturday";
//     break;

//   case 0:
//     days = "Sunday";
//     break;

//   default:
//     days = "Looking forward to the Weekend";
// }

// console.log(days);


// try {

//   eval("alert('hello)")

// } catch (chagan) {
//   console.log(chagan.message);
//   console.log(chagan.name);
// }


/*
  * error
  * DOM
*/