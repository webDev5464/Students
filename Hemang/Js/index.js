// document.getElementById("demo").innerHTML = "Hello JavaScript";

// let myPhoneBox = "Samsung Galaxy A50s";
// document.getElementById("demo").innerHTML = myPhoneBox;
// document.getElementById("demo").innerHTML = "<h1>" + myPhoneBox + "</h1>";

//! Debugging

// console.log("Hello Hemang")

//! Type of Variables

/* 
1. let 
2. const
3. var
*/

// demo = document.getElementById("demo");
// let myName = "Hemang"; // String
// demo.innerHTML = "<h1>" + myName + "</h1>";
// console.log(myName);

// const age = 22;
// demo.innerHTML = age;

// let x = 5
// console.log(x);

//? Kem var no use nathi karta ?

// let y = 5;
// let y = 8;

// console.log(x)

// const x = 2;
// const x = 7;

// var a = 9

// console.log(a);

// var a = 10

// console.log(a);

//! Block Scope

// const myName = "deven"
// console.log(myName);

// {
//   const myName = 'Hemang';
//   console.log(myName);
// }

// console.log(myName);

// {
//   const myName = "Chagan"
//   console.log(myName);
// }

// console.log(myName);

// +++++++++++++++++++

// var x = 5

// console.log(x);

// {
//   var x = 9
//   console.log(x);
// }

// console.log(x);

//! Variable name

//? Valid
// let x = 5;
// let _x = 5;
// let _x_ = 5;
// let $x = 6;
// let $_x = 6;
// let _5 = 5;
// let $$$$$$ = 5;
// let $5 = 5

//? Invalid
// let 5name = 5
// let 5_ = 5
// let &5 = 5

// ! What is deferent let end const

// let x = 5;
// console.log(x);

// x = 10; // Update
// console.log(x);

// const y = 5;
// console.log(y);

// y = 10

//! Data types

//? 8 type's of data types

/* 

1. String
2. Number 
3. Boolean
4. object
- 5. Bigint 
6. undefined
7. null
- 8. symbol

*/

//* How to check data type with variable :- typeof(variableName)

//? What is string

// let dabbleQuotes = "Chagan Chapri";
// let singleQuotes = "Chagan Chapri";

// let ex = "Let's play";
// console.log(ex);
// let ex2 = 'Let"s Play'
// console.log(ex2);

//? Number

// let x = 6;
// console.log(typeof x);

//? Boolean

// let a = true;
// console.log(Number(a) + " " + "true");

// let b = false;
// console.log(Number(b) + " " + "false");

//? Undefined

// let x;

// console.log(typeof x);

//? null

// let x = null;
// console.log(x , ':' , typeof x);

//? Object

//* Object
// const personDetail = { firstName: "John", lastName: "Doe" };

// let fullName = personDetail.firstName + " " + personDetail.lastName;

// console.log(fullName);

// ----------------------

//* Array
/*
Array start with 0 index.
*/

// const persons = ["Hemang", "Deven", "Chagan", "Magan", "John"];

// console.log(persons[2]);

// ----------------------

//* Date
// let date = new Date();
// console.log("====================================");
// console.log(date);
// console.log("====================================");

// let x = 5;
// let b = 7; // number
// let y = "Hello"; // string

// let a = "10"; // string
// let b = 20; // String
// let c = 5;

// let x = 5; // Old value

// x = 10; // Updated Value

// x += 10 // addition

// x = 10 // Update

// console.log(x);

// let x = "let's play";

// let y = 'My Name is "John Doe"';

// let y = "My Name is \"John\". I'm a fullstack developer";

// "My Name is "
// ". I'm a fullstack developer"

// console.log(y);

// let y = "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
//  Unde provident, aliquid, enim modi quo fugit voluptas hic obcaecati tempore \
//  suscipit id exercitationem laboriosam corporis excepturi sit libero earum ut! Doloribus?";

// let y =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Unde provident, aliquid, enim modi quo fugit voluptas hic obcaecati tempore suscipit id\n exercitationem laboriosam corporis excepturi sit libero earum ut! Doloribus?";

// console.log(y);

// let x = 6;
// let y = 5;
// let z = 6;
// let a = "5";
// let b = "5";
// let c = "6"

// console.log(x == z);
// console.log(x == y);
// console.log(b === c);

// let Language = ["HTML", "CSS", "JavaScript", "React"]; // Array

// document.getElementById("demo").innerHTML = Language[0];

// let multiNumber = [1, 5, 2, 6, 7];

// console.log(multiNumber[4] + multiNumber[3] + multiNumber[2]);

// let fruits = ["apple", "Banana", "kiwi", "Mango"];

// console.log(fruits[2]);

// let personData = {
//   fName: "John",
//   lName: "Doe",
//   age: 22,
// };
// Object

