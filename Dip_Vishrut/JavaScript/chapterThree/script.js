//? ternary operator

// let condition = true
// let compare = condition == false ? "False" : "True"
// console.log(compare);

//! Switch Statement

const x = new Date().getDay();
console.log(x);

let days

switch (x) {
  case 0:
    days = "Sunday"
    break;
  case 1:
    days = "Monday"
    break;
  case 2:
    days = "Tuesday";
    break;
  case 3:
    days = "Wednesday";
    break;
  case 4:
    days = "Thursday";
    break;
  case 5:
    days = "Friday";
    break;
  case 6:
    days = "Saturday";
}

console.log(days);