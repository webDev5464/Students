// document.getElementById("myId").innerHTML = "Hello World"

//! types of variable

/*
var
const
let
*/

// let myName = "John"
// console.log(myName);
// document.getElementById("myId").innerHTML = myName

//! blockScope

// const myName = "John"

// {
//   console.log(myName);
//   const myName = "Chagan"
// }

// var myName = "John"

// {
//   var myName = "Chagan"
// }

// console.log(myName);

// const myName = "John"

// myName = "Chagan"

// console.log(myName);

//! data type

//? string

// const myName = "Chagan"
// const myName = 'Chagan'

// const heading = "hello"
// const myName = `${heading} Chagan`

// document.getElementById("myId").innerHTML = myName

// console.log(typeof myName);

//? number

// const myNumber = 10.254

// console.log(myNumber);

//? boolean

// const val = false // false : 0 , true : 1

// console.log(Number(val));

// const val = "10"

// console.log(typeof Number(val));

//? undefine

// let myValue

// console.log(typeof myValue);

//? null

// const myValue = null

// console.log(typeof myValue);

//? array

// const myArray = ["html", "css", 'js']

// console.log(typeof myArray);

// console.log(Array.isArray(myArray));

//? object

// const person = {
//   name: "Chagan", age: 25, isMarried: false
// }

// console.log(typeof person);

//? date

// const myDate = new Date()

// console.log(myDate.getHours(), myDate.getMinutes());

//! function and arrow function

// document.getElementById("myId").innerHTML = myFunction(10, 15)

// function myFunction(a, b) {
//   return a + b
// }

//? Arrow function

// const myFunction = (a, b) => {
//   return a + b
// }

// console.log(myFunction(5, 10));
// console.log(myFunction(15, 100));

//? obj function

// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 19,
//   fullname: () => {
//     return person.fname + ' ' + person.lname
//   }
// }

// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 19,
//   fullname: function () {
//     return this.fname + ' ' + this.lname
//   }
// }

// console.log(person.fullname());

//! if else and else if , ternary operator

// if (5 == 6) {
//   console.log(true);
// } else {
//   console.log(false);
// }


// if ((5 == 5) && (6 < 5)) {
//   console.log(true);
// } else if ("chagan" != "chagan") {
//   console.log("chagan is same");
// } else {
//   console.log(false);
// }

/*

== , === , != , !== , < , > , <= , >= , !VALUE

&& , ||

*/

//? ternary

// 5 != 5 ? console.log(true) : console.log(false);

// 5 != 5 ? console.log(true) : 5 !== "5" ? console.log("not same") : console.log(false);

// let num = 5

// num = num + 5
// num *= 5

// console.log(num);

// console.log(--num);

// num++

// console.log(num)

// let strNum = "5"

// console.log(5 + 5 + strNum);

// let text = 'Lorem ipsum dolor sit amet.'

// let impText = "dolor"
// let text = `Lorem ipsum ${impText} sit amet.`

// console.log(text);

// const person = {
//   fname: "John",
//   lname: "doe"
// }

// console.log(`Hello ${person.fname} ${person.lname}`);

// let text = "Lorem ipsum \n dolor sit amet."
// let text = `Lorem ipsum dolor sit amet.
//   hello
//   world
// `
// console.log(text.length);

// try {

// } catch () {

// }

// try {
//   textAlert("Hello World");
// } catch (err) {
//   console.log(err.name);
// }

// let num = 9.656
// let num = 19.656

// const number =
//   num.toPrecision() +
//   "<br>" +
//   num.toPrecision(2) +
//   "<br>" +
//   num.toPrecision(4) +
//   "<br>" +
//   num.toPrecision(6);

// console.log(number);

// let lorem = 5
// try {
//   eval("lorem");
// } catch (err) {
//   console.log(err.message);
// }

// function formHandler() {
//   try {
//     const fname = document.getElementById("fname").value
//     const lname = document.getElementById("lname").value
//     const email = document.getElementById("email").value
//     const username = document.getElementById("username").value
//     const pass = document.getElementById("pass").value
//     const conPass = document.getElementById("conPass").value
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     // if (!fname || !lname || !email || !username || !pass || !conPass) throw "Input field is empty..."

//     if (!emailRegex.test(email)) throw "Invalid email address..."
//     if (pass !== conPass) throw "Password does not match..."
//   } catch (msg) {
//     console.log(msg);
//   } finally {
//     document.getElementById("fname").value = ""
//     document.getElementById("lname").value = ""
//     document.getElementById("email").value = ""
//     document.getElementById("username").value = ""
//     document.getElementById("pass").value = ""
//     document.getElementById("conPass").value = ""
//   }
// }

