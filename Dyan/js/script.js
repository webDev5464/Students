// document.getElementById("render").innerHTML = "<h1>Hello World!</h1>"

//! variable

/*
* var
* let
* const
*/

// const x = 'Hello'

// let y = 5

// var z = 9

// console.log(x);
// console.log(y);
// console.log(z);

// console.log(y + z);

// const a = 5
// let a = 10
// var a = 10

// console.log(a);

// var a = 10
// console.log(a);


// var a = 20

//! blockScope

// let x = 10

// {
//   console.log(x);
//   let x = "Hello"
// }

// console.log(x);

// * var

// var x = 9

// {
//   console.log(x);
//   var x = 6
// }

// console.log(x);

//* let

// let a = 5

// console.log(a); // 5

// a = 10 // updated value

// console.log(a); // 10

//* const

// const b = 10

// console.log(b); // 10

// b = 20

// console.log(b); // err

// const cars = ["Saab", "Volvo", "BMW"]
// console.log(Array.isArray(cars))

//! function

// MyFunction()

// function MyFunction() {
//   console.log("Hello");
// }



// function MyF(a, b) {
//   console.log(a + b);
// }

// MyF(5, 10)



// function fun() {
//   const msg = "Hello World!"

//   return (
//     `<h1>${msg}</h1>`
//   )
// }

// render.innerHTML = fun()
// console.log(fun());

//? Arrow function

// const MyFunction = (a, b, c) => {
//   return (a + b - c)
// }

// console.log(MyFunction(10, 20, 15));

// const person = {
//   fName: "John",
//   lName: "Doe",
//   age: 27,
//   fullName: () => {
//     return person.fName + " " + person.lName
//   }
// }

// console.log(fullName());

//! String methods and template

// let x = 'hello world'

// render.innerHTML = `<h1>${x}</h1>`

