//! What is variable

//* type's of variable

/*
  var, const, let
*/

// var harshad = "My Friend"
// let harshad = "My Friend"
// const harshad = "My Friend"

// document.getElementById("myId").innerHTML = harshad
// console.log(harshad)

//* do not use var : reason one
// var x = 5

// var x = 9

// console.log(x)

//* const & let

// let x = 5

// console.log(x);

// x = 10 //? update

// console.log(x);


// const person = "Chagan"

// person = "Magan"

// console.log(person);

//-----------------------

// const y = 10

// y = 20

// console.log(y); //! not update

//! BlockScope

// const x = 5

// {
//   console.log(x);
//   const y = 7
// }

// ------------------

// const x = 9

// {
//   console.log(x);
//   const _x = 5
// }

// console.log(_x);

//! Arithmetic Operators
// let x = 5
// console.log(x + 5);
// console.log(x - 3);
// console.log(x * 3);
// console.log(x / 3);
// console.log(x % 3);

// x++
// console.log(--x);

// console.log(5 ** 2);

//! Assignment Operators

// let a = 10;
// a += 30
// a -= 30
// a *= 30
// a /= 30
// a %= 30
// console.log(a);

//! Datatype

/* String, Number, Object - Array - Date, Boolean, null, undefine, NaN */

// const person = "Chagan" // String
// const rollNumber = "5" // String
// const contactNumber = 5 // Number

//* Object

// const language = ["HTML", "CSS", "Js", "React js", 5, 32, 6] // Object - Array
// console.log(language[0]);
//? console.log(Array.isArray(language)); // true or false

// const users = {
//   fName: "Chagan",
//   lName: "Chapri",
//   age: 16
// } // Object

// console.log(users.fName + " " + users.lName);

// const todayDate = new Date(); // Date
// console.log(todayDate)

//* Boolean

// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

//* Null & Undefined

// console.log(typeof null) // Object

// let c
// console.log(typeof c);

//* NaN

// console.log(typeof NaN); // Not a Number

//! Function, Arrow Function

// function myFunction() {
//   console.log("Hello World");

//   function nestingFunction() {
//     console.log("This is a nesting function");
//   }

//   nestingFunction()
// }

// myFunction()

// function cal() {
//   return "Hello World!"
// }

// document.getElementById("myId").innerHTML = cal()

// function calculation(p1, p2) {
//   return p1 + p2
// }

// console.log(calculation("World", "Hello"));

// console.log(myArrow());

// const myArrow = () => {
//   return "I am an arrow function"
// }

// const person = {
//   fname: "Chagan",
//   lname: "chatriWala",
//   fullname: function () {
//     return this.fname + " " + this.lname
//   }
// }

// console.log(person.fullname());

//! if else & else if statement, ternary operator

// if (5 != "5") {
//   console.log("Condition is true")
// } else if (4 >= 5) {
//   console.log("Second Condition is true")
// } else {
//   console.log("False");
// }

// console.log(a == b ? true : false);

// function checking(a, b) {
//   return a == b ? true : false
// }

// console.log(checking(10, 10));

/*
  ==
  ===
  !=
  !==
  <
  >
  <=
  >=
  &&
  ||
  !value
*/

/* const popupMsg = document.querySelector(".popupMsg")
function submitForm() {
  try {
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value
    const conPass = document.getElementById("conPass").value

    if (!username) throw "Username field is blank"
    if (!email) throw "email field is blank"
    if (!pass) throw "password field is blank"
    if (!conPass) throw "Confirm Password field is blank"
    if (pass !== conPass) throw "Password and confirm password does not match."

  } catch (x) {

    popupMsg.innerHTML = `Error :- ${x}` //! Backtick
    // popupMsg.getAttribute("class")
    popupMsg.setAttribute("class", "popupMsg active")

  } finally {
    document.getElementById("username").value = ""
    document.getElementById("email").value = ""
    document.getElementById("pass").value = ""
    document.getElementById("conPass").value = ""

    setTimeout(() => {
      popupMsg.innerHTML = ``
      popupMsg.setAttribute("class", "popupMsg notActive")
    }, 2000)
  }
} */

//! Array Method's
// const frt = ['Apple', 'Banana', 'Mango']

// frt.push('Kiwi')
// frt.pop()
// frt.unshift('Orange')
// frt.shift()
// frt.reverse()
// frt.sort()

// console.log(frt);

//! String Method

// let text = "Hello"
// text.reverse()
// console.log(text);
// console.log(text.toLowerCase());

//! Switch

/* const today = new Date()

switch (today.getDay()) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Error, invalid day number")
} */

