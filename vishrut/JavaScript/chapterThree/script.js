//? ternary operator

// let condition = true
// let compare = condition == false ? "False" : "True"
// console.log(compare);

//! Switch Statement

// const x = new Date().getDay();
// console.log(x);

// let days

// switch (x) {
//   case 0:
//     days = "Sunday"
//     break;
//   case 1:
//     days = "Monday"
//     break;
//   case 2:
//     days = "Tuesday";
//     break;
//   case 3:
//     days = "Wednesday";
//     break;
//   case 4:
//     days = "Thursday";
//     break;
//   case 5:
//     days = "Friday";
//     break;
//   case 6:
//     days = "Saturday";
// }

// console.log(days);

//! Loops
// let loop = document.getElementById("loop")
// const language = ["html", "css", "JavaScript", "ReactJs", "NodeJs", "MongoDb"]

//* for loop

// let langLength = language.length
// console.log(langLength); // 6

// let text = "<ul>"
// for (let init = 0; init < langLength; init++) {
//   text += `<li>${language[init]}</li>`
// }
// text += "</ul>"

// loop.innerHTML = text

/* ex. 2 */

// for (let i = 0; i < 2; i++) {
//   console.log(i);
// }

/* ex. 3 */

// let i = 0
// for (; i < 5; i++) {
//   console.log(i);
// }

//! /* For in loop  */

// let text = ""
// for (let i in language) {
//   text += language[i] + "<br>"
// }
// loop.innerHTML = text

//! /* For of loop  */

// let text = ""
// for (let x of language) {
//   text += x + "<br>"
// }

// loop.innerHTML = text


//* While loop

// let text = ""
// let i = 0
// let languageLength = language.length

// while (i < languageLength) {
//   text += language[i] + "<br>";
//   i++
// }

// loop.innerHTML = text

// /* ex. 2 */

// let i = 0
// while (i < 10) {
//   console.log(i);
//   i++
// }

//* do while loop

// let text = ""
// let i = 0
// let languageLength = language.length

// do {
//   text += language[i] + "<br>"
//   i++
// } while (i < languageLength)

// loop.innerHTML = text

// /* Ex. 2 */

// let i = 0
// let text = ""
// do {
//   text += i
//   i++
// } while (i < 10)

// console.log(text);

//* forEach function

// let text = "<ul>"
// language.forEach((x) => {
//   text += `<li>${x}</li>`
// })
// text += "</ul>"

// loop.innerHTML = text

//* map function

// let render = language.map((x) => {
//   return `
//     <li>${x}</li>
//   `
// })

// let reRender = render.join("")
// loop.innerHTML = `<ul>${reRender}</ul>`