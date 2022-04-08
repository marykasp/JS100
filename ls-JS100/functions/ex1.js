// what does the code log to the console? Does executing foo function affect the output?

let bar = 1;

function foo() {
  let bar = 2;
}

foo(); // creates a local scoped variable does not affectthe global variable of the same name
console.log(bar) // will log 1 to the console;
