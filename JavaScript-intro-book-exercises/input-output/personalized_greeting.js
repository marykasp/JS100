// Node's built in require function to import readline-sync into your program
let rlSync = require('readline-sync');
// use rlSync to call the question method - displays a string argument then waits for user to respond. waits for user to type in text and press enter, that text is returned to the program and saved in a variable
let name = rlSync.question("Whats your name?\n");

// display the user's response in the console
console.log(`Good Morning, ${name}!`);
