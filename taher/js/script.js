//! Data types

/*
  String
  Number
  Boolean
  Undefined

  Object
*/

// const name = "John"

// const rollNumber = 8

// const isAdmin = false

//! function

// function MyFunction(price, qty) {
//   return price * qty
// }

// console.log(MyFunction());


//? Arrow function

// console.log(myFunction());

// function myFunction() {
//   return "Hello"
// }


// myFunction()

// const myFunction = () => {
//   console.log("Hello World");
// }

// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 72,
//   fullname: () => {
//     return person.fname + " " + person.lname
//   }
// }

// console.log(person.fullname());


// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 72,
//   fullname: function () {
//     return this.fname + " " + this.lname
//   }
// }

// console.log(person.fullname());

//? Callback function

// function callBack(name, cal) {
//   return cal(`Hello ${name}`)
// }

// console.log(callBack("John", (val) => {
//   return val
// }));

//! if else and else if

// if (5 === "5") {
//   console.log(true);
// } else if (5 == 5) {
//   console.log("Hello");
// } else {
//   console.log(false);
// }

//? ternary operator

// 5 !== 6 ? console.log("second condition") : console.log(false);

// 5 == 6 ? console.log(true) : 5 !== 6 ? console.log("second condition") : console.log(false);

//! operators

//? Arithmetic

// const num1 = 10;
// const num2 = 20;

// console.log(num1 + num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 - num2);
// console.log(5 ** 2);

// let val = 5
// val--
// console.log(val);

//? Assignment

// let a = 5

// a = a + 5

// a += 5
// a -= 5
// a *= 5
// a /= 5
// a %= 5
// a **= 5

// console.log(a);

//? Comparison

// console.log(5 == 5);
// console.log(5 === "5");
// console.log(5 != "6");
// console.log(5 !== 5);
// console.log(3 < 4);
// console.log(3 > 4);
// console.log(3 >= 3);
// console.log(3 <= 5);

//? Logical

//* and operator
// console.log(5 == 5 && 6 === 6);

//* or operator
// console.log(5 == 6 || 6 !== 6);

//* not operator
// const val = "Hello"

// console.log(!Number(val));

//! try catch

// function submitHandler() {
//   try {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const username = document.getElementById("username").value
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value

//     if (!username || !email || !password) throw "Input fields are required."
//     if (!emailRegex.test(email)) throw "Somethings wrong in your email."


//   } catch (xyz) {
//     console.log(xyz);
//   } finally {
//     document.getElementById("username").value = ""
//     document.getElementById("email").value = ""
//     document.getElementById("password").value = ""
//   }
// }

// const val = 15

// try {
//   console.log(eval("alert(Hello World!')"));
// } catch (msg) {
//   console.log(msg.name, msg.message);
// }

//! BOM

//? setTimeout()

//? setInterval()

//? localStorage

//! Date() , setDate() , getDate()

//! DOM