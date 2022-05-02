{
  let foo = 'bar'
}

console.log(foo) // REference Error - foo is not defined

// foo variable is declared inside a code block with the let keyword and has block scope
// therefore foo cannot be accessed outside the block scope since it does not exist outside the block
// block scope - any variable defined inside a block with let or const can only be accessed inside the block