// const earbud = [
//   {
//     id: 1,
//     title:
//       "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, IPX4 Water Resistance, ENx Tech, IWP, Smooth Touch Controls(Cyan Cider)",
//     img: "https://m.media-amazon.com/images/I/31BMd11KciL._SY300_SX300_.jpg",
//     img2: "https://m.media-amazon.com/images/I/51IIMMnQ7cL._SY450_.jpg",
//     img3: "https://m.media-amazon.com/images/I/81NXl8ObnEL._SY450_.jpg",
//     img4: "https://m.media-amazon.com/images/I/71Dbhs4BLZL._SY450_.jpg",
//     img5: "https://m.media-amazon.com/images/I/71DxKhGrLuL._SY450_.jpg",
//     price: 4490,
//     discount: 78,
//     qty: 1,
//     category: "earbud",
//   },
//   {
//     id: 2,
//     title:
//       "CrossBeats Newly launched Revolt Hybrid Active Noise Cancelling Wireless Bluetooth Earbuds, 48hrs Playtime TWS, 10 mm Ti-Alloy Driver, EchoBlast™, 40ms Low Latency Earphone-Black",
//     img: "https://m.media-amazon.com/images/I/61J9BzebDnL._SY450_.jpg",
//     img2: "https://m.media-amazon.com/images/I/61f1IQifWXL._SY450_.jpg",
//     img3: "https://m.media-amazon.com/images/I/61axYGTUdVL._SY450_.jpg",
//     img4: "https://m.media-amazon.com/images/I/81o04TvhnIL._SY450_.jpg",
//     img5: "https://m.media-amazon.com/images/I/61t9SMyZ9aL._SY450_.jpg",
//     price: 9999,
//     discount: 75,
//     qty: 1,
//     category: "earbud",
//   },
//   {
//     id: 3,
//     title:
//       "OnePlus Nord Buds True Wireless in Ear Earbuds with Mic, 12.4mm Titanium Drivers, Playback:Up to 30hr case, 4-Mic Design + AI Noise Cancellation, IP55 Rating, Fast Charging (Black Slate)",
//     img: "https://m.media-amazon.com/images/I/51ws0E8cnbL._SL1500_.jpg",
//     img2: "https://m.media-amazon.com/images/I/51ws0E8cnbL._SL1500_.jpg",
//     img3: "https://m.media-amazon.com/images/I/51gX3E0vzjL._SL1500_.jpg",
//     img4: "https://m.media-amazon.com/images/I/41-vUVwh5VL._SL1500_.jpg",
//     img5: "https://m.media-amazon.com/images/I/51PDeyFzo1L._SL1500_.jpg",
//     price: 2999,
//     discount: 7,
//     qty: 1,
//     category: "earbud",
//   },
//   {
//     id: 4,
//     title:
//       "pTron Bassbuds Duo in Ear Earbuds with 32Hrs Total Playtime, Bluetooth 5.1 Wireless, Stereo Audio, Touch Control TWS, with Mic, Type-C Fast Charging, IPX4 & Voice Assistance (Black)",
//     img: "https://m.media-amazon.com/images/I/31G1NouVxaL._SY300_SX300_.jpg",
//     img2: "https://m.media-amazon.com/images/I/61Coiv6SLXL._SY450_.jpg",
//     img3: "https://m.media-amazon.com/images/I/61jkqxMB4jL._SY450_.jpg",
//     img4: "https://m.media-amazon.com/images/I/51+tZ3xiA7L._SL1100_.jpg",
//     img5: "https://m.media-amazon.com/images/I/51wi0sZVqyL._SL1100_.jpg",
//     price: 2599,
//     discount: 71,
//     qty: 1,
//     category: "earbud",
//   },
//   {
//     id: 5,
//     title:
//       "Boult Audio Z25 True Wireless in Ear Earbuds with 32H Playtime, 45ms Low Latency, Type-C Fast Charging (10=150Mins), Made in India, Zen ENC Mic, 13mm Bass Drivers, Bluetooth 5.3 Ear Buds (Blue Moss)",
//     img: "https://m.media-amazon.com/images/I/71vlByXS-JL._SL1500_.jpg",
//     img2: "https://m.media-amazon.com/images/I/81KqErUpBOL._SL1500_.jpg",
//     img3: "https://m.media-amazon.com/images/I/81v+dv-6KAL._SL1500_.jpg",
//     img4: "https://m.media-amazon.com/images/I/71akRKumeCL._SL1500_.jpg",
//     img5: "https://m.media-amazon.com/images/I/81T79XX+wUL._SL1500_.jpg",
//     price: 2999,
//     discount: 63,
//     qty: 1,
//     category: "earbud",
//   },
//   {
//     id: 6,
//     title:
//       "Boult Audio X30 True Wireless in Ear Earbuds with 40H Playtime, Quad Mic ENC, 45ms Xtreme Low Latency, Made in India, Type-C Fast Charging, 3 Equalizer Modes (Rock, BoomX, Hi-Fi), BT 5.1 (Blue)",
//     img: "https://m.media-amazon.com/images/I/71ey9w1JYTL._SL1500_.jpg",
//     img2: "https://m.media-amazon.com/images/I/71xO47tyYsL._SL1500_.jpg",
//     img3: "https://m.media-amazon.com/images/I/71m50Eny0EL._SL1500_.jpg",
//     img4: "https://m.media-amazon.com/images/I/61RgoMA9XDL._SL1500_.jpg",
//     img5: "	https://m.media-amazon.com/images/I/81OBQ+eI1uL._SL1500_.jpg",
//     price: 4999,
//     discount: 70,
//     qty: 1,
//     category: "earbud",
//   },
//   {
//     id: 7,
//     title:
//       "boAt Airdopes 121v2 in-Ear True Wireless Earbuds with Upto 14 Hours Playback, 8MM Drivers, Battery Indicators, Lightweight Earbuds & Multifunction Controls (Active Black, with Mic)",
//     img: "https://m.media-amazon.com/images/I/61o2urRxrcL._SL1500_.jpg",
//     img2: "https://m.media-amazon.com/images/I/61o2urRxrcL._SL1500_.jpg",
//     img3: "https://m.media-amazon.com/images/I/61j3VLyxkHL._SL1500_.jpg",
//     img4: "https://m.media-amazon.com/images/I/61aBVyNtImL._SL1500_.jpg",
//     img5: "https://m.media-amazon.com/images/I/71JFUxjducL._SL1500_.jpg",
//     price: 2990,
//     discount: 57,
//     qty: 1,
//     category: "earbud",
//   },
//   {
//     id: 8,
//     title:
//       "Blaupunkt BTW07 ANC Moksha-30Db Bluetooth Truly Wireless In Ear Earbuds with Mic, Flip Top Rotatory Design, 40H Playtime, TurboVolt Fast Charging, Crispr Enc Tech, GameOn with 80Ms Low Latency (Black)",
//     img: "https://m.media-amazon.com/images/I/31XeLoY52sL._SY300_SX300_.jpg",
//     img2: "https://m.media-amazon.com/images/I/61iJdWkaQ+L._SY450_.jpg",
//     img3: "https://m.media-amazon.com/images/I/71Tg5d5phGL._SY450_.jpg",
//     img4: "https://m.media-amazon.com/images/I/61KdB+bNUFL._SY450_.jpg",
//     img5: "https://m.media-amazon.com/images/I/61lxhBySpLL._SY450_.jpg",
//     price: 5999,
//     discount: 58,
//     qty: 1,
//     category: "earbud",
//   },
//   {
//     id: 10,
//     title: `pTron Bassbuds Fute 5.1 Bluetooth Truly Wireless Featherlite TWS in Ear Earbuds with Mic 25Hrs Playtime, 13Mm Dynamic Driver, Immersive Audio, Touch Control, Voice Assistance & Fast Charging (Black)`,
//     img: "https://m.media-amazon.com/images/I/51PNGyUNvmL._SL1100_.jpg",
//     img2: "https://m.media-amazon.com/images/I/61dElFbRplL._SL1100_.jpg",
//     img3: "https://m.media-amazon.com/images/I/51Im+twUG4L._SL1100_.jpg",
//     img4: "https://m.media-amazon.com/images/I/61un6wGaIjL._SL1100_.jpg",
//     img5: "https://m.media-amazon.com/images/I/513-c5luOmL._SL1100_.jpg",
//     price: 3299,
//     discount: 79,
//     qty: 1,
//     category: "earbud",
//   },
//   {
//     id: 11,
//     title: `Boult Audio X1 Buds True Wireless in Ear Earbuds with 24H Playtime, Quad Mic ENC, Made in India, Type-C Fast Charging, Environmental Noise Cancellation, 10mm Bass Drivers, TWS Airbass ear buds (Black)`,
//     img: "https://m.media-amazon.com/images/I/71mT2gCHH+L._SL1500_.jpg",
//     img2: "https://m.media-amazon.com/images/I/81Nov7kscML._SL1500_.jpg",
//     img3: "https://m.media-amazon.com/images/I/91teZ0CgAKL._SL1500_.jpg",
//     img4: "https://m.media-amazon.com/images/I/71aL6iUS8KL._SL1500_.jpg",
//     img5: "https://m.media-amazon.com/images/I/71o4W7JuPtL._SL1500_.jpg",
//     price: 6999,
//     discount: 74,
//     qty: 1,
//     category: "earbud",
//   },
//   {
//     id: 12,
//     title: `Boult Audio Powerbuds True Wireless in Ear Earbuds with 120H Playtime, in-Built Powerbank, Type-C Fast Charging, Made in India, Pro+ Calling HD Mic, IPX7 Waterproof, Bluetooth Ear Buds TWS (Black)`,
//     img: "https://m.media-amazon.com/images/I/71jrExswt4L._SL1500_.jpg",
//     img2: "https://m.media-amazon.com/images/I/71HAe9bru5L._SL1500_.jpg",
//     img3: "https://m.media-amazon.com/images/I/71wUXtQVVjL._SL1500_.jpg",
//     img4: "https://m.media-amazon.com/images/I/81r6fKyraKL._SL1500_.jpg",
//     img5: "https://m.media-amazon.com/images/I/71-cfdI-CBL._SL1500_.jpg",
//     price: 8999,
//     discount: 83,
//     qty: 1,
//     category: "earbud",
//   },
//   {
//     id: 13,
//     title: `Noise Buds Vs104 Bluetooth Truly Wireless in Ear Earbuds with Mic, 30-Hours of Playtime, Instacharge, 13Mm Driver and Hyper Sync (Charcoal Black)`,
//     img: "https://m.media-amazon.com/images/I/51cjIEYU8BL._SL1500_.jpg",
//     img2: "https://m.media-amazon.com/images/I/61gE89QmD+L._SL1500_.jpg",
//     img3: "https://m.media-amazon.com/images/I/51r57IhfBwL._SL1500_.jpg",
//     img4: "https://m.media-amazon.com/images/I/513az8Cho7L._SL1500_.jpg",
//     img5: "https://m.media-amazon.com/images/I/517pNu7bWJL._SL1500_.jpg",
//     price: 3499,
//     discount: 69,
//     qty: 1,
//     category: "earbud",
//   },
// ];