//! Date
// const setYear = new Date()
// setYear.setFullYear(1987)
// console.log(setYear);

//! DOM & BOM

//* DOM // Document Object Model

// select element

// document.getElementById("render").innerHTML = "<h1>Hello</h1>"

/*
  const renderId = document.getElementById("render")
  renderId.setAttribute('class', 'chagan')
  const getClass = renderId.getAttribute("class")
  renderId.innerHTML = "<h1>Hello World!</h1>"
  console.log(getClass);
*/

/*
  const allClass = document.querySelectorAll(".myClass")
  console.log(allClass);
  allClass.forEach((e) => {
    e.innerHTML = "Hello"
  })
*/

/*
  const render = document.getElementById('render')
  const createHeading = document.createElement('h1')
  createHeading.innerHTML = "Hello World!"
  render.appendChild(createHeading)
*/

//! BOM (localStorage, setTimeout, setInterval, windows, alert)

//? setInterval

// setInterval(() => {
//   const date = new Date()
//   console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }, 1000)

//? setTimeout

// setTimeout(() => {
//   console.log("Hello");
// }, 5000)

//? windows

// const render = document.getElementById('render')
// const bodyElement = document.querySelector('body')
// render.innerHTML = "<h1>Hello World!</h1>"

// setInterval(() => {
//   console.log(window.screenY);

//   if (window.scrollY > 500) {
//     render.style.color = "white"
//     bodyElement.style.backgroundColor = "black"
//   } else {
//     render.style.color = "black"
//     bodyElement.style.backgroundColor = "white"
//   }
// })

// setInterval(() => {
//   console.log(window.scrollY > 500 ? true : false);
// })

//! loops
/*
  map()
  forEach()
  for
  for in
  for of
  while
  do while
*/

// const render = document.getElementById("render")
// const language = ['html', 'css', 'javaScript', 'react', 'node js', 'express js', 'mongo db']

//? map()
//* data rendering

// language.map((value, index, array) => { console.log(index, value); })
// language.map(function (value, index, array) { console.log(index, value) })

// render.innerHTML = language.map((value, index) => {
//   return `<h1>${value} ${index}</h1>`
// }).join("")

//? forEach()
//* data rendering

// language.forEach((chagan, magan) => { console.log(magan, chagan) })

/*
let text = ""

language.forEach((x, y) => {
  text += `<h1>${y} ${x}</h1>`
})

console.log(text);
render.innerHTML = text
*/

//? for
//* logical operation

// for (let x = 0; x < 1000; x++) {
//   console.log(x);
// }

// let langLeng = language.length
// let text = ""
// for (let init = 0; init < langLeng; init++) {
//   text += `<li>${init + " " + language[init]}</li>`
// }

// render.innerHTML = `<ul>${text}</ul>`

//? for in
//* data rendering
//* logical operation

// let text = ""
// for (let x in language) {
// console.log(x); // index

//   text += language[x] + "<br>"
// }
// render.innerHTML = text

//   text += language[x] + "<br>"
// }
// render.innerHTML = text

//? for of
//* data rendering
//* logical operation

// let text = ""
// for (let x of language) {
//   text += x + "<br>"
// }

// render.innerHTML = text

//? while loop
//* logical operation

// let init = 0
// let text = ""
// while (init < language.length) {
//   console.log(language[init]);
//   init++
// }

//? do while loop
//* logical operation

// let init = 0
// let text = ""

// do {
//   console.log(language[init]);
//   init++
// } while (init > language.length)

//TODO :- BOM

//! localStorage

//* localStorage single data store

// localStorage.setItem("NewKey", "Item Name")

// const localvalue = localStorage.getItem("NewKey")

// localStorage.removeItem("NewKey")

// localStorage.clear()

// console.log(localvalue);

//* localStorage object data store

