//! if else and else if

//? ternary operator

// const check = 4 > 5 ? "Yes" : 5 == 5 ? true : false
// console.log(check);

// if (4 < 5) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

//! try catch statement

// try {

//   if (5 < 9) {
//     throw "Yes five less nine"
//   } else {
//     throw "Somthings Wrong"
//   }

// } catch (msg) {
//   console.log(msg);
// } finally {
//   console.log("Your ans is here!");
// }

// let text = document.getElementById('text')
// let input = document.getElementById('input')
// function submitFun() {
//   try {
//     let inputVal = input.value

//     /* const uniqPass = ["-", "_", "@", "#"]
//     for (let x = 0; x < inputVal.length; x++) {
//       if (uniqPass.includes(inputVal[x])) {
//         console.log(true);
//       } else {
//         console.log(false);
//       }
//     } */

//     // if (!inputVal) throw "Enter Some Value"
//     // if (isNaN(inputVal)) throw "Require Number only"
//     // Number(inputVal)
//     // if (inputVal.length < 4) throw "Too low"
//     // if (inputVal.length > 8) throw "Too High"
//     // if (inputVal.length > 4 || inputVal.length < 8) throw "Submitted Value"

//   } catch (msg) {
//     text.innerHTML = msg
//   } finally {
//     document.getElementById('input').value = ""
//   }
// }

// || && <= < > >= == === !== != !

//! loops

/*
* map :- function
* forEach :- function

* for
* for in
* for of
* while
* do while
*/

const earbud = [
  {
    id: 1,
    title:
      "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, IPX4 Water Resistance, ENx Tech, IWP, Smooth Touch Controls(Cyan Cider)",
    img: "https://m.media-amazon.com/images/I/31BMd11KciL._SY300_SX300_.jpg",
    price: 4490,
    discount: 78,
  },
  {
    id: 2,
    title:
      "CrossBeats Newly launched Revolt Hybrid Active Noise Cancelling Wireless Bluetooth Earbuds, 48hrs Playtime TWS, 10 mm Ti-Alloy Driver, EchoBlast™, 40ms Low Latency Earphone-Black",
    img: "https://m.media-amazon.com/images/I/61J9BzebDnL._SY450_.jpg",
    price: 9999,
    discount: 75,
  },
  {
    id: 3,
    title:
      "OnePlus Nord Buds True Wireless in Ear Earbuds with Mic, 12.4mm Titanium Drivers, Playback:Up to 30hr case, 4-Mic Design + AI Noise Cancellation, IP55 Rating, Fast Charging (Black Slate)",
    img: "https://m.media-amazon.com/images/I/51ws0E8cnbL._SL1500_.jpg",
    price: 2999,
    discount: 7,
  },
  {
    id: 4,
    title:
      "pTron Bassbuds Duo in Ear Earbuds with 32Hrs Total Playtime, Bluetooth 5.1 Wireless, Stereo Audio, Touch Control TWS, with Mic, Type-C Fast Charging, IPX4 & Voice Assistance (Black)",
    img: "https://m.media-amazon.com/images/I/31G1NouVxaL._SY300_SX300_.jpg",
    price: 2599,
    discount: 71,
  },
  {
    id: 5,
    title:
      "Boult Audio Z25 True Wireless in Ear Earbuds with 32H Playtime, 45ms Low Latency, Type-C Fast Charging (10=150Mins), Made in India, Zen ENC Mic, 13mm Bass Drivers, Bluetooth 5.3 Ear Buds (Blue Moss)",
    img: "https://m.media-amazon.com/images/I/71vlByXS-JL._SL1500_.jpg",
    price: 2999,
    discount: 63,
  },
  {
    id: 6,
    title:
      "Boult Audio X30 True Wireless in Ear Earbuds with 40H Playtime, Quad Mic ENC, 45ms Xtreme Low Latency, Made in India, Type-C Fast Charging, 3 Equalizer Modes (Rock, BoomX, Hi-Fi), BT 5.1 (Blue)",
    img: "https://m.media-amazon.com/images/I/71ey9w1JYTL._SL1500_.jpg",
    price: 4999,
    discount: 70,
  },
  {
    id: 7,
    title:
      "boAt Airdopes 121v2 in-Ear True Wireless Earbuds with Upto 14 Hours Playback, 8MM Drivers, Battery Indicators, Lightweight Earbuds & Multifunction Controls (Active Black, with Mic)",
    img: "https://m.media-amazon.com/images/I/61o2urRxrcL._SL1500_.jpg",
    price: 2990,
    discount: 57,
  },
  {
    id: 8,
    title:
      "Blaupunkt BTW07 ANC Moksha-30Db Bluetooth Truly Wireless In Ear Earbuds with Mic, Flip Top Rotatory Design, 40H Playtime, TurboVolt Fast Charging, Crispr Enc Tech, GameOn with 80Ms Low Latency (Black)",
    img: "https://m.media-amazon.com/images/I/31XeLoY52sL._SY300_SX300_.jpg",
    price: 5999,
    discount: 58,
  },
  {
    id: 10,
    title: `pTron Bassbuds Fute 5.1 Bluetooth Truly Wireless Featherlite TWS in Ear Earbuds with Mic 25Hrs Playtime, 13Mm Dynamic Driver, Immersive Audio, Touch Control, Voice Assistance & Fast Charging (Black)`,
    img: "https://m.media-amazon.com/images/I/51PNGyUNvmL._SL1100_.jpg",
    price: 3299,
    discount: 79,
  },
  {
    id: 11,
    title: `Boult Audio X1 Buds True Wireless in Ear Earbuds with 24H Playtime, Quad Mic ENC, Made in India, Type-C Fast Charging, Environmental Noise Cancellation, 10mm Bass Drivers, TWS Airbass ear buds (Black)`,
    img: "https://m.media-amazon.com/images/I/71mT2gCHH+L._SL1500_.jpg",
    price: 6999,
    discount: 74,
  },
  {
    id: 12,
    title: `Boult Audio Powerbuds True Wireless in Ear Earbuds with 120H Playtime, in-Built Powerbank, Type-C Fast Charging, Made in India, Pro+ Calling HD Mic, IPX7 Waterproof, Bluetooth Ear Buds TWS (Black)`,
    img: "https://m.media-amazon.com/images/I/71jrExswt4L._SL1500_.jpg",
    price: 8999,
    discount: 83,
  },
  {
    id: 13,
    title: `Noise Buds Vs104 Bluetooth Truly Wireless in Ear Earbuds with Mic, 30-Hours of Playtime, Instacharge, 13Mm Driver and Hyper Sync (Charcoal Black)`,
    img: "https://m.media-amazon.com/images/I/51cjIEYU8BL._SL1500_.jpg",
    price: 3499,
    discount: 69,
  },
];
const language = ["HTML", "CSS", "JavaScript", "React", "Node", "Mongodb"]
// const render = document.getElementById('render')