// let value = ""
// earbud.map((x) => {
//   value += `<h1>${x.title}</h1>`
// })

// render.innerHTML = value
// console.log(value);

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length); // 26

// let str = "Apple, Banana, Kiwi";
// let x = str.substring(7, 13); // Banana
// console.log(x);

// let text = "Please visit Microsoft! Microsoft Microsoft Microsoft";
// let x = text.replace(/microsoft/ig, "Hello")
// console.log(x);

// let text1 = "Hello";
// let text2 = "World";

// const x = text1.concat(" " + text2)
// const x = text1 + ' ' + text2
// console.log(x);

// const boy = ['b1', 'b2', 'b3']
// const girl = ['g1', 'g2', 'g3']
// const frnd = ['f1', 'f2', 'f3']

// const parent = boy.concat(girl, frnd)
// const x = [...boy, ...girl, ...frnd]
// console.log(x);

// console.log(typeof Number(y[0]));

// let y = "518273612"

// const outSideArr = []
// for (let x = 0; x < y.length; x++) {
//   outSideArr[x] = Number(y[x])
// }

// console.log(outSideArr);

// let y = Number(x)
// console.log(y);

// let x = 10;
// let y = 20;
// let z = x + y + " The result is: ";
// console.log(z);

// console.log(parseInt("10 Year 10"));

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

