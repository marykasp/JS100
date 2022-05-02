# Variables

**Variables** act like containers that store data, give a label(identifier) to a value. Can be used to retrieve the data later in the program. 

- Stores a reference to where the value is located in memory
- Variable is stored in named space in memory, contains a reference/pointer to where the value it was assigned is also stored in memory

**Variable is a named area of a program's memory space where the program can store data**

- Declare a variable with `let` or `var` and initialize it/assign it a value. JS will set aside memory space and store the value in that area. Will also create a variable that can be used to access that value 

**Varialbe names are often referred to as identifiers** 

- variable names declared with `let` and `var`
- constant names declared with `const`
- property names of objects
- function names
- function parameters
- class names

`variable name` refers to all the above identifiers except the property names of objects 

### Declaring and Assigning Variables

Variable declaration is a statementn that asks the JS engine to reserve/set aside space for a variable with a particular name. It also specifies an initial value for the variable.

If you don't initialize the variable it becomes **initialized** with a value of `undefined`

```js
let firstName
= undefined

// initializer in the declaration
let firstName = "mitchell"
```

The return value of variable declarations with or without an initial value is always `undefined`

Only when a variable is reassigned a value does it return that value

```js
let lastName = "Smith"
= undefined

lastName = "Johnson"
= "Johnson"
```

### Declaring Constants

`const` keyword is used to declare and initialize **constant** identifiers

`const` declarations require a value

Contants have an immutable binding to their values - you cannot assign it to a new value

```js
const INTEREST_RATE = 0.0783;
INTEREST_RATE = 0.08 // TypeError
```

### Variable Scope

A variable's **scope** determinnes where it is accessible in a program. The location *where* you declare a variable determines its scope

- `let` or `const` variables have **block** scope - set of JS statements/expressions between a pair of `{}` 
  - the brackets around an object literal do not define a block
  - Blocks refer to **executable code** betweenn braces
  - blocks appears in `if..else`, `while`, `do..while`, `for`, `switch`, and `try...catch` statements

```js
if (expression) { // starts a block
  doSomething()
}
```

```js
if (1 === 1) { // expression always evaluates to true
  let a = 'foo'
}

console.log(a) // ReferenceError - a is not defined
```

The error tells you that `a` isn't available outside the **block** - it isn't in scope outside of the `if` block

If you declare the variable outside the `if` block, the variable is available within the block

```js
let a = 'foo'

if (1 === 1) {
  a = 'bar'; // has access to the global scoped a variable
  // reassigns the variable - mutates the global scoped variable
}

console.log(a) // 'bar'
```

Undeclared variables (don't use `let` or `const`) have global scope: they ignore block and function scope 