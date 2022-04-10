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
```

