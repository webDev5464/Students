//! Arithmetic operators
// let x = 5
// let z = 10

// console.log(x + z);
// console.log(z - x);
// console.log(z / x);
// console.log(z * x);
// console.log(5 ** 2);
// console.log(50 % 2);
// console.log(50 % 3);

//! Semantic Operators

// let x = 10

// // x = x + 5

// x %= 5
// x += 5
// x -= 5
// x *= 5
// x /= 5
// x **= 5

// console.log(x);

//! increment and decrement

// let x = 10
// // x = 10
// x++ // increment
// // x = 11
// x++
// // x = 12
// console.log(x);
// // x = 12
// x-- // decrement

// let x = 10

// x++

// console.log(x);

// // x = 11
// x--
// // x = 10
// console.log(x);

// let x = 5

// // update: true
// x = 10

// console.log(x); // 10

// // -----------

// const y = 20

// // update: false
// y = 30

// console.log(y); // err

//! Sting Method

// // dabble in single quote
// let word = "Hello 'World'"F
// console.log(word); // Hello 'World'

// // single in dabble quote
// let word = 'Hello "World!"' // Hello "World"
// console.log(word);

// let a = 10 // Number

// let x = 10 // Number

// let y = "20" // String

// let z = a + x + y

// console.log(z); // 2020

// let text = "Lorem ipsum                    dolor sit amet."

// console.log(text.length);

// let replaceWord = "Hello World!"
// let newText = replaceWord.replace("World", "Vraj")

// console.log(newText);

// let h = "hello"

// let w = "world"

// let judva = h + " " + w

// console.log(judva);

// let world = "               World!                       "

// console.log(world.length); // 44

// let newWorld = world.trim()

// console.log(newWorld.length); // 6

// let num = 5

// console.log(typeof num); // Number

// console.log(typeof toString(num)); // String

// let text = "Lorem ipsum dolor sit amet." // count 0

// console.log(text.indexOf("dolor")); // 12

//! String template (``)

// let ans = {
//   fAns: "Hello JavaScript",
//   sAns: "Fine",
//   tAns: "Doing fine"
// }

// let x = `Hello World!
// ${ans.fAns}
// How are you?
// ${ans.sAns}
// What about you?
// ${ans.tAns}`
// console.log(x);
// console.log(x);

//! Array Method

// const persons = ["vraj", "Magan", "Chagan", "Chapri"]

// console.log(persons[2]);

// persons.pop()
// console.log(persons);

// persons.pop()
// persons.push("Hemang")
// console.log(persons); // ["vraj", "Magan", "Chagan", "Hemang"]

// persons.shift()
// persons.unshift("John")
// console.log(persons);

/*
 * persons.pop() // પછાડ થી નિકડશે
 * persons.unshift("Hemang") // આગડ થી ઉમેરાસે
 * persons.shift() // આગડ થી નિકડસે
 * persons.push("Chintu") // પછાડ થી ઉમેરાસે
*/

// const persons = ["vraj", "Magan", "Chagan", "Chapri"]
// persons.push("Chintu")
// persons.pop()
// persons.pop()

// console.log(persons.length);

// console.log(typeof persons.join(" * "));
// console.log(typeof persons[0]);

// const persons = ["vraj", "Magan", "Chagan", "Chapri"]

/*
  *  splice(INDEX, LENGTH)
*/
// persons.splice(1, 2)
// console.log(persons);

/*
  *  splice(INDEX, LENGTH, NEW...)
*/
// persons.splice(1, 2, "Chintu", "John", "Chaman")
// console.log(persons);

// const girl = ['G1', 'G2', 'G3']
// const boy = ['B1', 'B2', 'B3']
// const smallBoy = ['S1', 'S2', 'S3']

// let x = girl + boy + smallBoy
// console.log(girl.concat(boy, smallBoy));

// console.log(typeof x);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const aToz = ['A', 'E', 'C', 'Q', 'B', 'L', 'Z', 'X']

// console.log(aToz.sort());

//! Array Object

// const personsData = [
//   {
//     fName: "vraj",
//     lName: "raval",
//   },
//   {
//     fName: "John",
//     lName: "Doe",
//   },
//   {
//     fName: "Chagan",
//     lName: "Chapri",
//   },
//   {
//     fName: "Magan",
//     lName: "Bloger",
//   },
//   {
//     fName: "jay",
//     lName: "raval",
//   },
//   {
//     fName: "jhon",
//     lName: "doe",
//   },
//   {
//     fName: "meet",
//     lName: "mistry",
//   },
//   {
//     fName: "dhuvil",
//     lName: "patel",
//   },
//   {
//     fName: "pram",
//     lName: "patel",
//   },
//   {
//     fName: "kuldeep",
//     lName: "nayi",
//   },
//   {
//     fName: "jeel",
//     lName: "patel",
//   },
//   {
//     fName: "ronak",
//     lName: "koshti",
//   },
//   {
//     fName: "priyanshu",
//     lName: "bhatt",
//   }
// ]