//? map
// const renderDatas = earbud.map((productVal) => {
//   return `
//     <div class="card">
//       <h3>${productVal.title}</h3>
//       <img src="${productVal.img}" alt="ProductImage" width="100px" />
//     </div>
//   `
// }).join("")

// render.innerHTML = renderDatas

//? forEach
// let text = ""
// earbud.forEach((a) => {
//   text += `
//     <p>${a.title}</p>
//     <img src="${a.img}" alt="ProductImage" width="100px" />
//   `
// })

// render.innerHTML = text

//? for
// let text = ""
// for (let x = 0; x < language.length; x++) {
//   text += language[x] + "<br>"
// }

// render.innerHTML = text

//? for in
// let text = ""
// for (let x in language) {
//   console.log(x);
// }

//? for of
// let $text = ""
// for (let x of language) {
//   console.log(x);
// }

//! Advance

//* async function and fetch
//* Api link :- https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI
//* https://jsonplaceholder.typicode.com/

// const fetchingData = async () => {
//   const fetching = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
//   const data = await fetching.json()
//   const allData = [...data.earbud, ...data.tshirt]

//   const renderAllData = allData.map((x) => {
//     return `
//       <div>
//         <p>${x.title}</p>
//       </div>
//     `
//   }).join("")

//   document.getElementById('render').innerHTML = renderAllData
// }
// fetchingData()

// const myClass = document.querySelectorAll(".render")
// myClass[2].style.backgroundColor = "red"

// const getId = document.getElementById('render')
// getId.setAttribute("class", "myClass")
// getId.removeAttribute("id")

// console.log(getId);

// console.log(screen.height);

// const value = window.prompt("Enter your name");
// console.log(value);

// const d = new Date()
// d.setFullYear(2028)
// console.log(d.getFullYear());

//! setInterval

// setInterval(() => {
//   console.log("Run...");
// }, 1000)

// clearInterval()

//! setTimeout

// setTimeout(() => {
//   console.log("Hello World!");
// }, 3000)

//! localStorage

// localStorage.setItem("myName", "Chagan")
// console.log(localStorage.getItem("myName"));

// localStorage.removeItem("key")
// localStorage.clear()

// const users = { username: "John Doe" }
// localStorage.setItem("users", JSON.stringify(users))
// const data = JSON.parse(localStorage.getItem("users"))

//* Example

// function submitFun() {
//   const inputVal = document.getElementById('input').value;

//   const existingData = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];

//   const newValue = {
//     value: inputVal,
//     id: Date.now()
//   };

//   existingData.push(newValue);

//   localStorage.setItem("data", JSON.stringify(existingData));
// }

// const render = document.getElementById("text")

// const getData = JSON.parse(localStorage.getItem("data"))

// render.innerHTML = getData.map((x) => {
//   return `
//     <p>${x.value}</p>
//     <button onclick="deleteData(${x.id})">Delete</button>
//   `
// }).join("")

// function deleteData(id) {
//   console.log(id);
// }

// const arr = []
// const obj = {}

// console.log(
//   Array.isArray(obj) ? "Yes" : "No"
// );

// if (Array.isArray(arr)) {
//   "yes"
// } else {
//   "No"
// }

// const x = "5"

// console.log(typeof x !== "string" ? "Is not string" : "Is String");

/*
  ==, ===, !=, !==, NaN, isNaN, Array.isArray(val), <, >, <=, >=
*/

// function OutterFUnction() {
//   let value = "Hello World"

//   function InnerFunction() {
//     console.log(value);
//   }

//   return InnerFunction
// }

// OutterFUnction()

// const myFunc = OutterFUnction()

// myFunc()

// let init; // undefine

// function myFunc() {
//   init = 5

//   console.log(init);
// }

// // myFunc() // 5

// console.log(init); // 5
