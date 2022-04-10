// write a program that asks for 2 numbers from the user, adds them, then displays the result

let rlSync = require('readline-sync');

// the question method of readline-sync returns the input as a string
// need to coerce the string to numbers using Number function
let number1 = Number(rlSync.question('Enter the first number\n'));
let number2 = Number(rlSync.question('Enter the second number\n'));

let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);
