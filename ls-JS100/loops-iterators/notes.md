# Loops

**Loops** allows code to be run over again until somme ending condition is met. Loop's code body is run for as long as the condition remains truthy 

**Iteration** looping through a loop body



## while Loops

- `while` loop executes a code block for as long as the conditional expression remains truthy 

- **infinite loop** occurs when the condition never becomes falsy and the loop never stops repeating 

- counter (initializer variable) declared outside the loop, conditional expression that evaluates to a `boolean` value, loop code block, **increment statement** 

  ```js
  let counter = 1;
  while (counter <= 100) {
    console.log(counter);
    counter += 1;
  }
  ```

  

- **increment operator** `++` increments its operand by 1
- **decrement operator** `--` decrements its operand by 1
- the pre-and-post increment operator return diff. values, best to avoid using them in your code

#### Looping over Arrays

- **iterate** over each element in an array, we process each element one at a time

### do/while Loop

- `do/while` always executes the code in the block at least once even if the condition is falsy

- condition check occurs at the end of the loop 

  ```js
  let answer;
  
  do {
    answer = prompt('Do you want to do that again?');
  } while (answer === 'y')
  ```

  

## For Loops

- `for` used for when iterating over arrays and other sequences

- combines variable initialization, loop condition, variable increment/decrement all on the same line

  ```js
  for (initialization; condition; increment) {
    // loop body
  }
  
  initialization;
  while (condition) {
    // loop body
    increment
  }
  ```

  

## Controlling Loops

- `continue` lets you start a new iteration of the loop
  - when loop encounters this keyword it skips running the rest of the block and skips ahead to next iteration
- `break` lets you terminate a loop early 
  - when searching an array for a specific value, can stop iterating through the array once you find it 



## Array Iteration

- can use several built in array methods that iterate over elements in an array without using a loop

- `forEach` iterates through each element in an array and invokes a **callback function** with the element as the argument

  - takes a **callback function** as an argument
  - does not return a new array like `map` or `filter` methods

  ```js
  let names = ['Christ', 'Kevin', 'Naveed', 'Pete', 'Victor'];
  
  // anonymous function as callback
  names.forEach(function(names) {
    console.log(name);
  })
  
  // arrow function 
  names.forEach(name => console.log(name))
  ```

  

## Recursion

- **recursive** functions are functions that call themselves 
- another way to create loops