// const render = personsData.map(x => `<h1>${x.fName + " " + x.lName}</h1>`)
// document.getElementById("names").innerHTML = render.join("")

//! loopes

// const render = document.getElementById("render")

// const personsData = [
//   {
//     fName: "vraj",
//     lName: "raval",
//   },
//   {
//     fName: "John",
//     lName: "Doe",
//   },
//   {
//     fName: "Chagan",
//     lName: "Chapri",
//   },
//   {
//     fName: "Magan",
//     lName: "Bloger",
//   },
//   {
//     fName: "jay",
//     lName: "raval",
//   },
//   {
//     fName: "jhon",
//     lName: "doe",
//   },
//   {
//     fName: "meet",
//     lName: "mistry",
//   },
//   {
//     fName: "dhuvil",
//     lName: "patel",
//   },
//   {
//     fName: "pram",
//     lName: "patel",
//   },
//   {
//     fName: "kuldeep",
//     lName: "nayi",
//   },
//   {
//     fName: "jeel",
//     lName: "patel",
//   },
//   {
//     fName: "ronak",
//     lName: "koshti",
//   },
//   {
//     fName: "priyanshu",
//     lName: "bhatt",
//   }
// ]

//* forEach loop

// let text = ""
// personsData.forEach(function (e) {
//   text += e.fName + " " + e.lName + "<br>"
// })

// render.innerHTML = text

//* map method

// const myLoop = personsData.map(function (vraj) {
//   return vraj.fName + " " + vraj.lName + "<br>"
// })

// render.innerHTML = myLoop.join("")

//* for loop

// let val = 100
// let result = ""

// for (let x = 0; x < val; x++) {
//   result += x + 1 + "<br>"
// }

// document.getElementById("render").innerHTML = `<h1>${result}</h1>`

// ==================================================
// ==================================================
// ==================================================
// ==================================================

//! for loop
// const frt = ["Apple", "banana", "Mango", "Kiwi", "Orange"]
// let text = ""

// for (let vraj = 0; vraj < frt.length; vraj++) {
//   text += `<h1>${frt[vraj]}</h1>`
// }
// document.getElementById("render").innerHTML = text

//! for in loop
// let text = ""
// let vraj = 0

// //_____ 0 in 5
// for (vraj in frt) {
//   text += frt[vraj] + "\n"
// }

// console.log(text);

//! for of loop

// const language = ['html', 'css', 'javascript', 'react', 'nodejs', 'mongodb', 'python']
// let text = ""

// for (let x of language) {
//   text += x + "\n"
// }

// console.log(text);

//! while loop

// const language = ['html', 'css', 'javascript', 'react', 'nodejs', 'mongodb', 'python']

// let text = ""
// let arrLength = language.length
// let x = 0

// while (x < arrLength) {
//   text += `<h1>${language[x]}</h1>`
//   x++
// }

// document.getElementById('render').innerHTML = text

//! do while loop

// const language = ['html', 'css', 'javascript', 'react', 'nodejs', 'mongodb', 'python']
// let text = ""
// let arrLength = language.length
// let x = 0

// do {
//   text += language[x] + "\n"
//   x++

// } while (x < arrLength)

// console.log(text);

//! map function loop

