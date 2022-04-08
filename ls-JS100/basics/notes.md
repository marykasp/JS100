# The Basics

Notes for the basics chapter of [Launch School's Introduction to JS programming](https://launchschool.com/books/javascript/read/basics#datatypes)

### Data Types

represent different kinds of data, determine what programmers can and cannot do with a given piece of data

- 5 **primitive data types**:

  - String
  - Number
  - Boolean
  - Null
  - Undefined

- All other types are an **object type**

- **Literal** any notation that lets you represent a fixed value

  ```js
  'Hello world!' // string literal
  3.24 // numeric literal
  true // boolean literal
  { a: 1, b: 2} // object literal
  [1, 2, 3]  // array literal
  undefined // undefined literal
  ```

  

### Strings

**string** is a sequence of characters wrapped in quotations (represents text)

```js
"He said, 'Hi there!'" // single quotes wrapped in double
'He said, \'Hi there!\'' // single quotes with escape character
```

- `\` escape character tells computer that the next character isn't syntactic but is part of the string

- *template literals* allow for **string interpolation** where you can insert JS expressions and variables in the middle of a string by using backticks 

```js
`5 plus 5 equals ${5 + 5}`
```

- JS replaces the `${expression}` substring with the value of the expression inside the braces - it **interpolates** the expression's value 


### Numbers

**number** represents all types of numbers in JS - integers, floats, fixed-point decimal numbers

```js
1, 2, -3, 4.55, -6.77, 23345678 // expamples of numeric literals
```



### Booleans

**boolean** values represent an on or off state, `true` or `false` 

```js
let toggleOn = true 
5 === 5 // true
```

- used when working with comparison operators/statements - conditional statements return a boolean value

### Undefined

`undefined` way to express the absence of a value 

- when you declare a variable but do not initialize it, `undefined` will be returned 
- built in `console.log` function returns `undefined`
  - writes a value to the console but doesn't return anything specific just `undefined`

### Null

`null` is similar to `undefined`: it represents the intential absence of a value

- emptiness or nothing
- use `null` explicitly if you want to use it, `undefined` arises implicitly 



### typeof Operator

Every value you use in JS has a data type, can use `typeof` operator to check the value's data type

`typeof` returns a string that contains the type of its operands value

```js
typeof 1
= 'number'

typeof 'foo'
= 'string'

typeof true
= 'boolean'

typeof null  // oddity of JS
= 'object'
```



### Modulo vs. Remainder

- Modulo operations return positive or negative numbers based on the second operand

  ```js
  16 / 4
  16 / 2.3 // returns a decimal
  16 / 5 // results in a decimal number
  16 % 5 // return 1, the remainder
  ```

  

### NaN

`NaN` stands for Not a Number - signals an illegal operations on numbers `0/0` 

- `NaN` has a data type of `number` 

- represents a numeric result that indicates an error occurred 

- `NaN` is the only value in JS that is **NOT** equal to itself

  ```js
  let value = NaN
  value === NaN
  // returns false
  NaN === NaN
  // returns false 
  
  let value = NaN
  Number.isNaN(value)
  // returns true
  
  Object.is(value, NaN)
  // returns true 
  ```

  

### Equality Comparison

`===` strict equality determines if 2 values are identical and returns `true` or `false`

```js
43 === 43 // true
44 === 46 // false
'foo' === 'foo' // true
'FOO' === 'foo'  // false - Case is different
```



### String Concatenation

When strings are joined together by the `+` operand

```js
'foo' + 'bar' // 'foobar'
'1' + '2' // '12'

// concatenate a string and a number will lead to type conversion
'1' + 2 // '12', number is coerced to a string
```

**implicit type coercion** if one operand is a string and the other is not with a `+` operand, JS coerces the non-string operand to a string



### Explicit Coercion

lets you decide what you want to coerce the data type to

#### Strings to Numbers

`Number('1')` returns 1 as a number, takes a string value as an argument and returns a number if the string contains a valid numeric value 

`parseInt()` parses an integer from a string 

`parseFloat(value)` coerces a string toa floating-point (decimal) number

```js
Number('foo') // NaN
parseInt('12') // 12
parseFloat('12.4foo') // 12.4
```



#### Numbers to Strings

```js
String(20) // '20'
```



## Data Structures

complex data types - arrays and objects

### Arrays

**array** is an ordered list of items - can contain any data type (string, number, boolean, other arrays)

**array literal** `[]`

```js
[1, 2, 3, 4]
[1, 2, 3][0] // 1
```

- can access items in an array by their index value and `[]` square bracket notation
- all arrays are **zero-indexed** 
- order of elements is signaficant



### Objects

**objects** dictionary-lilke data structure that matches keys with specific values (hash, dictionary, associative array are all common terms for an object)

**collection of key-value pairs**

**object literal** `{}` 

key is in the form of a string, followed by a `:` and a value of any type

```js
{ dog: 'barks'}
let animals = { dog: 'barks', cat: "meows", pig: 'oinks'}

// retrieve a value
animals['cat'] // returns "meows"
```

- can retrieve a value by its key using square bracket notation and key names in string form



## Expressions and Return Values

**expression** is anything that JS can evaluate to a value even if it `undefined` and `null` 

- evaluate to values that can be used in other expressions 

some functions *print or display* a value to the output but they do NOT return a value

**expressions** always RETURN a value

```js
console.log('howdy')
howdy // outputs to the console, prints to the console
// returns undefined

let a = console.log('hello')
a // will evaluate to undefined since that is what is returned from the console.log expression
```

**statements** include expressions as part of their syntax, but the value cannot be captured and reused later

```js
let foo = 3;
```



**statement** is a line of code commanding a task

- variable, function and class declarations
- loops and `if` statements
- `return` and `break` statements
- Assignments `a = 3`
- standalone expressions `console.log("Hello")` 

