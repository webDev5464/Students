// // // const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // // delete fruits[0]
// // // // fruits.shift()

// // // console.log(fruits[0]);

// // const myGirls = ["Cecilie", "Lone"];
// // const myBoys = ["Emil", "Tobias", "Linus"];

// // // const myChild = myGirls + myBoys
// // const myChild = myGirls.concat(myBoys)

// // console.log(typeof myChild);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Kiwi", "asdasd", 'adsasd'];

// const x = fruits.slice(1, 4)
// console.log(x);

const points = [40, 100, 1, 5, 25, 10];

points.sort(() => {
  return 0.5 - Math.random()
})

console.log(points);

// const y = points.sort()
// console.log(y);

// const x = points.sort((a, b) => {
//   return b - a
// })


// console.log(x);
