# Variables

Notes for the variables chapter of [Launch School's Introduction to JS programming](https://launchschool.com/books/javascript/read/variables)

**Variables** act as containers that hold data in memory so that the data can be retrieved and used in the program

- named area of a program's memory space where a program can store data

  ```js
  let answer = 42; // declare and initialize a variable with a value
  answer = 43;  // reassign the value to the answer variable 
  console.log(answer) // 43
  ```

  

- variable names must accurately describe the data the variable contains (**identifiers**)

- Other variables in JS:

  - variable names declared by `let` and `var`
  - constant names declared by `const`
  - properties of the *global* object - not all object properties are variables; only those on the global object
  - function names
  - function parameters - placeholders for values later passed to the function call
  - class names

```js
let firstName
// = undefined

let lastName = 'Collins';
lastName
// 'Collins'
```

1. Declare `firstName` variable with no **initializer**
2. `firstName` variable **initialized** with value of `undefined`
3. use **initializer** in the variable declaration
4. declarations with or without an initial value always return `undefined` 



### Constants

`const` keyword lets you declare and initialize **constant** identifiers

- once you declare a constant, you *cannot* assign it a new value 

  ```js
  const INTEREST_RATE = 0.0783;
  INTEREST_RATE = 0.0788; // Uncaught TypeError
  ```

  

- `const` declarations require a value or it will throw a `SyntaxError` 

### Variable Scope

**scope** determines where the variable is available in the program - the location where the variable is declared determines its scope 

**block** **scope:** variables declared with `let` or `const` keyword inside a code block are only accessible within that block and not outside it

- **block** is a grouping of JS statements and expressions between a pair of `{}` 
- executable code between braces (would not include object literals)
- `if..else`, `while`, `do...while` , `for` , `switch` statements
- many developers treat `function bodies` as blocks of code



All undeclared variables (not using `let` or `const` keyword) have a **global scope** and can be accessed anywhere in the program 