// const product = [
//   {
//     Id: "101",
//     title: "Boult Audio Z40 True Wireless in Ear Earbuds with 60H Playtime, Zen™ ENC Mic, Low Latency Gaming, Type-C Fast Charging, Made in India, 10mm Rich Bass Drivers, IPX5, Bluetooth 5.3 Ear Buds TWS (Blue)",
//     img: "https://m.media-amazon.com/images/I/71ITkeoYiTL.SL1500.jpg",
//     price: 4999,
//     discount: 80
//   },
//   {
//     Id: "102",
//     title: "Noise Buds VS104 Max Truly Wireless in-Ear Earbuds with ANC(Up to 25dB),Up to 45H Playtime, Quad Mic with ENC, Instacharge(10 min=180 min), 13mm Driver, BT v5.3 (Silver Grey)",
//     img: "https://m.media-amazon.com/images/I/51AbB+I1pvL.SX522.jpg",
//     price: 4999,
//     discount: 64
//   },
//   {
//     Id: "103",
//     title: "LG 242 L 3 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-I292RPZX, Shiny Steel, Door Cooling+)",
//     img: "https://m.media-amazon.com/images/I/61+pdg8CfmL.SX466.jpg",
//     price: 37099,
//     discount: 30,
//   },
//   {
//     Id: "104",
//     title: "Symphony Ice Cube 27 Personal Air Cooler For Home with Powerful Fan, 3-Side Honeycomb Pads, i-Pure Technology and Low Power Consumption (27L, White)",
//     img: "	https://m.media-amazon.com/images/I/414dASFjmEL.SX522.jpg",
//     price: 7999,
//     discount: 29,
//   },
//   {
//     Id: "105",
//     title: "atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote | Upto 65% Energy Saving | 2+1 Year Warranty (Midnight Black) | Winner of National Energy Conservation Awards (2022)",
//     img: "	https://m.media-amazon.com/images/I/61mhVkkWM-L.SX522.jpg",
//     price: 5190,
//     discount: 29,
//   },
//   {
//     Id: "106",
//     title: "Atomberg Renesa 400mm Pedestal Swing Fan | Silent BLDC Fan with LED Display and 6 Speed | Remote Control with Timer & Sleep Control | 1+1 Year Warranty (Snow White)",
//     img: "	https://m.media-amazon.com/images/I/61qkh62kfiL.SX522.jpg",
//     price: 6140,
//     discount: 33,
//   },
//   {
//     Id: "107",
//     title: "Philips HL7756/01 Mixer Grinder 750 Watt, 3 Stainless Steel Multipurpose Jars with 3 Speed Control and Pulse function (Black)",
//     img: "	https://m.media-amazon.com/images/I/71mL2bdyRdL.SX522.jpg",
//     price: 5295,
//     discount: 30,
//   },
//   {
//     Id: "108",
//     title: "PHILIPS Mixer Grinder 3-in-1 750 Watt (Mixer Grinder + Juicer + Food Processor) 4 Jar, (HL7707/01)",
//     img: "	https://m.media-amazon.com/images/I/51mCAmdG4AL.SX522.jpg",
//     price: 9995,
//     discount: 23,
//   },
//   {
//     Id: "109",
//     title: "AGARO Imperial Slow Juicer, Professional Cold Press Whole Slow Juicer, 240 Watts Power Motor, 3 Strainers, All-in-1 Fruit & Vegetable Juicer, Grey/Black",
//     img: "	https://m.media-amazon.com/images/I/712fOpI7NvL.SX522.jpg",
//     price: 35899,
//     discount: 62,
//   },
//   {
//     Id: "110",
//     title: "Havells Nutri Art Slow Juicer 200W | Larger Feeding Tube | Ceramic Auger |Lowest Speed 70 RPM |Pulp Controller | Reverse Button | Quick and Easy Cleaning |Lowest Noise | 2Yr Warranty, 200 Watt",
//     img: "	https://m.media-amazon.com/images/I/61OK2cFsOLL.SX522.jpg",
//     price: 26995,
//     discount: 35,
//   },
//   {
//     Id: "111",
//     title: "V-Guard RequPro True High Recovery RO UV UF Alkaline Water Purifier with Stainless Steel Storage Tank, 9 Stage Purification | 60% Water Recovery & 100% RO Purified Water | Black",
//     img: "https://m.media-amazon.com/images/I/41HsJ4q6T8L.SX522.jpg",
//     price: 31699,
//     discount: 45,
//   },
//   {
//     Id: "112",
//     title: "HUL Pureit Eco Water Saver Mineral RO+UV+MF AS wall mounted/Counter top Black 10L Water Purifier",
//     img: "	https://m.media-amazon.com/images/I/515YvBsQPrL.SX679.jpg",
//     price: 24850,
//     discount: 44,
//   },
//   {
//     Id: "113",
//     title: "ILIFE T10s Robotic Vacuum Cleaner, Self Emptying Upto 60 Days, Robot Vacuum and Mop Combo with Lidar Navigation, Customized Schedule Cleaning, Ideal for Hard Floor, Low Pile Carpet, Vacuum and Mop",
//     img: "	https://m.media-amazon.com/images/I/71pRzSm1omL.SX466.jpg",
//     price: 62900,
//     discount: 46,
//   },
//   {
//     Id: "114",
//     title: "INALSA Air Fryer Digital Tasty Fry-1400W 4.2L,Smart Aircrisp Technology| 8-Preset, Touch Control & Digital Display| Variable Temp& Timer Control,(Black), 4.2 Liter",
//     img: "	https://m.media-amazon.com/images/I/61yk1RpaPEL.SX522.jpg",
//     price: 9995,
//     discount: 57,
//   },
//   {
//     Id: "115",
//     title: "AGARO Regency Air Fryer,12 Liters,Family Rotisserie Oven,1800W Electric Air Fryer Toaster Oven,Tilt Led Digital Touchscreen,9 Presets Menu For Baking, Roasting,Toasting Etc,With Accessories, Silver",
//     img: "	https://m.media-amazon.com/images/I/717FMw3d2aL.SX522.jpg",
//     price: 19995,
//     discount: 55,
//   },
// ]

