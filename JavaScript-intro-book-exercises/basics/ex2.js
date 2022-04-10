// use arithmetic operators to determine the individual digigits of a 4-digit number
// 4936


// use number % 10 to determine the rightmost digit
let number = 4936;
let ones = number % 10
console.log(`ones place: ${ones}`) // 6

// reassign the value of number
number = (number - ones) / 10 // 493

let tens = number % 10
console.log(`tens place: ${tens}`)  // 3

number = (number - tens) / 10

let hundreds = number % 10
console.log(`hundreds place: ${hundreds}`) // 9

number = (number - hundreds) / 10
console.log(`thousands place: ${number}`)  // 4
