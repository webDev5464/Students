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
const users = [
  {
    id: 1,
    fullName: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    posts: [
      {
        id: 1,
        title: "First Post",
        content: "This is the first post",
      },
      {
        id: 2,
        title: "Second Post",
        content: "This is the second post",
      },
    ],
  },
  {
    id: 2,
    fullName: "Jane Smith",
    username: "janesmith",
    email: "jane@example.com",
    posts: null,
  },
  {
    id: 3,
    fullName: "Michael Johnson",
    username: "michaelj",
    email: "michael@example.com",
    posts: [
      {
        id: 1,
        title: "Michael's Post",
        content: "This is Michael's post",
      },
      {
        id: 2,
        title: "Yet Another Post",
        content: "This is another post by Michael",
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

// let init = 0
// let text = ""

// do {
//   console.log(users[init].fullName)

//   init++
// } while (init > users.length)

//! async function with fetch api

// async function fetchData() {
//   console.log("hello");
//   const fetchRowData = await fetch(
//     "https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI"
//   );

//   const objData = await fetchRowData.json();

//   console.log(objData);
// }

// fetchData();

// ---------------------------------------------

// export const register = async (req, res) => {
//   try {
//     const { fullName, username, email, pass, conPass } = req.body;
//     if (!fullName) throw new Error("Full name is required.");
//     if (!username) throw new Error("Username name is required.");
//     if (!email) throw new Error("Email is required.");
//     if (!pass) throw new Error("Password is required.");
//     if (!conPass) throw new Error("Confirm password is required.");

//     $userModel({ fullName, username, email, pass }).save();
//   } catch (err) {
//     res.send({
//       process: false,
//       msg: err.message,
//     });
//   }
// };

//! DOM

// console.log(document.getElementById("render"));

// console.log(document.querySelector("#myClass"));

// console.log(document.getElementsByClassName("myClass"))

// const MyElement = document.querySelector("#render")

// MyElement.setAttribute("class", "Chagan")

// MyElement.classList.add("chagan")
// MyElement.classList.remove("myClass")

// console.log(MyElement.getAttribute("class"))

//! BOM

//? setTimeout

// setTimeout(() => {
//   console.log('hello')
// }, 5000)

//? setInterval

// setInterval(() => {
//   console.log("Hello World!");
// });

//? localStorage

// localStorage.setItem("MyValue", "Hello World!");
// localStorage.setItem("MyValueOne", "Hello World!");
// localStorage.setItem("MyValueTwo", "Hello World!");
// localStorage.setItem("MyValueThree", "Hello World!");

// const getValue = localStorage.getItem("MyValue")
// console.log(getValue)
// localStorage.removeItem("MyValue")

// localStorage.clear()

// const person = [
//   {
//     fname: "Chagan",
//     lname: "Chapri",
//   },
//   {
//     fname: "Chagan",
//     lname: "Chapri",
//   },
//   {
//     fname: "Chagan",
//     lname: "Chapri",
//   },
// ];

// localStorage.setItem("person", JSON.stringify(person));
// console.log(JSON.parse(localStorage.getItem("person")));

//? windows (scrollY)

const heading = document.getElementById("heading");
setInterval(() => {
  window.scrollY < 500
    ? heading.setAttribute("class", "title notActive")
    : heading.setAttribute("class", "title active");
});

//! --------------------------------------

// const keyName = ["username", "userData"];
// const arr1 = ['a','b','c']
// const arr2 = ['d','e','f']
// const updatedArr = [...arr1, ...arr2]
// const valueName = ["John@gmail.com", updatedArr];

// const person = {
//   fname: "John",
//   lname: "Doe",
// };

// console.log(updatedArr)

// keyName.map(x => console.log({[x] : valueName.map(x => x)}))

// const updatedObj = { ...person, [keyName]: valueName }

// console.log(updatedObj)

//! --------------------------------------

