let number = 4936
let ones = number % 10

console.log(`Ones: ${ones}`);

number = (number - ones) / 10
let tens = number % 10
console.log(`Tens: ${tens}`)

number = (number - tens) / 10
let hundreds = number % 10
console.log(`Hundreds: ${hundreds}`);

let thousands = (number - hundreds) / 10;
console.log(`Thousands: ${thousands}`)
