// write a program that uses multiply function to multply two numbers and returns the result, ask user to enter the 2 numbers

// multiple function
function multiply(num1, num2) {
  return num1 * num2
}

// function that asks user for input
function getNumber(prompt) {
  let rlSync = require('readline-sync');
  // convert string return value to number to use arithemetic operations
  return Number(rlSync.question(prompt));

}

// store input from user returned from readline-sync to a variable
let number1 = getNumber("Enter the first number: ");
let number2 = getNumber("Enter the second number: ");
// store return value of multiply function to a variable
let answer = multiply(number1, number2);

console.log(`${number1} * ${number2} = ${answer}`);
