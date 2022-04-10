# Flow Control

- data is on a journey through a program and can take different paths depending on conditions
- **flow control** data taking the correct path



### Conditionals

- `if statments` and `logical operators` 
- `<`, `>`, `<=`, `>=`, `==`,`===`, `!=`, `!==`, `&&`, `||` 
- **clause** block, statment, or expression that executes when the condition evaluates to `true` 
- `else` clause will turn when no condition evaluates to true

### Comparison Operators

- return a boolean value: `true` or `false` 
- **operands** the values/expressions on either side of the comparison operator 
- `===` **strict equality operator**, returns `true` when the operands have the same type and value
- `!==` **strict inequality operator** returns false when the operands have the same type and value and returns true otherwise, inverse of `===` 
- `==` **non-strict equality operator** when operands have different types it attempts to coerce one of the operands to the other operand's type before comparing them 
- `!=` **non-strict inequality operator** when the operands have different types attempts to coerce them to the same type before comparing the value



### Logical Operators

- provide ability to combine conditions:

- `!` **not operator** returns `true` when its operand is `false` and vice versa, negates its operand

  `!true` 

- `&&` **and operator** returns `true` when **both** operands are `true` 

- `||` **or operator** returns `true` when either operand is `true` 



### Short Circuits

- **short circuit evaluation** does not need to evaluate second expression in certain cases

### Truthiness

- JS can coerce any value to a boolean value

- expression evaluates to `true` or `false`

- following values are treated as `false` (**falsy values**)

  - `false`
  - `0`
  - `''` empty string
  - `undefined`
  - `null`
  - `NaN`

- when using `&&` and `||` the return value is always the value of the operand evaluated last

  ``` js
  3 && 'foo' // 'foo'
  'foo' && 3 // 3
  0 && 'foo' // short circuit evaluation, returns 0
  'foo' && 0 // 0
  
  3 || foo  // short circuit, 3
  'foo' || 3 // 'foo'
  0 || 'foo' // 'foo'
  '' || 0 // 0
  ```

  



- expressions that return a value that is either **truthy or false** - instead use an `if` statement so con be converted to a boolean value

  ```js
  let foo = null;
  let bar = 'qux'
  let isOk = (foo || bar) ? true : false
  
  let isOk = !!(foo || bar)
  !!a => !(!a)
  // inner ! converts value of a to false if truthy, the outer then flips to opposite boolean
  ```



### Operator Precedence

- list of comparison operators from highest precedence to lowest:
  - `<=`, `<`, `>`, `>=` - Comparison
  - `===`, `!==`, `==`, `!=` - Equality
  - `&&` - Logical AND
  - `||` - Logical OR



### Ternary Operator

- quick and easy short, concise `if/else` statment

- JS evaluates the comparison if true then the first expression will run

- **expression** so can assign it to a variable, pass it as an argument

  ```js
  let message = 1 == 1 ? 'this is true' : 'this is not true'
  ```

  

### Switch Statement

- `switch` similar to an `if/else` statement, it compares a single value against multiple cases for strict equality
  - if `break` keyword is not included if it finds a match will execute that clause and all the clauses after: execution falls through to the next `case` clause without this keyword
  - `default` clause run when the expression doesn't match any of the `case` clauses (like the `else` block)

```js
let a = 5

switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default;
    console.log('a is neither 5 nor 6');
    break;
}
```

