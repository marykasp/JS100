# Functions

Notes from [Launch School's JS100 book](https://launchschool.com/books/javascript/read/functions#usingfunctions)

**Functions** group of code statments that perform a specific task, can call the function to execute the code block



### Using Functions

- `function` keyword defines a function

- `{}` contains the function body

  ```js
  function greeting(name) {
    console.log(`Hello ${name}!`);
  }
  
  greeting('Mary');
  ```

  

- `arguments` values passed into a function that is then used by the function
  - data from outside the function that is passed as input into the function
- `parameters` placeholders/variable names for the values that are later passed into the function call
- `invoke` call a function, function body is executed



### Default Parameters

- Enter in default arguments at the function declaration
- can call the function without passing it an argument, will use default provided

```js
function say(word = "hello") {
  console.log(word + "!");
}

say() // => hello!
```



### Return Values

- `return` statement allows you to return a specific value from a function
  - returns value to the function `caller`
  - will cause function to stop running 
- `implicit return value` is the value of `undefined` , default return value of a function 
- `predicates` functions that return boolean values

```js
function add(a, b) {
  return a + b
}

add(2,3) // returns 5
```



## Functions and Scope

- **global variables** available everywhere within the program
- **local variables** confined to a function or code block
  - Short-lived; they go away when the function or block of code that corresponds with their scope stops running

## Functions vs. Methods

- **method invocation** prepend a variable name followed by a period to a function invocation 
  - method is a function that is on an object and can be called on an instance of that object

### Mutating the Caller

- **mutates the caller** when a method permanently alters the object that invokes the method
  - a concern when dealing with arrays and objects but not primitive values (numbers, strings, booleans)
- Primitive values are **immutable** - their values never change; operations on immutable values always return new values
- Pass-by-value (primitive values)
- pass-by-reference - points to location in memory with objects and arrays (why the original value can become mutated with certain methods and functions)



### Function Composition

- can use a function call as an argument to another function

- **function declaration** - allows for hoisting where you can call the function before it is declared in a program

  ```js
  greetPeople();
  
  function greetPeople() {
    console.log("Good Morning!");
  }
  ```

  

- **function expression** - binds an anonymous function to a variable/identifier, call the function using the variable name: cannot invoke a function expression before it appears

  - **all JS functions are objects** - assign them to variables, pass them as arguments to another function, return them from functions (**first class function**)
  - any function that doesn't have the word `function` at the very beginning of a statement

  ```js
  let greetPeople = function() {
    console.log("Good Afternoon!")
  }
  
  greetPeople();
  ```

- **arrow functions** similar to function expressions with a different syntax, *concise body arrow function*

  ```js
  let greetPeople = () => console.log("Good Morning!")
  let add = (a,b) => a + b; // impplicit return, omit the return statement
  ```

  

## The Call Stack

- helps JS keep track of what function is executing as well as where the execution should resume when the function returns 
- info about the current function on top of the stack then removes it once the function returns a value
- **stack frame** represents global top-level portion of program (`main function`)