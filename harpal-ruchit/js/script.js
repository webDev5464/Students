// console.log("Hello Chagan")

//! Types of Variables

//? var, let, const

// var x = 5;

// {
//   var x = 10
// }

// console.log(x)

// let a = 10

// console.log(a)

// a = 20

// console.log(a)


// let x, y, z;

// a = 10
// y = 20

// z = a + y

// a = a + y
// a += y

// console.log(a)

//! Block Scope

// let a = 10

// {
//   console.log(a)
//   let a = 20
// }

// console.log(a)

// let a = 10

// console.log(++a)

//! Data Types

// let username = `Chagan
// magan`

// console.log(`My name is ${username}`)

// let a = "10"

// a = Number(a)

// console.log(typeof typeof a)

// let a = "chagan"

// a = Number(a)

// let a = null

// console.log(typeof a)

// const x = ["chagan", "magan"]
// console.log(Array.isArray(x))

// console.log(x[1])

// const user = {
//   name: "Chagan",
//   age: 20,
//   address: {
//     city: "Mumbai",
//     state: "Maharashtra",
//   },
// }

// console.log(user.name)

//! function

// function multiplication(a, b) {
//   const ans = a * b

//   return ans
// }

// console.log(multiplication(5, 2))

// -----------------------

// console.log(multiplication(5, 2))

// const multiplication = (a, b) => {
//   const ans = a * b

//   return ans
// }

//* ----------------------

// const user = {
//   fname: "Chagan",
//   lname: "Chapri",
//   age: 20,
//   fullName: () => {
//     return this.fname + " " + this.lname
//   }
// }

// console.log(user.fullName())

//! Conditional operators

//? ==
//? ===
//? <=
//? >=
//? !=
//? <
//? >
//? !==

// console.log(5 == 6)
// console.log(5 === "5")
// console.log(4 > 5)
// console.log(5 <= 5)
// console.log(5 != 4)
// console.log(5 !== "5")

//! Logical operators

//? &&
//? ||
//? !

// console.log(5 == 5 && 5 != 5)
// console.log(5 == 5 || 5 != 5)

// let username = "chagan"

// console.log(!username)

//! if else else if

// if (5 == 5) {
//   if () {

//   }
// } else if (5 < 6) {
//   console.log()
// } else {
//   console.log(false)
// }

//! ternary operators

// 5 == 5 ? true : false
// 5 == 5 ? true : 5 < 7 ? true : false

//! DOM

// const root = document.getElementById("root")

// const getAtt = root.getAttribute("class")

// root.setAttribute("class", "MyClass")

// console.log(getAtt)

// console.log(document.getElementsByClassName("testingClass"))
// console.log(document.getElementsByTagName("div"))

// console.log(document.querySelector(".testingClass"))
// console.log(document.querySelectorAll("#root"))

//! BOM

// setTimeout
// setInterval

// localStorage