const arr = ['A', 5, 'Q', 'R', 8, 'O', 4]

// const strArr = []
// const numArr = []

// const newArr = []
// for (let x = 0; x < arr.length; x++) {
//   if (typeof arr[x] == "string") {
//     newArr.unshift(arr[x])
//   } else {
//     newArr.push(arr[x])
//   }
// }

// const newArr = [...strArr, ...numArr]

// newArr.pop()
// newArr.push("Hello")

// newArr.shift()
// newArr.unshift("lorem")

// console.log(newArr);

// const arr_ = [12, 5, 6, 1, 6]

// console.log(arr_.join(""));
// console.log(typeof arr_.join('*'));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2, 2, 'Chagan')
// console.log(fruits);

// let str = "Lorem ipsum dolor sit amet"
// const newArr = fruits.slice(2, 3)
// console.log(newArr);

// const num = [40, 1000, 1, 5, 25, 10]

// console.log(num.sort((a, b) => {
//   return a - b
// }));

// const points = [40, 100, 1, 5, 25, 10];


// function MyFunction(val, y) {
//   return val.filter(function (x) {
//     return y < x
//   })
// }

// console.log(MyFunction(points, 40));

// const x = []

// function myArrayMax(arr) {
//   return Math.max.apply(null, arr);
// }