//? convert object array to json string
// localStorage.setItem("data", JSON.stringify(product)) // obj to convert json

//? json string convert to array object
// const objData = JSON.parse(localStorage.getItem("data")) // json to convert obj

//! setTimeout

// setTimeout(() => {
//   console.log("Hello World!");
// }, 5000)

//! setInterval

// setInterval(() => {
//   console.log(window.scrollY >= 500 ? true : false);
// })

//! window

// ===========================================

// const render = document.getElementById("render")

// const product = [
//   {
//     Id: "101",
//     title: "Boult Audio Z40 True Wireless in Ear Earbuds with 60H Playtime, Zen™ ENC Mic, Low Latency Gaming, Type-C Fast Charging, Made in India, 10mm Rich Bass Drivers, IPX5, Bluetooth 5.3 Ear Buds TWS (Blue)",
//     img: "https://m.media-amazon.com/images/I/71ITkeoYiTL.SL1500.jpg",
//     price: 4999,
//     discount: 80
//   },
//   {
//     Id: "102",
//     title: "Noise Buds VS104 Max Truly Wireless in-Ear Earbuds with ANC(Up to 25dB),Up to 45H Playtime, Quad Mic with ENC, Instacharge(10 min=180 min), 13mm Driver, BT v5.3 (Silver Grey)",
//     img: "https://m.media-amazon.com/images/I/51AbB+I1pvL.SX522.jpg",
//     price: 4999,
//     discount: 64
//   },
//   {
//     Id: "103",
//     title: "LG 242 L 3 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-I292RPZX, Shiny Steel, Door Cooling+)",
//     img: "https://m.media-amazon.com/images/I/61+pdg8CfmL.SX466.jpg",
//     price: 37099,
//     discount: 30,
//   },
//   {
//     Id: "104",
//     title: "Symphony Ice Cube 27 Personal Air Cooler For Home with Powerful Fan, 3-Side Honeycomb Pads, i-Pure Technology and Low Power Consumption (27L, White)",
//     img: "	https://m.media-amazon.com/images/I/414dASFjmEL.SX522.jpg",
//     price: 7999,
//     discount: 29,
//   },
//   {
//     Id: "105",
//     title: "atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote | Upto 65% Energy Saving | 2+1 Year Warranty (Midnight Black) | Winner of National Energy Conservation Awards (2022)",
//     img: "	https://m.media-amazon.com/images/I/61mhVkkWM-L.SX522.jpg",
//     price: 5190,
//     discount: 29,
//   },
//   {
//     Id: "106",
//     title: "Atomberg Renesa 400mm Pedestal Swing Fan | Silent BLDC Fan with LED Display and 6 Speed | Remote Control with Timer & Sleep Control | 1+1 Year Warranty (Snow White)",
//     img: "	https://m.media-amazon.com/images/I/61qkh62kfiL.SX522.jpg",
//     price: 6140,
//     discount: 33,
//   },
//   {
//     Id: "107",
//     title: "Philips HL7756/01 Mixer Grinder 750 Watt, 3 Stainless Steel Multipurpose Jars with 3 Speed Control and Pulse function (Black)",
//     img: "	https://m.media-amazon.com/images/I/71mL2bdyRdL.SX522.jpg",
//     price: 5295,
//     discount: 30,
//   },
//   {
//     Id: "108",
//     title: "PHILIPS Mixer Grinder 3-in-1 750 Watt (Mixer Grinder + Juicer + Food Processor) 4 Jar, (HL7707/01)",
//     img: "	https://m.media-amazon.com/images/I/51mCAmdG4AL.SX522.jpg",
//     price: 9995,
//     discount: 23,
//   },
//   {
//     Id: "109",
//     title: "AGARO Imperial Slow Juicer, Professional Cold Press Whole Slow Juicer, 240 Watts Power Motor, 3 Strainers, All-in-1 Fruit & Vegetable Juicer, Grey/Black",
//     img: "	https://m.media-amazon.com/images/I/712fOpI7NvL.SX522.jpg",
//     price: 35899,
//     discount: 62,
//   },
//   {
//     Id: "110",
//     title: "Havells Nutri Art Slow Juicer 200W | Larger Feeding Tube | Ceramic Auger |Lowest Speed 70 RPM |Pulp Controller | Reverse Button | Quick and Easy Cleaning |Lowest Noise | 2Yr Warranty, 200 Watt",
//     img: "	https://m.media-amazon.com/images/I/61OK2cFsOLL.SX522.jpg",
//     price: 26995,
//     discount: 35,
//   },
//   {
//     Id: "111",
//     title: "V-Guard RequPro True High Recovery RO UV UF Alkaline Water Purifier with Stainless Steel Storage Tank, 9 Stage Purification | 60% Water Recovery & 100% RO Purified Water | Black",
//     img: "https://m.media-amazon.com/images/I/41HsJ4q6T8L.SX522.jpg",
//     price: 31699,
//     discount: 45,
//   },
//   {
//     Id: "112",
//     title: "HUL Pureit Eco Water Saver Mineral RO+UV+MF AS wall mounted/Counter top Black 10L Water Purifier",
//     img: "	https://m.media-amazon.com/images/I/515YvBsQPrL.SX679.jpg",
//     price: 24850,
//     discount: 44,
//   },
//   {
//     Id: "113",
//     title: "ILIFE T10s Robotic Vacuum Cleaner, Self Emptying Upto 60 Days, Robot Vacuum and Mop Combo with Lidar Navigation, Customized Schedule Cleaning, Ideal for Hard Floor, Low Pile Carpet, Vacuum and Mop",
//     img: "	https://m.media-amazon.com/images/I/71pRzSm1omL.SX466.jpg",
//     price: 62900,
//     discount: 46,
//   },
//   {
//     Id: "114",
//     title: "INALSA Air Fryer Digital Tasty Fry-1400W 4.2L,Smart Aircrisp Technology| 8-Preset, Touch Control & Digital Display| Variable Temp& Timer Control,(Black), 4.2 Liter",
//     img: "	https://m.media-amazon.com/images/I/61yk1RpaPEL.SX522.jpg",
//     price: 9995,
//     discount: 57,
//   },
//   {
//     Id: "115",
//     title: "AGARO Regency Air Fryer,12 Liters,Family Rotisserie Oven,1800W Electric Air Fryer Toaster Oven,Tilt Led Digital Touchscreen,9 Presets Menu For Baking, Roasting,Toasting Etc,With Accessories, Silver",
//     img: "	https://m.media-amazon.com/images/I/717FMw3d2aL.SX522.jpg",
//     price: 19995,
//     discount: 55,
//   },
// ]

