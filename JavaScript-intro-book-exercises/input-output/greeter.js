// 1. asks for user's  name, then outputs a greeting message
// 2. modify to ask for the user's first and last names

let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name?\n");
let lastName = rlSync.question("What's your last name?\n");

console.log(`Hello, ${firstName} ${lastName}!`)