// function formHandler() {
//   try {
//     const fname = document.getElementById("fname").value
//     const lname = document.getElementById("lname").value
//     const email = document.getElementById("email").value
//     const username = document.getElementById("username").value
//     const pass = document.getElementById("pass").value
//     const conPass = document.getElementById("conPass").value

//     if (!fname || !lname || !email || !username || !pass || !conPass) throw "Input field is empty..."
//     if (pass !== conPass) throw "Password does not match..."

//   } catch (err) {
//     console.log(err);
//   } finally {
//     document.getElementById("fname").value = ""
//     document.getElementById("lname").value = ""
//     document.getElementById("email").value = ""
//     document.getElementById("username").value = ""
//     document.getElementById("pass").value = ""
//     document.getElementById("conPass").value = ""
//   }
// }

//! loop

/*
  map()
  forEach()
  for, for of, for in
  while,
  do while
*/

// const renderData = document.getElementById("renderData")
const products = [
  {
    Id: "101",
    title: "Boult Audio Z40 True Wireless in Ear Earbuds with 60H Playtime, Zen™ ENC Mic, Low Latency Gaming, Type-C Fast Charging, Made in India, 10mm Rich Bass Drivers, IPX5, Bluetooth 5.3 Ear Buds TWS (Blue)",
    img: "https://m.media-amazon.com/images/I/71ITkeoYiTL.SL1500.jpg",
    price: 4999,
    discount: 80
  },
  {
    Id: "102",
    title: "Noise Buds VS104 Max Truly Wireless in-Ear Earbuds with ANC(Up to 25dB),Up to 45H Playtime, Quad Mic with ENC, Instacharge(10 min=180 min), 13mm Driver, BT v5.3 (Silver Grey)",
    img: "https://m.media-amazon.com/images/I/51AbB+I1pvL.SX522.jpg",
    price: 4999,
    discount: 64
  },
  {
    Id: "103",
    title: "LG 242 L 3 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-I292RPZX, Shiny Steel, Door Cooling+)",
    img: "https://m.media-amazon.com/images/I/61+pdg8CfmL.SX466.jpg",
    price: 37099,
    discount: 30,
  },
  {
    Id: "104",
    title: "Symphony Ice Cube 27 Personal Air Cooler For Home with Powerful Fan, 3-Side Honeycomb Pads, i-Pure Technology and Low Power Consumption (27L, White)",
    img: "https://m.media-amazon.com/images/I/414dASFjmEL.SX522.jpg",
    price: 7999,
    discount: 29,
  },
  {
    Id: "105",
    title: "atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote | Upto 65% Energy Saving | 2+1 Year Warranty (Midnight Black) | Winner of National Energy Conservation Awards (2022)",
    img: "https://m.media-amazon.com/images/I/61mhVkkWM-L.SX522.jpg",
    price: 5190,
    discount: 29,
  }
]

//? map()

// renderData.innerHTML = products.map((myVal) => {
//   return `
//     <div class="cart">
//       <div>
//         <img src="${myVal.img}" alt="product" />
//       </div>

//       <div>
//         <p>${myVal.title}</p>
//       </div>
//     </div>
//   `
// }).join("")

//? forEach()

// let text = ""
// products.forEach((myValue) => {
//   text += `<li>${myValue.title}</li>`
// })
// renderData.innerHTML = `<ul>${text}</ul>`

//? for

// for (let init = 0; init < 10; init++) {
//   console.log("Hello");
// }

// let text = ""
// for (let init = 0; init < products.length; init++) {
//   text += products[init].title + '<br>'
// }

// document.getElementById('renderData').innerHTML = text

//? for of

// for (let init of products) {
//   console.log(init);
// }

//? for in

// for (let init in products) {
//   console.log(init);
// }

//? while

// let init = 0
// let text = ""

// while (init < products.length) {
//   console.log(products[init].title);
//   init++
// }

//? do while

// let init = 0
// let text = ""

// do {
//   console.log(products[init].title);
//   init++
// } while (init > products.length)


//! DOM

// const tags = document.getElementsByTagName("p")
// console.log(tags);

// const val = document.getElementsByClassName("myTitle")
// console.log(document.getElementById("renderData").setAttribute("class", "World"));
// console.log(document.getElementById("renderData").getAttribute("class"));
// console.log(document.querySelectorAll(".Hello"));
