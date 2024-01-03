const language = ['html', 'css', 'javascript', 'react', 'node', 'mongoDb']

//? for loop

// let print = ""
// for (let x = 0; x < language.length; x++) {
//   print += language[x] + "\n"
// }
// console.log(print);

// =============================

// let x = 0;
// for (; x < language.length; x++) {
//   print += language[x] + "\n"
// }

//! for in loop

// let print = ""
// for (let x in language) {
//   print += language[x] + "\n"
// }
// console.log(print);

//! for of loop

// let print = ""
// for (let x of language) {
//   print += x + "\n"
// }
// console.log(print);

//? map function loop

// const render = language.map((x) => {
//   return x + "<br>"
// })

// console.log(render);

// document.getElementById("render").innerHTML = render

//? forEach function loop

// let text = ""
// const $render = language.forEach((x) => {
//   text += x + "<br>"
// })

// console.log(text);
// document.getElementById("render").innerHTML = text

//! while loop

// let text = ""
// let lang = language.length
// let x = 0

// while (x < lang) {
//   text += language[x] + "\n"
//   x++
// }

// console.log(text);

//! do while loop

// let text = ""
// let lang = language.length
// let x = 0

// do {
//   text += language[x] + '\n'
//   x++
// } while (x < lang)

// console.log(text);