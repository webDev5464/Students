// const user = "John"

// console.log(user)

// ctrl + j

//! Variables

// const
// let
// var

// const user = "John"
// let users = "John"
// var _1user = "John"

// console.log(user)

//* do not use var

// var user = "John"
// var user = "magan"

// console.log(user) // magan

//? const and let

// let a = 10

// a = 20

// console.log(a)

// let b = 20

// console.log(b) // 20

// b = 50 // update

// console.log(b) // 50

//! block scope

// const a = 10

{
  // const a = 20

}

// console.log(a)

//* do not use var

// var a = 10

// {
//   var a = 20
// }

// console.log(a) //

//! Assignment Operators
// +, -, *, /, %, **
// ++, --

// let a = 20

// let b = 10

// a++

// a = a + 1

// console.log(++a)

// a--

// console.log(a)

//! Arithmetic Operators

// let a = 10

// a /= 10

// console.log(a)

// let a = 10

// a += 20

// console.log(a)

//! Data types

// const a = 'Chagan' // String

// const b = 10 // Number

// let c = undefined // undefined

// let d = null // Object

// let aa = ["John", "Chagan", "Magan"] // Object - Array

// console.log(aa[1])

// let bb = { username: "John", age: 20 } // Object

// console.log(bb.age)

// let isAdmin = false // boolean


// const a = 10

// console.log(a)
//! BOM


//! DOM

// let val = 0
// const num = document.getElementById("num")

// num.innerHTML = val

//! Function

// function incrementHandler() {
//   val++
//   num.innerHTML = val
// }

// function decrementHandler() {
//   val--
//   num.innerHTML = val
// }

//? function parameter and return key word

function myFunction(a) {

  const power = 2

  return a ** power

  //* Not working - console.log('object')

}

const multiplication = myFunction(5)

console.log(multiplication)




//? Arrow function

const multi = (a, b) => {

  return `Your ans: ${a + b}`

  // return `Ans: ${a + b}`
}

console.log(multi(10, 20))
