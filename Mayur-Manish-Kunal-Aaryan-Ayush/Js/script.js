// document.getElementById("demo").innerHTML = "Hello World";

// console.log("Hello World!")

// let
// const
// var

// let x = 5;
// const y = 5;
// var z = 5;

// console.log(z);

// var x = 10;
// console.log(x);

// var x = 12;
// console.log(x);

// let x = 12;
// console.log(x);

// {
// let x = 24;
// console.log(x);
// }

// const y = 4;

// {
// const y = 7;
// console.log(y);
// }

// {
// const y = 414;
// console.log(y);
// }

// console.log(y);

// console.log(y);

// var d = 10;

// {
//   var d = 12;
// }

// console.log(d);

// ===============================================

// let x = 5;  // Valid
// let _x = 5;   // Valid
// let _x_ = 5;  // Valid
// let $x = 5;   // Valid
// let $x$ = 5;  // Valid
// let x5 = 5;   // Valid
// let $x_5 = 5;   // Valid

// let x y = 5 // invalid
// let 5x = 5 // invalid
// let #x = 5 // invalid
// let %x = 5 // invalid

// ================================================

// let x = 5;
// console.log(x);

// x = 7
// console.log(x);

// const y = 10
// console.log(y);

// y = 15
// console.log(y);

// let switch = 5
// console.log(const);

// let x = 6
// x += 6
// console.log(x);

// let x = "16";
// let y = "16";
// let z = x + y;

// let a = "Hello";
// let b = 10;
// let c = 20;

// let z = a + b + c;
// let z = b + c + a;

// console.log(z);

// Single quote inside double quotes:
// let answer1 = "It's alright";

// Single quotes inside double quotes:
// let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
// let answer3 = 'He is called "Johnny"';

// console.log(answer1);
// console.log(answer2);
// console.log(answer3);

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[2]);

// const person = ["John", "Smith", "Lio"];

// const personDetail = { fName: "John", lName: "Doe", age: 22 };
// console.log(personDetail.fName + " " + personDetail.lName);

// const today = new Date();
// console.log(today);

// let car = "";
// document.getElementById("demo").innerHTML = car;

// function myFunction(a, b) {
//   return a * b;
// }
// console.log(myFunction(50, 2));

// const ArrowFunction = (a, b) => {
//   return a / b;
// };
// console.log(ArrowFunction(100, 2));

// const person = () => {
//   let FirstName = "John";
//   console.log(typeof FirstName + " " + FirstName);
// };

// person();

// const personDetail = {}  // Object
// const persons = []  // Array

// const personDetail = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 26,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(personDetail.fullName());

// let text = 'We are the so-called "Vikings" \
// from the north.';

// console.log(text);

// let x = 'Lorem ipsum dolor sit "amet" consectetur adipisicing elit.'; // string
// let y = new String(x); // object

// console.log(x === y);

// x === y // value end data type check
// x == y // value check

// console.log(x.length);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7); // Banana
// console.log("====================================");
// console.log(part);
// console.log("====================================");

// let text = "Apple, Banana, Kiwi";
// let rep = text.replace("Banana", "mango");
// console.log("====================================");
// console.log(rep);
// console.log("====================================");

// let text = "Please visit microsoft and microsoft! , Microsoft";
// let y = text.replace(/Microsoft/i, "CodeKaro");

// console.log("====================================");
// console.log(y);
// console.log("====================================");

// let y = text.toUpperCase()
// let y = text.toLowerCase();

// console.log("====================================");
// console.log(y);
// console.log("====================================");

// let x = "Hello";
// let y = "World!";

// let z = x.concat(y);
// console.log("====================================");
// console.log(z);
// console.log("====================================");

// const girls = ["g1", "g2", "g3", "g4"];
// const boys = ["b1", "b2", "b3"];

// const children = girls.concat(boys);
// console.log("====================================");
// console.log(children.length);
// console.log("====================================");

// let x = 5;
// let y = String(x);
// let price = y.padEnd(5, "0");
// console.log(price, ":", typeof y);

// let word = "H,E,L,L,O";
// console.log(word.length);
// word = word.split(",");

// len = word.length;
// console.log(len);

// let text = "";
// let i;
// for (i = 0; i < len; i++) {
//   text += word[i] + "<br>";
// }

// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate", 8);

// console.log(`index: ${index}`);

// let y = ` let's Play "Game" `;
// console.log(y);

// ctrl + ~`

// var products = [ 
//   {
//     id: 1,
//     name: "Product 1",
//     price: 10.99,
//     description: "This is product 1.",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 19.99,
//     description: "This is product 2.",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     price: 7.49,
//     description: "This is product 3.",
//   },
//   {
//     id: 4,
//     name: "John Doe",
//     price: null,
//     description: "SAKSBDKLANSD ;LNLASNDL",
//   },
// ];

// let render = products.map((x) => {
//   return `
//     <div style="background-color: lightGray; padding: 10px; border: 2px solid green; width: fit-content">
//       <h1>${x.name}</h1>
//       <p>${x.price}</p>
//       <p>${x.description}</p>
//     </div>
//   `;
// });

// render = render.join("");

// document.getElementById("demo").innerHTML = render;
