//! Type's of variable

// let
// var
// const

//! how to create variable

//? let
// let chagan = 12
// console.log(chagan)

//* not valid same name variable
// let x = 5
// let x = 7
// console.log(x);

//* updated value

// let x = 5
// 5

// x = 9
// console.log(x); // 9


//? const
// const magan = "Hello World!"
// console.log(magan);

//* not valid same name variable
// const y = 10
// const y = 12
// console.log(y);

//* not updated value (const is constant variable)

// const a = 11
// console.log(a);

// a = 15
// console.log(a);


//? var
// var person = "Hello, My name is magan, i'm 26 year old."
// console.log(person)

//* valid same name variable
// var z = 9
// console.log(z);

// var z = 19

//* valid update value

// var e = 5
// 5

// e = 10
// 10

// console.log(e);

//! block scope

//? let

// let b = 15

// {
//   let b = 20

//   console.log(b); // 20
// }

// console.log(b); // 15

//? const

// const personName = "John"

// {
//   const personName = "Smith"
//   console.log(personName); // Smith
// }

// // console.log(personName); // John

//? var

// var lol = "25"
// console.log(lol);
// // 25

// {

//   console.log(lol);
//   // 25

//   var lol = 30
//   console.log(lol);
//   // 30
// }

// console.log(lol); // 30

//! Data types

/*
  - String
  - Number
  - Boolean
  - Object
*/

//? string

// let msg = "Hello World!"

// let message = 'Hello World!'

// const numm = "10"

// console.log(typeof numm);

//? Number

// const num = 10

// console.log(typeof num);

//? boolean

// let init = true // 1
// let unInit = false // 0

// console.log(Number(init)); // 1
// console.log(Number(unInit)); // 0

//? Object

//* Array

// const language = ["HTML", "CSS", "JavaScript"]
// console.log(language);

// console.log(language[1], language[2]);

// console.log(typeof language); // object

// console.log(Array.isArray(language)); // true


// let languageValue = language[0]
// console.log(languageValue);

//* Object

// const personData = { fname: "John", lname: "Doe", age: 22 }

// console.log(typeof personData);

// console.log(personData.fname);

// let personMessage = "My name is " + personData.fname + " " + personData.lname

// console.log(personMessage);

//! Operators

// const x = 10 + 5

// const y = 15 + 20

// console.log(x + y);

// let x = 5
// let y = 10

// console.log(x - y);
// console.log(x / y);
// console.log(x % y);

// console.log(x ** 2);

//? increment
// x++
// console.log(x);

//? decrement
// x--
// console.log(x);

//! Assignment Operator

// let x = 5
// let y = 20

// x = x + y
// console.log(x);

// x += y
// console.log(x);

//! Function

// function myFunction(x, y) {
//   return x ** y
// }

// document.getElementById("demo").innerHTML = myFunction(10, 2)

// function myFunction() {
//   let y = 20
//   let x = 50

//   let z = y + x

//   console.log(z);
// }

// myFunction()

//? Arrow Function
// console.log(myFunction(100, 50));

// const myFunction = (x, y) => {
//   return x - y
// }

// function myFunction(x, y) {
//   return x - y
// }

//? object in function

// const person = {
//   fName: "John",
//   lName: "Doe",
//   age: 22,
//   fullName: function () {
//     return this.fName + " " + this.lName
//   }
// }

// console.log(person.fullName());

//! String Method

// let person = "John"

// let person = 'John'

// let plyers = "Let's play"

// let plyers = 'Let"s play'

// let dataString = "Lorem ipsum sit amet consectetur adipisicing elit. Ad recusandae provident a sapiente sit repudiandae aspernatur vero voluptatum officia earum ipsa natus delectus odio quasi optio, et omnis? Nesciunt, explicabo."
// console.log(dataString.length);

// let text = "Apple, Banana, Kiwi";

// let result = text.slice(7, 13)
// console.log(result);

// let text = "Please visit Microsoft Microsoft MICROSOFT!";
// let result = text.replace("Microsoft", "Magan")
// console.log(text.replace(/Microsoft/gi, "Magan"));
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// let fName = "John"
// let lName = "Doe"

// console.log(fName + " " + lName);
// console.log(fName.concat(" ", lName));

// let text = "      Hello World!       "

// console.log(text.length);

// let result = text.trim()

// console.log(result.length);

// let price = "5"

// let result = price.padStart("4", "0")
// console.log(result);

// let result = price.padEnd("4", "9")
// console.log(result);

// let text = "a,b,c,d,e,f";
// let text = "J,a,v,a,S,c,r,i,p,t"
// let $text = text.split(",")
// let leng = $text.length
// let print = ""

// for (let init = 0; init < $text.length; init++) {
//   print += $text[init] + "<br>"
// }

// document.getElementById("demo").innerHTML = print

// console.log(text[1]);
// let result = text.split(",")
// console.log(result[1]);