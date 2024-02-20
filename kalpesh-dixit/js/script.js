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

// let input = document.getElementById('input')
// let text = document.getElementById('text')

// function submitBtn() {
//   if (isNaN(input.value)) {
//     text.innerHTML = "Require number not a string"
//   } else if (input.value.length > 8) {
//     text.innerHTML = "too high"
//   } else if (input.value.length < 4) {
//     text.innerHTML = "too low"
//   } else {
//     text.innerHTML = "Submit"
//   }
// }

//? ternary operator

// let text = ""
// if (5 > 4) {
//   text += "Right"
// } else {
//   text += "Wrong"
// }

// console.log(text);

// let result = 5 > 4 ? "Right" : 5 == 5 ? "Yes" : "No"
// console.log(result);

// if (5 < 4) {
//   console.log(true);
// } else if (5 === "5") {
//   console.log("Yes");
// } else {
//   console.log("false");
// }

//! try catch statement

function submitBtn() {
  let text = document.getElementById('text')
  let input = document.getElementById('input').value
  let spArr = ["_", "-", "@", "$", "&", "#"]


  let password = input;
  let result = false
  let temp = false
  for (let a = 0; a < password.length; a++) {
    let check = spArr.includes(password[a]);
    if (check) {
      temp = true

    } else {
      temp = false

    }
    if (temp) {
      result = temp
    }
  }


  if (!result) {
    text.innerHTML = 'special caracter is required'
  }else{
    text.innerHTML = ''
  }

  console.log(result)



  try {
    if (!input) throw "Input is blank"
    if (isNaN(input)) throw "Require only number"
    Number(input)
    let inputLength = input.length
    if (inputLength < 4) throw "To low"
    if (inputLength > 8) throw "To high"
    if (inputLength >= 4 && inputLength <= 8) throw "Submitted"
  } catch (myMsg) {
    text.innerHTML = myMsg
  } finally {
    document.getElementById('input').value = ""
  }
}

// let x = 5
// try {
//   x.toUppercase()
// } catch (e) {
//   console.log(e.message);
// }

//todo == , === , < , > , <= , >= , != , !value , || , &&

// let x = 5
// console.log((x == 5) && (x == 5) ? true : false)

//! backtick
// let x = "John"

// console.log(`Hello ${x}`);

//! Loops

/*
  map - function
  forEach - function
  for
  for in
  for of
  while
  do while
*/

const language = ['html', 'css', 'javascript', 'nodejs', 'expressjs', 'mongodb', 'nextjs', 'python']

// const users = [
//   {
//     fname: "John",
//     lname: "Doe",
//     age: 28
//   },
//   {
//     fname: "Chagan",
//     lname: "Chapri",
//     age: 19
//   },
//   {
//     fname: "Magan",
//     lname: "Bloger",
//     age: 23
//   },
//   {
//     fname: "Banty",
//     lname: "Slow",
//     age: 39
//   }
// ]

// let renderData = document.getElementById('renderData')

//? map() :- function

// renderData.innerHTML = users.map((myVal) => {
//   return `<h1>${myVal.fname} ${myVal.lname}</h1>`
// })

// --------------------------------

// let text = ""

// users.map((x) => {
//   text += `<h1>${x.fname} ${x.lname}</h1>`
// })

// renderData.innerHTML = text

// --------------------------------

// users.map((x) => {
//   console.log(`<h1>${x.fname} ${x.lname}</h1>`);
// })

//? forEach()

// let text = ""

// users.forEach((x) => {
//   text += `<h1>${x.fname} ${x.lname}</h1>`
// })

// console.log(text);
// renderData.innerHTML = text

//? for

// let text = ""
// for (let x = 0; x < users.length; x++) {
//   text += `${users[x].fname}`
// }

// console.log(text);

//? for in

// let text = ""
// for (let x in language) {
//   text += x
// }

// document.getElementById("renderData").innerHTML = text

//? for of

// let text1 = ""
// for (let x of language) {
//   console.log(x);
// }

//? while loop

// let text = ""
// let x = 0
// while (x < language.length) {
//   text += language[x] + "\t"
//   // console.log(language[x]);
//   x++
// }

// console.log(text);

//? do while loop

// let text = ""
// let x = 0

// do {
//   text += language[x] + "\t"
//   // console.log(language[x] + "\t");
//   x++
// } while (x > language.length)

// console.log(text);