const FOO = 'bar';

{
  const FOO = 'qux'
}

console.log(FOO) // 'bar'

// Will not throw an error because the constant variable declared inside the code block on line 4 is block scoped - so it shadows (hides) the variable on line 1 that has the same name
// On line 1 a constant variable named FOO is declared and initialized with a string object with a value of 'bar'. A code block then starts on linne 3 and inside the block a block scoped variable named FOO is declared and initialized with a string value of 'qux'. This variable is separate from the global scoped FOO variable and it also hides that global scoped variable from the block since they have the same name