// render.innerHTML = product.map((key) => {
//   return `
//     <section class="card">
//       <div class="imageParent">
//         <img src="${key.img}" alt="productImage" />
//       </div>

//       <div class="cardDetail">
//         <p>${key.title}</p>
//         <p>
//           <span>${key.price}/-</span> <span>${key.discount}%</span> <span>${key.price - Math.floor((key.price * key.discount) / 100)}/-</span>
//         </p>

//         <button onclick="addToCart(${key.Id})">Add to Cart</button>
//       </div>
//     </section>
//   `
// }).join("")

// function addToCart(Id) {
//   console.log(product.find(item => item.Id == Id));
// }

//! async & await, fetch API
// * API :- Application Programming interfere

// const render = document.getElementById("render")
// const getData = async () => {
//   const dataResponse = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")

//   const objData = await dataResponse.json()
//   const allProducts = [...objData.earbud, ...objData.tshirt]

//   render.innerHTML = allProducts.map((key) => {
//     return `
//       <section class="card">
//          <div class="imageParent">
//            <img src="${key.img1}" alt="productImage" />
//          </div>

//          <div class="cardDetail">
//            <p>${key.title}</p>
//            <p>
//              <span>${key.price}/-</span> <span>${key.discount}%</span> <span>${key.price - Math.floor((key.price * key.discount) / 100)}/-</span>
//            </p>

//            <button onclick="addToCart(${key.Id})">Add to Cart</button>
//          </div>
//        </section>
//     `
//   }).join("")
// }
// getData()

/*

{ [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}] }

objData.earbud objData.shoes

[...objData.earbud, ...objData.shoes]

[{},{},{},{}]

*/

//! Array method, Object Method, String Method, Math, Date, Number Method, String Method

/* _________________________________ ENDING OF JAVASCRIPT _________________________________ */
