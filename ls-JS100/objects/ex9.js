// what does this log to the console?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  // this reassigns the property a on the foo object - mutable properties
  argument1.a = 'hi';
  // this line does not affect the qux variable which is an immutable string
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // 'hi'
console.log(qux); // 'hello' returns the value of the variable with the same name
