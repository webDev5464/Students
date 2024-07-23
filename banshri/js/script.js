//! Install nodemon

//* npm init -y
//* npm i nodemon : -> "scripts": {
    // "start": "nodemon",
    // "test": "echo \"Error: no test specified\" && exit 1"
  // },
//* npm start

//! ---------------

// var fname = "John"

// console.log(fname)

// var fname = "Chagan"

// console.log(fname)

// var fname = 5

// console.log(fname)

// var fname = 10

// console.log(fname)

//! -------- Block Scope ----------

// const x = 5

{
  // console.log(x)
  // const x = 10
}

// console.log(x)


// var x = 10

// {
//   console.log(x)
//   var x = 5
// }

// console.log(x)


// const name = 5
// console.log($name)

// let x = 5

// x += 5

// console.log(x);

//! ------ Data types ---------

// const user = [1, 2, 4, 5] // object

// const user = {
//   fname: 'john',
//   lname: 'doe'
// } // object

// console.log(Array.isArray(user))

//! ------ function and arrow function ---------


// function simpleFunction() {
//   return 'hello'
// }

// console.log(simpleFunction())


// const arrowFunction = (p1, p2) => {
//   return p1 + p2
// }

// console.log(arrowFunction(5, 10))

// const person = {
//   fname: 'john',
//   lname: 'doe',
//   age: 25,
//   fullName: () => {
//     return person.fname + ' ' + person.lname
//   }
// }

// console.log(person.fullName())

// const arr = [{}, {}, {}, {}]

//! Loops

//* map, forEtch, for, for in, for of, while, do while

// const render = document.getElementById('render')
const users = [{
    id: 1,
    fullName: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    posts: [{
        id: 1,
        title: 'First Post',
        content: 'This is the first post'
      },
      {
        id: 2,
        title: 'Second Post',
        content: 'This is the second post'
      },
    ],
  },
  {
    id: 2,
    fullName: 'Jane Smith',
    username: 'janesmith',
    email: 'jane@example.com',
    posts: null,
  },
  {
    id: 3,
    fullName: 'Michael Johnson',
    username: 'michaelj',
    email: 'michael@example.com',
    posts: [{
        id: 1,
        title: 'Michael\'s Post',
        content: 'This is Michael\'s post'
      },
      {
        id: 2,
        title: 'Yet Another Post',
        content: 'This is another post by Michael'
      },
    ],
  },
];

// ====================
//? map()

// render.innerHTML = users.map(function (x) {
//   return `
//     <h1>${x.fullName}</h1>
//     ${x.posts ? x.posts.map((y) => `<p>${y.title}</p>`).join("") : ''}
//   `
// }).join("")

// ====================
//? forEach()

// let text = ""

// users.forEach(function (x) {
//   text += `
//     <h1>${x.fullName}</h1>
//     ${x.posts ? x.posts.forEach((y) => y.title) : ''}
//   `
// })

// render.innerHTML = text

// ====================

// const arr = [{
//     fname: 'chagan'
//   }, {
//     fname: 'magan'
//   },
//   {
//     fname: 'John'
//   }
// ]

// console.log(arr.map((x) => x.fname).join(" ")) // return array
// arr.forEach((x) => console.log(x.fname)) // print value

// const arr = ['chagan', 'magan', 'John']

// console.log(arr.join(' * * * '))

//? for

// let text = ""
// for (let init = 0; init < users.length; init++) {
//   text += `<h1>${users[init].fullName}</h1>`
// }
// render.innerHTML = text

//? for in 

// let init = 0
// for (init in users) {
//   console.log(users[init].fullName)
// }

//? for of

// let init1 = 0
// let x = 0
// let text = ""

// for (init1 of users) {
//   text += `<h1>${init1.fullName}</h1>`

//   if (init1.posts) {
//     for (x of init1.posts) {
//       text += `<p>${x.title}</p>`
//     }
//   }

// }
// render.innerHTML = text

//? while

// let init = 0
// let text = ""
// while (init < users.length) {
//   console.log(users[init].fullName) 

//   init++
// }

//? do while

let init = 0
let text = ""

do {
  console.log(users[init].fullName)

  init++
} while (init > users.length)