// console.log(myArrayMax(num));
// 100

// console.log(Math.floor(Math.random() * 9999));

//! if else ans else is

// const date = new Date()

// date.setHours(14)
// console.log(date);

//? ternary operator
// console.log(date.getHours() < 18 ? 10 : 20);

// if (date.getHours() < 12) {
//   console.log('good morning');
// } else if (date.getHours() < 18) {
//   console.log('good afternoon');
// } else {
//   console.log('good evening');
// }

//! loop

const language = ['html', 'css', 'javascript', 'react', 'nodejs', 'mongodb', 'python']

//? for loop

// let text = ""
// let x = 0

// for (; x < language.length; x++) {
//   text += language[x] + '\n'
// }

// document.getElementById('render').innerHTML = text

// demo.innerHTML = text

// console.log(typeof text);

//? for in loop

// let text = ""
// for (let x in language) {
// text += language[x]
// console.log(x);
// }

// console.log(text);


//? for of loop

// for (let x of language) {
//   console.log(x);
// }

//? while loop

// let text = ""
// let x = 0

// while (x < language.length) {
//   console.log(language[x]);
//   x++
// }

//? do while loop

// let x = 0

// do {
//   console.log(language[x]);
//   x++
// } while (x > language.length)

//? forEach ( function ) loop

// const lang = ['html', 'css', 'javascript', 'nodejs', 'mongodb', 'python', 'sql']

// console.log(lang.join(" | "));

// const user = [
//   { fname: 'john', lname: 'doe' },
//   { fname: 'smith', lname: 'duck' },
//   { fname: 'chagan', lname: 'Chapri' }
// ]

// let text = ""
// user.forEach((e, i, a) => {
//   text += `<h2>${e.fname} ${e.lname}</h2>`
// })

// console.log(typeof text);

// demo.innerHTML = text

//? map ( function ) loop

// const user = [
//   { fname: 'john', lname: 'doe' },
//   { fname: 'smith', lname: 'duck' },
//   { fname: 'chagan', lname: 'Chapri' }
// ]

// const print = user.map(e => {
//   return e.fname + ' ' + e.lname + "<br>"
// })

// demo.innerHTML = Array.isArray(print)

// console.log(print);

// let text = ""
// for (let x = 0; x < user.length; x++) {
//   text += user[x].fname
// }

// console.log(text);

//! nesting list using map function

// const nestingNavigation = [
//   {
//     title: 'products',
//     values: [
//       {
//         title: 'electronics',
//         page: ['mobiles', 'laptops', 'earbuds']
//       }, {
//         title: 'clothes',
//         page: ['shirts', 'tshirts']
//       }
//     ]
//   }, {
//     title: 'privacy policy',
//     values: [
//       {
//         title: 'policy One'
//       },
//       {
//         title: 'policy two',
//         page: ['p1', 'p2']
//       }
//     ]
//   }
// ]

// const print = nestingNavigation.map((e) => {
//   return `
//     <li>${e.title}</li>

//     ${e.values.map(x => {
//     return `<ul>
//       <li>${x.title}
//         <ul>
//           ${Array.isArray(x.page) ? x.page.map(p => {
//       return `<li>${p}</li>`
//     }).join('') : ''}
//         </ul>
//       </li>
//     </ul>
//     `
//   }).join('')}
//   `
// })

// document.getElementById('demo').innerHTML = `<ul>${print.join('')}</ul>`

//! Try Catch statement

function result() {
  let input = document.getElementById('input').value
  let text = document.getElementById('text')

  try {
    if (isNaN(input)) throw "Require is Number"
    if (input.trim() == "") throw "Input is Blank"

    Number(input)
    if (5 > input) throw "To Low"
    if (10 < input) throw "To Hight"
    if (5 <= input || 10 >= input) throw "Done"
  } catch (msg) {
    text.innerHTML = msg
  } finally {
    document.getElementById('input').value = ""
  }
}