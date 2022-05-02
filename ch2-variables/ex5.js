let foo = 'bar';

{
  let foo = 'qux' // block scoped
}

console.log(foo) // 'bar'

// Line 1 initializes a variable named foo witht the value 'bar'. Line 2 starts a block which creates a new scope for let variables. The variable on line 1 is still visible but line 3 declares a new variable named foo that shadows (hides) the variable from line 1. It goes out of scope on line 5 when the block end.

// The global scoped variable foo defined on line 1 with the let keyword is accessible throughout the program since it was not defined inside a block.

// On lines 3-5 there is a code block and inside the block a variable is defined using the let keyword - that foo variable has block scope and cannot be accessed outside the block
