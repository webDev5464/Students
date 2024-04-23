/*
  * Install nodemon for terminal run automatically :- npm install nodemon
  * Reinstall node_modules :- npm install
*/

// document.getElementById("demo").innerHTML = "Hello World!"

//! type's of variables

/*
  const, let, (var : ES5)
*/

// const x = 5
// let y = 6
// var a = 10

// document.getElementById("demo").innerHTML = x
// console.log(x)
// console.log(y);

//? how to use variable

// const x = 10 //! ERR
// const x = 20 //! ERR
// var x = 20 //! ERR

// console.log(x);

// var a = 5

// var a = 12

// var a = "Chagan"

// console.log(a);

//? what is different let or const

// let y = 10

// y = 20 + y
// y += 20

// console.log(y);

// const x = 5

// x = 20

// console.log(x);

//! Block Scope

// const x = 5
// const y = 10

// {
//   console.log(y); // 10
//   const x = 20
//   console.log(x); // 20
// }

// console.log(x); // 5

//? var using in blockScope

// var x = 'chagan'

// {

//   console.log(x);

//   var x = 'magan'

// }

// console.log(x); // magan

//? let or const

// let x = 5

// console.log(x);

// x = 10

// const x = 5

// x = 10

// console.log(x);

//! Assignment Operator

// let x = 5
// let y = 10

// console.log(x + y);
// console.log(x - y);
// console.log(x / y);
// console.log(x % y);
// console.log(x * y);

//! Arithmetic Operator

// let x = 5
// let y = 10

// x++
// x--
// x += 50
// x -= 50
// x /= 50
// x %= 50
// x *= 50

// console.log(x);

//! Data type

/*
  string, object, boolean, number, undefine, null
*/

// let x = "5"

// console.log(typeof x);

// let x = 5 // Number
// let x = '5' // String

//* Object

// let myArr = [5, 7, 3, 9] // Array, Object
// let persons = ['chagan', 'magan', 'Chintu', 'pintu'] // object, array
// persons[1]

// console.log(typeof persons);

// How to check array ? Array.isArray(persons) :- true|false

// let persons = []
// console.log(Array.isArray(persons));

//* Object

// let users = { fname: "john", lname: "Doe", age: 22 }
// let result = "My full name is " + users.fname + ' ' + users.lname + ' My age is ' + users.age
// console.log(result);

//* Array in objects

// const Datas = [
//   { fname: "John", lname: "Doe", age: 22 },
//   { fname: "Magan", lname: "Bloger", age: 26 },
//   { fname: "Chagan", lname: "Chapri", age: 16 }
// ]

// console.log(Datas[1].fname + " " + Datas[1].lname);

//? undefine

// let x;

// console.log(typeof x);

//? null

// let x = null

// console.log(typeof x);
// console.log(Array.isArray(x)); // false

//? boolean

// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

//! function & fat arrow function

// function myFunction() {
//   console.log("Clicked Button");
// }

//* -------------------------------------

// console.log(myFunction_1(5, 10));

// function myFunction_1(a, b) {
//   return a + b
// }

//* -------------------------------------

// function myFunc() {
//   return "Hello World!"
// }

// document.getElementById('demo').innerHTML = `<h1>${myFunc()}</h1>`

//? fet arrow function

// const myFunction_2 = (a, b) => {
//   return a + b
// }

// console.log(myFunction_2(15, 35));

//? Object in function

const person = {
  // fname: "John",
  // lname: "Doe",
  // age: 29,
  /* fullname: () => {
    return person.fname + ' ' + person.lname
  } */

  /* fullname: function () {
    return this.fname + ' ' + this.lname
  } */
}

// console.log(person.fullname());

//! Backtick

// let x = "John"

// let msg = `Hello ${x}` //* String

// console.log(msg);

//! if else & else if , Ternary Operator

// let x = 5
// let y = 6
// let z = 7

// if (x == y) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (x == y) {
//   console.log("Yes x == y");
// } else if (x == z) {
//   console.log("Yes x == z")
// } else {
//   console.log("Something Wrong");
// }

//? Ternary Operator

// console.log(5 == 6 ? true : false);
// console.log(5 === "5" ? true : false);

/*
* [ Home Work ] :- Condition Operators

  ==
  ===
  ! :- not operator
  !=
  !==
  >
  <
  >=
  <=

  ? Logical Operators

  || :- or operator
  && :- and operator

*/

//! loop's

/*
  map - function //? important
  forEach - function
  for - loop, for in, for of //? important
  while - loop
  do...while - loop
*/

// const demo = document.getElementById("demo")
// const mernStack = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React js",
//   "Node js",
//   "Express js",
//   "MongoDB",
//   "Bootstrap 5 CSS",
//   "Tailwind CSS",
//   "Git - Github"
// ]

//* Map method

// demo.innerHTML = mernStack.map((e) => {
//   return `<h1>${e}</h1>`
// }).join("")

//* forEach method

// let text = ""

// mernStack.forEach((e) => {
//   text += `<h1>${e}</h1>`
// })

// demo.innerHTML = text

//* for

// for (let init = 1 ; init <= 10; init++) {
//   console.log(init);
// }

// let text = ""
// for (let init = 0; init < mernStack.length; init++) {
//   text += `<h1>${mernStack[init]}</h1>`
// }

// demo.innerHTML = text

//* for in
// index

// for (let x in mernStack) {
//   console.log(x);
// }

//* for of
// value

// for (let x of mernStack) {
//   console.log(x);
// }

//* while

// let text = ""
// let init = 0
// let value = 0
// while (init < 10) {
//   console.log(value++);
//   // init++
// }

//* do while

// let text = ""
// let init = 0
// let value = 0

// do {
//   console.log(value++);
//   init++
// } while (init > 10)
