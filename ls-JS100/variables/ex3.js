// what happens when you run this program?

{
  let foo = 'bar';
}

// will throw a Reference Error since foo was declared inside a block and is blocked scope, outside the block foo does not exist
console.log(foo)