const earbud = [
  {
    id: 1,
    title:
      "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, IPX4 Water Resistance, ENx Tech, IWP, Smooth Touch Controls(Cyan Cider)",
    img: "https://m.media-amazon.com/images/I/31BMd11KciL._SY300_SX300_.jpg",
    price: 4490,
    discount: 78,
    qty: 1,
    category: "earbud",
  },
  {
    id: 2,
    title:
      "CrossBeats Newly launched Revolt Hybrid Active Noise Cancelling Wireless Bluetooth Earbuds, 48hrs Playtime TWS, 10 mm Ti-Alloy Driver, EchoBlast™, 40ms Low Latency Earphone-Black",
    img: "https://m.media-amazon.com/images/I/61J9BzebDnL._SY450_.jpg",
    price: 9999,
    discount: 75,
    qty: 1,
    category: "earbud",
  },
  {
    id: 3,
    title:
      "OnePlus Nord Buds True Wireless in Ear Earbuds with Mic, 12.4mm Titanium Drivers, Playback:Up to 30hr case, 4-Mic Design + AI Noise Cancellation, IP55 Rating, Fast Charging (Black Slate)",
    img: "https://m.media-amazon.com/images/I/51ws0E8cnbL._SL1500_.jpg",
    price: 2999,
    discount: 7,
    qty: 1,
    category: "earbud",
  },
  {
    id: 4,
    title:
      "pTron Bassbuds Duo in Ear Earbuds with 32Hrs Total Playtime, Bluetooth 5.1 Wireless, Stereo Audio, Touch Control TWS, with Mic, Type-C Fast Charging, IPX4 & Voice Assistance (Black)",
    img: "https://m.media-amazon.com/images/I/31G1NouVxaL._SY300_SX300_.jpg",
    price: 2599,
    discount: 71,
    qty: 1,
    category: "earbud",
  },
  {
    id: 5,
    title:
      "Boult Audio Z25 True Wireless in Ear Earbuds with 32H Playtime, 45ms Low Latency, Type-C Fast Charging (10=150Mins), Made in India, Zen ENC Mic, 13mm Bass Drivers, Bluetooth 5.3 Ear Buds (Blue Moss)",
    img: "https://m.media-amazon.com/images/I/71vlByXS-JL._SL1500_.jpg",
    price: 2999,
    discount: 63,
    qty: 1,
    category: "earbud",
  },
  {
    id: 6,
    title:
      "Boult Audio X30 True Wireless in Ear Earbuds with 40H Playtime, Quad Mic ENC, 45ms Xtreme Low Latency, Made in India, Type-C Fast Charging, 3 Equalizer Modes (Rock, BoomX, Hi-Fi), BT 5.1 (Blue)",
    img: "https://m.media-amazon.com/images/I/71ey9w1JYTL._SL1500_.jpg",
    price: 4999,
    discount: 70,
    qty: 1,
    category: "earbud",
  },
  {
    id: 7,
    title:
      "boAt Airdopes 121v2 in-Ear True Wireless Earbuds with Upto 14 Hours Playback, 8MM Drivers, Battery Indicators, Lightweight Earbuds & Multifunction Controls (Active Black, with Mic)",
    img: "https://m.media-amazon.com/images/I/61o2urRxrcL._SL1500_.jpg",
    price: 2990,
    discount: 57,
    qty: 1,
    category: "earbud",
  },
  {
    id: 8,
    title:
      "Blaupunkt BTW07 ANC Moksha-30Db Bluetooth Truly Wireless In Ear Earbuds with Mic, Flip Top Rotatory Design, 40H Playtime, TurboVolt Fast Charging, Crispr Enc Tech, GameOn with 80Ms Low Latency (Black)",
    img: "https://m.media-amazon.com/images/I/31XeLoY52sL._SY300_SX300_.jpg",
    price: 5999,
    discount: 58,
    qty: 1,
    category: "earbud",
  },
  {
    id: 10,
    title: `pTron Bassbuds Fute 5.1 Bluetooth Truly Wireless Featherlite TWS in Ear Earbuds with Mic 25Hrs Playtime, 13Mm Dynamic Driver, Immersive Audio, Touch Control, Voice Assistance & Fast Charging (Black)`,
    img: "https://m.media-amazon.com/images/I/51PNGyUNvmL._SL1100_.jpg",
    price: 3299,
    discount: 79,
    qty: 1,
    category: "earbud",
  },
  {
    id: 11,
    title: `Boult Audio X1 Buds True Wireless in Ear Earbuds with 24H Playtime, Quad Mic ENC, Made in India, Type-C Fast Charging, Environmental Noise Cancellation, 10mm Bass Drivers, TWS Airbass ear buds (Black)`,
    img: "https://m.media-amazon.com/images/I/71mT2gCHH+L._SL1500_.jpg",
    price: 6999,
    discount: 74,
    qty: 1,
    category: "earbud",
  },
  {
    id: 12,
    title: `Boult Audio Powerbuds True Wireless in Ear Earbuds with 120H Playtime, in-Built Powerbank, Type-C Fast Charging, Made in India, Pro+ Calling HD Mic, IPX7 Waterproof, Bluetooth Ear Buds TWS (Black)`,
    img: "https://m.media-amazon.com/images/I/71jrExswt4L._SL1500_.jpg",
    price: 8999,
    discount: 83,
    qty: 1,
    category: "earbud",
  },
  {
    id: 13,
    title: `Noise Buds Vs104 Bluetooth Truly Wireless in Ear Earbuds with Mic, 30-Hours of Playtime, Instacharge, 13Mm Driver and Hyper Sync (Charcoal Black)`,
    img: "https://m.media-amazon.com/images/I/51cjIEYU8BL._SL1500_.jpg",
    price: 3499,
    discount: 69,
    qty: 1,
    category: "earbud",
  },
];

document.getElementById('render').innerHTML = earbud.map((vraj) => {
  return `
    <div class="productCard">
      <img src="${vraj.img}" alt="${vraj.category}" width="250px">
      <p>${vraj.title}</p>
    </div>
  `
}).join('')

//! forEach function loop

/*

* syntax
* variables
* arithmetic operator
* semantic operator
* data type (string, number, array, object, date, undefine, null, boolean)
* function
* loops

? if else and else if 
? ternary operators
? try catch
? DOM methods

! examples

*/