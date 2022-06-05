# JavaScript Basics

## Basics

#### Ex1. 

Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. 

```js
const fullName = "Mary " + "Kasparian"
```

#### Ex. 2

Use arithmetic opertors to determine the individual digits of `4936`

```js
let number = 4936
let ones = number % 10
console.log(ones) // 6

number = (number - ones) / 10 // 493

let tens = number % 10 // 3
number = (number - tens) / 10 // 49
let hundreds = number % 10
// 9

let thousands = (number - hundreds) / 10 // 4

```

#### Ex.3 

```js
'true' // string
false // boolean
1.5 // float
2 // integer
undefined // undefined
{foo: 'bar'} // object with a string property
```

#### Ex4. 

```js
console.log('5' + 10)
```

Logs string `510` instead of adding `5 + 10` because Javascript allows for **type coercion**. So the number `10` gets coerced to a String and then gets concatenated to the String `5` 

#### Ex5. 

```js
// explicit coercion to log 15
console.log(Number('5') + 10)
```

#### Ex6. 

Template literal along with previous expression to log `The value of 5 + 10 is 15`

```js
console.log(`The value of 5 + 10 is ${Number('5') + 10}`)
```

#### Ex7.

```js
let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?
```

There will not be an error. When you use an index value that has no corrresponding value in the array, JS returns `undefined` 

#### Ex8.

Create an array that contains a list of pet names

```js
const petNames = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin']
```

#### Ex9.

Create an object named `pets`

```js
const pets = {
  asta: 'dog',
  butterscoth: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard'
}
```

#### Ex.10

```js
'foo' === 'Foo' // False
```

Evaluates to `false` since `===` is strict equality, evaluates the type and value, is case sensitive

#### Ex.11

```js
parseInt('3.1415') // 3
```

`parseInt` converts strings that begin with a digit to their number equivalent. If it encounters a non-digit like `.` it stops converting. 

#### Ex.12

```js
'12' < '9'
```

Evalues to `true`. Javascript when comparing strings will compare them character by character. Since `1`comes before `9` in the ASCII table it is less than.

## Variables

#### Ex1.

Write a program named `greeter.js` that greets `'Victor'` three times. Your program should use a variable and not hard code the string value `'Victor'` in each greeting.

```js
// write a program that greets Victor three times

let firstName = 'Victor';

// using template literals - string interpolation
console.log(`Good Morning, ${firstName}.`);
console.log(`Good Afternoon, ${firstName}.`);
console.log(`Good Evening, ${firstName}.`);

// using string concatenation
console.log('Good Morning, ' + firstName + '.');
console.log('Good Afternoon, ' + firstName + '.');
console.log('Good Evening, ' + firstName + '.');
```

#### Ex2.

/write a program that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years

```js
let age = 20;

console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
```

#### Ex3.

```js
{
  let foo = 'bar'; // let is block scoped
}

console.log(foo);
```

variables declared with `let` keyword are **block scoped** which means you cannot access the variable outside the block. Therefore this code will raise an error since `foo` is out of scope. Outside the block `foo` doesn't exist. 

#### Ex.4

```js
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe'; // will throw an error
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
```

`const` variables are block scoped and they cannot be reassigned. The first three console.logs will output the string concatenationns. On line 6 an error will be thrown since can't reassign a value to a `const` variable

#### Ex5.

```js
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // 'bar'
```

`let` variables are block scoped therefore `console.log` outside the block does not have access to the `foo` variable declared inside the block. It does have access to the global scoped `foo` variable with a string object value of `bar`.

Line 1 initializes a variable named `foo` with a string value of `bar`. Line 2 starts a block, which creates a block scope for `let` variables. The variable on line 1 is still visible, but line 3 declares a new variable named `foo` that shadows hides the variable from line 1. This is similar to variable shadowing in Ruby where if a block following a method invocation has the same parameter name as an outer scoped local variable, the outer scoped variable will be hidden to the block. The second variable gets initialized to a string value of `qux` but this goes out of scope when the block ends. 

Variable shadowing occurs when a variable declared in a block has the same name as an outer scoped variable - thereby preventing the block from accessing the outer variable.

#### Ex6.

```js
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO); 
```

This is similar to the variable shadowing just discussed. Using `const` instead of `let` - since the two variables are separate entities since the outer variable is hidden due to shadowing, no error occurs.

## Input / Output

