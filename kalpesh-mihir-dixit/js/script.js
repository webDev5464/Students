// document.getElementById('heading').innerHTML = "Hello World!"

// console.log("Hello World!")

//! types of variable

// var variableName = 5

// console.log(variableName);

// let chagan = 5
// let _12chagan12 = "Hello"

// console.log(chagan);

//? variable type

/*
  var
  const
  let
*/

// var x = 5


// var x = 10

// console.log(x);

//! blockScope

// let x = 5

{
  // let x = 10

  // console.log(x);
  // console.log(x);
}

// console.log(x);


// function myFunction() {
// let y = 5
// console.log(y);
// }

// myFunction()

//? var
// var m = 5

// {
//   console.log(m);
//   var m = 9
// }

// console.log(m);

/*
? let
? const
*/

// let x = 5

// console.log(x); // 5

// x = 10

// console.log(x); // 10

// const x = 5

// console.log(x);

// x = 10

// console.log(x);

//! Arithmetic operator

// let x = 5

// console.log(x + 6);
// console.log(x - 6);
// console.log(x * 6);
// console.log(x / 6);
// console.log(x % 2);
// console.log(x ** 2);

// x++
// x--
// console.log(x);

//! assignment operator

// let x = 5

// console.log(x += 5);
// console.log(x -= 10);
// console.log(x *= 10);
// console.log(x /= 10);
// console.log(x %= 10);
// console.log(x **= 10);

//? QnA

// let x = 5
// let y = "10"

// console.log(typeof (y + x)); // 105

// console.log(x + 15 + y); // 2010

//! Datatypes

/*
  Number
  String
  Boolean
  Object - array, object, date, null
*/

// let age = 22 // Number
// console.log(typeof age);

// let person = "Chagan" // String
// console.log(typeof person);

// let x = 5

// console.log(typeof Number(x));
// console.log(typeof String(x));

// console.log(Number(false)); // 0
// console.log(Number(true)); // 1

//? Object - array

// const person = ["Chagan", 5, "John", "Duck"]

// console.log(typeof person);

// console.log(Array.isArray(person));

// console.log(person[1]);

//? object

// const user = { firstName: "John", lastName: "Doe" }

// console.log(user.firstName + " " + user.lastName);

//? date

// let today = new Date()
// console.log(today);

//? null

// console.log(null);

//? NaN (not a number)

// console.log(typeof NaN);

//? undefine

// let chagan;
// console.log(typeof chagan);

// let x = null

// x = [5, 6]

// console.log(x);

//! function

// myFunction(50, 15)

// function myFunction(a, b) {
//   console.log(a + b);
// }

// myFunction(5, 15)
// myFunction(15, 15)


// function func() {
//   return "Hello World!"
// }

// console.log(func());

// function myF(myVal) {
//   return "Hello " + myVal
// }

// console.log(myF(10));

// function myFunction() {
//   let heading = document.getElementById('heading')
//   heading.innerHTML = "Hello"
//   heading.style.backgroundColor = "tomato"
// }

//? arrowFunction

// const myFunction = () => {
//   console.log("Hello Chagan");
// }

// myFunction()

// const x = [5, 32, 6, 36]

// console.log(x.filter((val) => {
//   return 6 < val
// }));

//? object in function

// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 27,
//   fullname: () => {
//     return person.fname + " " + person.lname
//   }
// }

// console.log(person.fullname());

// function myFunction() {
//   let body = document.getElementById('body')
//   body.style.backgroundColor = "black"
//   body.style.color = "white"
// }

// function cal() {
//   let a = 10
//   let b = 2
//   return a * b
// }

// console.log(cal(10, 2));
// console.log(cal(10, 4));
// console.log(cal(10, 6));
// console.log(cal(10, 12));
// document.getElementById('heading').innerHTML = cal()

//! if else and else if || ternary operator

// if (5 < 10) {
//   console.log(true);
// } else {
//   console.log(false);
// }


// if (5 < 10) {
//   console.log(true);
// } else if (5 === 5) {
//   console.log("yes 5 == 5");
// } else {
//   console.log("Condition wrong");
// }

let input = document.getElementById('input')
let text = document.getElementById('text')

function submitBtn() {
  if (isNaN(input.value)) {
    text.innerHTML = "Require number not a string"
  } else if (input.value.length > 8) {
    text.innerHTML = "too high"
  } else if (input.value.length < 4) {
    text.innerHTML = "too low"
  } else {
    text.innerHTML = "Submit"
  }
}
