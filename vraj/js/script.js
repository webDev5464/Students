//! Arithmetic operators

// let x = 5
// let z = 10

// console.log(x + z);
// console.log(z - x);
// console.log(z / x);
// console.log(z * x);
// console.log(5 ** 2);
// console.log(50 % 2);
// console.log(50 % 3);

//! Semantic Operators

// let x = 10

// // x = x + 5

// x %= 5
// x += 5
// x -= 5
// x *= 5
// x /= 5
// x **= 5

// console.log(x);

//! increment and decrement

// let x = 10
// // x = 10
// x++ // increment
// // x = 11
// x++
// // x = 12
// console.log(x);
// // x = 12
// x-- // decrement
// // x = 11
// x--
// // x = 10
// console.log(x);

// let x = 5

// // update: true
// x = 10

// console.log(x); // 10

// // -----------

// const y = 20

// // update: false
// y = 30

// console.log(y); // err

//! Sting Method

// // dabble in single quote
// let word = "Hello 'World'"F
// console.log(word); // Hello 'World'

// // single in dabble quote
// let word = 'Hello "World!"' // Hello "World"
// console.log(word);

// let a = 10 // Number

// let x = 10 // Number

// let y = "20" // String

// let z = a + x + y

// console.log(z); // 2020

// let text = "Lorem ipsum                    dolor sit amet."

// console.log(text.length);

// let replaceWord = "Hello World!"
// let newText = replaceWord.replace("World", "Vraj")

// console.log(newText);

// let h = "hello"

// let w = "world"

// let judva = h + " " + w

// console.log(judva);

// let world = "               World!                       "

// console.log(world.length); // 44

// let newWorld = world.trim()

// console.log(newWorld.length); // 6

// let num = 5

// console.log(typeof num); // Number

// console.log(typeof toString(num)); // String

// let text = "Lorem ipsum dolor sit amet." // count 0

// console.log(text.indexOf("dolor")); // 12

//! String template (``)

// let ans = {
//   fAns: "Hello JavaScript",
//   sAns: "Fine",
//   tAns: "Doing fine"
// }

// let x = `Hello World!
// ${ans.fAns}
// How are you?
// ${ans.sAns}
// What about you?
// ${ans.tAns}`
// console.log(x);
// console.log(x);

//! Array Method

// const persons = ["vraj", "Magan", "Chagan", "Chapri"]

// console.log(persons[2]);

// persons.pop()
// console.log(persons);

// persons.pop()
// persons.push("Hemang")
// console.log(persons); // ["vraj", "Magan", "Chagan", "Hemang"]

// persons.shift()
// persons.unshift("John")
// console.log(persons);

/*
 * persons.pop() // પછાડ થી નિકડશે
 * persons.unshift("Hemang") // આગડ થી ઉમેરાસે
 * persons.shift() // આગડ થી નિકડસે
 * persons.push("Chintu") // પછાડ થી ઉમેરાસે
*/

// const persons = ["vraj", "Magan", "Chagan", "Chapri"]
// persons.push("Chintu")
// persons.pop()
// persons.pop()

// console.log(persons.length);

// console.log(typeof persons.join(" * "));
// console.log(typeof persons[0]);

// const persons = ["vraj", "Magan", "Chagan", "Chapri"]

/*
  *  splice(INDEX, LENGTH)
*/
// persons.splice(1, 2)
// console.log(persons);

/*
  *  splice(INDEX, LENGTH, NEW...)
*/
// persons.splice(1, 2, "Chintu", "John", "Chaman")
// console.log(persons);

// const girl = ['G1', 'G2', 'G3']
// const boy = ['B1', 'B2', 'B3']
// const smallBoy = ['S1', 'S2', 'S3']

// let x = girl + boy + smallBoy
// console.log(girl.concat(boy, smallBoy));

// console.log(typeof x);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const aToz = ['A', 'E', 'C', 'Q', 'B', 'L', 'Z', 'X']

// console.log(aToz.sort());

//! Array Object 

const personsData = [
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
  {
    fName: "vraj",
    lName: "raval",
  },
  {
    fName: "John",
    lName: "Doe",
  },
  {
    fName: "Chagan",
    lName: "Chapri",
  },
  {
    fName: "Magan",
    lName: "Bloger",
  },
  {
    fName: "jay",
    lName: "raval",
  },
  {
    fName: "jhon",
    lName: "doe",
  },
  {
    fName: "meet",
    lName: "mistry",
  },
  {
    fName: "dhuvil",
    lName: "patel",
  },
  {
    fName: "pram",
    lName: "patel",
  },
  {
    fName: "kuldeep",
    lName: "nayi",
  },
  {
    fName: "jeel",
    lName: "patel",
  },
  {
    fName: "ronak",
    lName: "koshti",
  },
  {
    fName: "priyanshu",
    lName: "bhatt",
  },
]

const render = personsData.map(x => `<h1>${x.fName + " " + x.lName}</h1>`)
document.getElementById("names").innerHTML = render.join("")