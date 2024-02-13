//! if else and else if

//? ternary operator

// const check = 4 > 5 ? "Yes" : 5 == 5 ? true : false
// console.log(check);

// if (4 < 5) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

//! try catch statement

// try {

//   if (5 < 9) {
//     throw "Yes five less nine"
//   } else {
//     throw "Somthings Wrong"
//   }

// } catch (msg) {
//   console.log(msg);
// } finally {
//   console.log("Your ans is here!");
// }

let text = document.getElementById('text')
let input = document.getElementById('input')
function submitFun() {
  try {
    let inputVal = input.value

    if (!inputVal) throw "Enter Some Value"
    if (isNaN(inputVal)) throw "Require Number only"
    Number(inputVal)
    if (inputVal.length < 4) throw "Too low"
    if (inputVal.length > 8) throw "Too High"
    if (inputVal.length > 4 || inputVal.length < 8) throw "Submitted Value"

  } catch (msg) {
    text.innerHTML = msg
  } finally {
    document.getElementById('input').value = ""
  }
}

// || && <= < > >= == === !== != ! 