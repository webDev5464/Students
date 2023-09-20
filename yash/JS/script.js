// const x = "Hello World!"
// document.getElementById("demo").innerHTML = x

// let x = "Hello World!";
// console.log(x)

// {
//   let x = 5;
// console.log(x);
// }

// {
//   let x = 12;
// }

// console.log(x);

// {
//   const y = "Hello";
//   console.log(y);
// }

// {
//   const y = "World";
// }

// {
//   var x = 9;
// }

// {
//   console.log(x);
//   var x = 6;
// }

// console.log(x);

// let x = 5
// let $x = 10
// let _x = 12
// let $$$x = 122
// let ____x = 14
// let x1 = ""

// let 1x = 12 // Wrong
// let x-1 = 33 // Wrong

// let x = 5;
// let y = 2;
// let z = x + y;

// console.log(z);

/* This 
is 
    a 
    Multiple line
    Comment
*/

// const x = 10
// const y = x + 20
// console.log(y);

// x = 20
// console.log(x);

// let x = 10
// x += 6
// console.log(x);

// console.log(myFun(12, 2));

// function myFun(a, b) {
//   return a * b;
// }

// const myFun = function () {
//   return "Hello";
// };

// console.log(myFun());

// const x = (a, b) => {
//   return a / b;
// };

// document.getElementById("demo").innerHTML = x(50, 2);

// let text = "Outside : " + typeof car;
// console.log(text);

// function carDetail() {
//   let car = "Volvo";
//   let text = "Inside : " + typeof car + " " + car;

//   console.log(text);
// }

// carDetail();

const person = {
  fName: "John",
  lName: "Doe",
  age: 22,
  fullName: function () {
    return this.fName + " " + this.lName;
  },
};

console.log(person.fullName());

// document.getElementById("demo").innerHTML =
//   "Hello My name is " + person.fName + "<br>" + "my age is " + person.age;
