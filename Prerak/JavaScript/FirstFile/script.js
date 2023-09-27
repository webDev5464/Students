//! Debuting

// console.log("Hello World!");

//! Types Of Variable

// let
// var
// const

//! Hot To use variable ?

// let Name = "Hello World!";
// const userName = "John Doe!";
// var password = "1234Pass";

// console.log(Name);
// console.log(userName);
// console.log(password);

//! Block Scope

//? let

// {
//   let name = "JohnDoe";
//   console.log(name);
// }

// console.log(name);
// // Trow Err

// {
//   let name = "Chagan Chapri";
//   console.log(name);
// }

// var x = 5;
// console.log(x);

// var x = 8;
// console.log(x);

// let x = 5
// let x = 5

//! Do not use var

//? var
// {
//   var x = 7;
// }

// console.log(x);

// {
//   var x = 11;
// }

// console.log(x);

//? const

// {
//   const x = 11;
//   console.log(x);
// }

// {
//   const x = 22;
//   console.log(x);
// }

//! difference const & let

//? let

// let x = 12;
// console.log(x);

// x = 22;
// console.log(x);

//? const

// const y = 22;
// console.log(y);

// y = 33;
// console.log(y);

// let x = 3;
// let y = 2;
// let z = y / x;

// console.log(z);

// let text = "Hello";
// text += " World!";

// document.getElementById("demo").innerHTML = text;

// let x = 10;
// x **= 2;

// console.log(x);

//! Function

// function myFunction(v1, v2) {
//   return v1 * v2;
// }

// console.log(myFunction(5, 2));

// const myCal = function (v1, v2) {
//   return v1 / v2;
// };

// console.log(myCal(5, 2));

// const myF = (x, y, z) => {
//   return x + y;
// };

// console.log(myF(100, 50));

// function carDetail() {
//   let car = true;
//   let text = "Inside : " + typeof car + " " + car;

//   console.log(text);
// }

// let text = "Outside : " + typeof car;
// console.log(text);

// carDetail();

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 24,
//   eyeColor: "Brown",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.fullName());

// const person = {
//   firstName: "Chagan",
//   lastName: "Chapri",
//   age: 24,
//   eyeColor: "Brown",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.fullName());

// let text = "Please locate where 'Locate' occurs!";
// let index = text.search(/Locate/i); // 21
// console.log(index);

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const playList = [
//   {
//     id: "1",
//     name: "Bahon Mein Chale Aao",
//     path: "./audio/Bahon_Mein_Chale_Aao.mp3",
//     singer: "Lata Mangeshkar",
//     audioImg: "../audioImage/Bahon_Mein_Chale_Aao.jpeg",
//   },
//   {
//     id: "2",
//     name: "Jab Koi Baat Bigad Jaye",
//     path: "./audio/Jab_Koi_Baat_Bigad_Jaye.mp3",
//     singer: "Kumar Sanu",
//     audioImg: "../audioImage/Jab_Koi_Baat_Bigad_Jaye.jpeg",
//   },
//   {
//     id: "3",
//     name: "Pensees Mechta",
//     path: "./audio/Coding_deep/Pensees_Mechta.mp3",
//     singer: "Pensees",
//     audioImg: "../audioImage/all-one.jpeg",
//   },
//   {
//     id: "4",
//     name: "focus_track1",
//     path: "./audio/Focus/focus_track1.mp3",
//     singer: "Unknown",
//     audioImg: "../audioImage/all-two.jpeg",
//   },
//   {
//     id: "5",
//     name: "focus_track2",
//     path: "./audio/Focus/focus_track2.mp3",
//     singer: "Unknown",
//     audioImg: "../audioImage/all-three.jpeg",
//   },
// ];

// const renderMusic = playList.map((x) => {
//   return `
//     <h1>${x.name}</h1>
//     <p>${x.path}</p>
//   `;
// });

// let $renderMusic = renderMusic.join("");

// document.getElementById("demo").innerHTML = $renderMusic;