// console.log(personData.fName + " " + personData.lName);

/*
* Array
! ["apple", "Banana", "kiwi", "Mango"]
? array[0] // apple

* Object
! { fName: "John", lName: "Doe", age: 22 }
? object.fName // John
*/

//? Array Object
// let data = [
//   { fName: "Hemang", lName: "Chavda", age: 22, from: "Dhandhuka" },
//   { fName: "Deven", lName: "Dave", age: 22, from: "Ahmedabad" },
//   { fName: "Jatin", lName: "Raval", age: 22, from: "Ahmedabad" },
// ];

// let HemangData = data[0].fName + " " + data[0].lName;
// console.log(HemangData);

//? Date

// date() is object
// console.log(typeof new Date());

//? Updated value
// let person = "John";
// Hre is : John
// person = "Hemang";
// Hre is : Hemang

//! Function

//? Simple Function

// function myFunction(a, b) {
//   console.log(a + b);
// }

// myFunction(5, 10);

//? Self using function

// (function (a, b) {
//   console.log(a + b);
// })(10, 20);

//? Arrow Function
// const myArr = (a, b) => {
//   return a * b;
// };

// console.log(myArr(10, 2));

//? Using Function end create logic like toggleTheme
// let heading = document.getElementById("heading");
// let condition = false;

// function toggleTheme() {
//   if (condition == false) {
//     heading.style.backgroundColor = "black";
//     heading.style.color = "white";
//     condition = true;
//   } else {
//     heading.style.backgroundColor = "white";
//     heading.style.color = "black";
//     condition = false;
//   }
// }

//? If Else Example
// let creamOnion = true;

// if (creamOnion == true) {
//   console.log("cream End Onion");
// } else {
//   console.log("Kurkure");
// }

//? Object in using function

// let person = {
//   fName: "John",
//   lName: "Doe",
//   age: 22,
//   fullName: function () {
//     return this.fName + " " + this.lName;
//   },
// };

// console.log(person.fullName());

//! String

// let y = "Let's play"
// let x = "Hello \"asd\" World"
// console.log(x);

//? Length

// let p = "Lorem ipsum dolor sit,adipisicing elit. Neque explicabo dolore eligendi, blanditiis error sint excepturi? Molestiae voluptate molestias temporibus, illum, repellat placeat ullam quidem magni blanditiis ducimus sint aliquid!"

// console.log(p.length);

//* replace

// let text = "Please visit Microsoft! , Microsoft , MICROSOFT";
// let x = text.replace(/Microsoft/gi, "HelloWorld");
// console.log(x);

// let x = "     Hello World!           ";
// console.log(x.length); // 28
// console.log(x.trim().length); // 12
// console.log(x.trimEnd().length); // 17
// console.log(x.trimStart().length); // 23

//* String match

// let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match(/ain/gi)

// console.log(result);

//! String template

// let person = "hemang"
// esc bottom side (`) or (~)
// console.log(`Hello ${person}`);

// console.log(typeof ``); // String

// let x = `Let's play "Pubg"`
// console.log(x);

// let personData = [
//   { fName: "Hemang", lName: "Chavda", age: 22, from: "Dhandhuka" },
//   { fName: "Deven", lName: "Dave", age: 22, from: "Ahmedabad" },
//   { fName: "Jatin", lName: "Raval", age: 22, from: "Ahmedabad" },
// ]

// let renderData = personData.map((x) => {
//   return `
//     <p>${x.fName} ${x.lName}</p>
//   `
// })

// document.getElementById("renderHereData").innerHTML = renderData.join("")

//! Number Method

// let num = 9.656;
// const number =
//   num.toPrecision() +
//   "<br>" +
//   num.toPrecision(2) +
//   "<br>" +
//   num.toPrecision(4) +
//   "<br>" +
//   num.toPrecision(6);
// console.log(number);

//! Array

// const cars = ["Saab", "Volvo", "BMW"]
// console.log(typeof cars);
// console.log(Array.isArray(cars));
// console.log(cars[cars.length - 1]);
// cars[1] = "Not have car"
// console.log(cars);
// console.log(cars.toString());

//* for loop
// const language = ["html", "css", "javascript", "reactjs", "nodejs"]
// let renderLanguage = document.getElementById("renderLanguage")

// const languageLength = language.length
// // console.log(languageLength);
// let text = ""
// let x;

// for (x = 0; x < languageLength; x++) {
//   text += `<h2>${language[x]}</h2>`
// }

// renderLanguage.innerHTML = text

//* forEach loop
// const language = ["html", "css", "javascript", "reactjs", "nodejs"]
// let renderLanguage = document.getElementById("renderLanguage")

// let text = "<ul>"
// language.forEach((x) => {
//   text += `<li>${x}</li>`
// })
// text += "</ul>"

// renderLanguage.innerHTML = text

