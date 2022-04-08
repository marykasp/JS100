# More Stuff

### Primitive Values

- variables that have primitive values store those values at the memory location associated with the value
- even when a variable is assigned to the value of another variable, a new memory location is created for that variable and the same value is stored there
- primitive variables are **independent** of one another
- ![Primitive values and variables](https://d186loudes4jlv.cloudfront.net/javascript/images/vars-with-primitive-values.png)



### Objects

- JS does not store the value of the object in the same place as the variable memory
- allocates additional memory for the object and places a **pointer to the object in the space allocated for the variable**

![Objects and variables](https://d186loudes4jlv.cloudfront.net/javascript/images/vars-with-objects.png)

- `obj` is always at the address 0x1248, the value at this address is a pointer to the actual object 
- **pointer to the object can change,** `obj` itself always has the same address 
- value changes to the address of the object currently assigned to the variable 



## Summary

- JS stores primitive values in variables
- uses pointers for non-primitive values like arrays and objects
- lead to surprising behavior when two or more variables reference the same object in memory 
- some operations mutate objects - modifying an element on an array is a reassignment that mutates the array



### `for/in` and `for/of`

- loop over **object properties**

- `for/in` iterates over all enumerable properties of an object including properties inherited from another object

  - iterate over objects and arrays (will return the **index values of an array**)

  ```js
  let arr = [ 10, 20, 30 ]
  let obj = { name: 'Mary', age: 32, eyeColor: 'blue'}
  
  for (let index in arr) {
    console.log(arr[index]);
  }
  // Output:  10
  //          20
  //          30
  
  for (let key in obj) {
    console.log(obj[key])
  }
  ```

- `for/of` iterates over the values of an iterable collection (**arrays and strings***)

  ```js
  let arr = [ 10, 20, 30 ]
  
  for (let value of arr) {
    console.log(value);
  }
  // Output:  10
  //          20
  //          30
  ```
  
  

### Method Chaining

- chaining methods together on a caller 
- call a method on the return value of another method 

## Regex

- **regular expressions** or regex is a sequence of character that you can use to test whether a string matches a given pattern

- **RegExp** objects store regex - object can invoke methods

  - `test()` method returns a boolean value vased on whether a string argument batches the regex

  ```js
  > /o/.test('bobcat')
  = true
  
  > /l/.test('bobcat')
  = false
  ```

  - `match()` method takes a regex as an argument, caller is a string, and returns an array that describes the match
    - `(o)` refers to a capture group match
    - `/g` refers to a global match, returns all the matches as an element in an array

  ```js
  > "bobcat".match(/x/)         // No match
  = null
  
  > "bobcat".match(/[bct]/g)    // Global match
  = [ 'b', 'b', 'c', 't' ]
  
  > "bobcat".match(/b((o)b)/)   // Singular match with groups
  = [ 'bob', 'ob', 'o', index: 0, input: 'bobcat', groups: undefined ]
  ```

  

## Math Object

```js
> Math.sqrt(36)
= 6

> Math.sqrt(2)
= 1.4142135623730951
```

## Dates

- `Date` constructor creates objects that represent a time and date 

  - `getDay()` method returns a number for the day of the week (sunday start at `0`)

  ```js
  let date = new Date('December 25, 2012');
  date.getDay() // 2
  ```

## Exceptions

- JS does not issue error messages in certain scenarios like other languages, instead it *fails silently* by returning values like `NaN, undefined, null, -1`

- **raises an error** or **throws an exception** which halts the program if the program does not catch the exception

- **exception handling** process that deals with erros in a managable manner

  - `try/catch` statement proves a means to handle exceptions

    ```js
    try {
      // perform an operation that may produce an error
    } catch (exception) {
      // an error occurred. do something about it.
      // for example, log the error
    } finally {
      // Optional 'finally' block; not used often
      // Executes regardless of whether an exception occurs.
    }
    ```



- `throw` keyword raises an exception of the type specified as an argument, given as `new` followed by one of the Error types
- can anticipate and handle errors in programs

### SyntaxError

- occurs immediately after loading a program but before it begins to run, detected based solely on the text of the program

- can use `try/catch` to catch one:

  ```js
  console.log('hello');
  
  function foobar()  // SyntaxError will be thrown here
  	// some code here
  }
  
  foobar();
  ```

## Stack Traces

- **strack trace** reports the type of error that occurred, where it occurred, and how it got there - rely on call stack
- the file name, line number, and column number together pinpoint the specific location where the failure occurred
- JS calls a function, places information about the program location on the top of the call stack, program finishes running function, removes the corresponding item from the top of the stack and uses it to return to the calling location 
