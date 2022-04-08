// ask the user for their age and then show how old they will be in 10, 20, 30, 40 years

let rlSync = require('readline-sync');
// the question() method returns a string, need to convert to a number before performing the calculations in the expression inside the template literal
let age = Number(rlSync.question("How old are you?\n"));

console.log(`You are ${age} years old.`)
console.log(`In 10 years, you will be ${age + 10} years old`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
