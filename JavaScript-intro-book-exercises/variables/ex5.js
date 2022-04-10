// what does this program log to the console?

let foo = 'bar';

// creates a new scope for let variables
{
  // block scoped variable
  let foo = 'qux';
}

// this will log 'bar' to the console since it is a globally scoped variable
// the foo variable declared inside the block can only be accessed inside the block so console.log(foo) can only access the foo variable defined on line 3
console.log(foo);
