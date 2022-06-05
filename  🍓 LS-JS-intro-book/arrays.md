# Arrays

**Array** is an *ordered* list of **elements** - can contain any data type including other arrays and objects

```js
let myArray = [2, 'Pete', 2.99, 'another string']

myArray[0] // returns 2

// access last element of array
myArray[-1]
myArray[myArray - length] // 'another string'
```

- **indexed lists** each element in an array has an indexed position
- **zero indexed** first element starts at index 0 
- reference an item in an array by using its index position and square bracket notation 



### Modifying Arrays

- `[]` operator can be used to modify elements in an array 

  ```js
  let array = [1, 2, 3];
  array[1] = 4
  
  array // [1, 4, 3]
  ```

  

- `array[array.length] = value` adds a new value to the end of an `array` 

- arrays declared with `const` keyword - the elements can still be modified but you can't change what array the variable refers to

  ```js
  const MyArray = [1, 2, 3];
  MyArray[1] = 5
  MyArray // [1, 5, 3]
  
  MyArray = [4, 5, 6] // TypeError
  ```

  

- `const` keyword prohibits changing the the that the const points to but can still change the content of the thing
- `Object.freeze()` method that prevents the changing of the items in an array defined with `const` 

#### `push` method adding elements

- `push` adds one or more elements to end of array - appends its arguments to the caller (array) which **mutates** the caller

  - returns the array's new length not the modified array

  ```js
  array.push('a') // = 5
  
  array // = [1, 4, 3, 10, 'a']
  ```

  

#### `concat` add elements

- `concat` does not mutate the caller, concatenates two arrays and returns a brand new array 

  ```js
  array.concat(42, 'abc')
  // = [1, 4, 3, 10, 'a', null, 'xyz', 42, 'abc']
  array // remains unchanged
  ```

  

#### `pop` remove elements 

- `pop` removes elements from end of array, returns element to caller, **mutates** the caller

  ```js
  let array = [1, 2, 3, 4, 5]
  array.pop() // 5
  ```



#### `splice` removes elements

- `splice` method removes one or more elements from an array

  - delete 2 elements starting at index position 3, **mutates** the caller and returns a new array with the deleted elements

  ```js
  let array = [1, 2, 3, 4, 5]
  array.splice(3, 2) // = [4, 5]
  ```

  



## Iteration Methods

### `forEach` method

- iterates over the contents of an array, invokes **callback function** once for each element passing it the element's value as an argument

- returns `undefined` 

  ```js
  let array = [1, 2, 3];
  array.forEach(function(num) {
    console.log(num)
  })
  
  // arrow function
  array.forEach(num => console.log(num))
  ```

  

### `map` method 

- transforms each element in an array and returns a **new array**

- iterates over the contents of an array, invokes a **callback function** passing the current element as the argument to the function, the function will then modify the value and store the value in a new array

  ```js
  let numbers = [1, 2, 3, 4];
  let squares = numbers.map(num => num * num)
  
  squares // [1, 4, 9, 16]
  ```

  

### `filter` method

- returns a **new array** that includes all elements from the calling array for which the callback returns a truthy value

  ```js
  > let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
  > numbers.filter(num => num > 4)
  = [ 5, 6, 7, 8, 9, 10 ]
  
  > numbers
  = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]
  ```

  

- iterates over the array, during each iteration it invokes the callback function, using the value of the current element as an argument. 
  - if callback returns a truthy value, `filter` appends the value to a new array

### `reduce` method

- reduces the contents of an array to a single value

- two arguments: **callback function** and a value that initializes the **accumulator**

- returns a value that will be used as the accumulator in the next invocation of the callback

- does NOT mutate the caller

  ```js
  > let arr = [2, 3, 5, 7]
  > arr.reduce((accumulator, element) => accumulator + element, 0)
  = 17
  
  > arr.reduce((accumulator, element) => accumulator * element, 1)
  = 210
  ```

  

## Oddities of Arrays

- **arrays are objects** `Array.isArray`
- change the `length` property to a smaller value will truncate the array and if you expand to a larger number the array expands to a new size 
- create array elements with indexes that use negative or non-integer values (act more like a property than an index position)
- `Object.keys` method will retun the array's keys as an array of strings

## Nested Arrays

- arrays can have other arrays nested inside

```js
> let teams = [['Joe', 'Jennifer'], ['Frank', 'Molly'], ['Dan', 'Sarah']]
```



### Array Equality

- arrays are only treated equal when they occupy the same spot in memory 
- two different arrays that have the same value will not be strictly equal since they are located at different places in memory 

## Other Array Methods

- `includes` determmines whether an array includes a given element

  - uses `===` to compare elements of the array with an argument

  ```js
  > let a = [1, 2, 3, 4, 5]
  > a.includes(2)
  = true
  
  > a.includes(10)
  = false
  ```

  

- `sort` rearranges elements of an array in sequence, returns a sorted array by mutating the caller

  ```js
  > let a = ["e", "c", "h", "b", "d", "a"]
  > a.sort()
  = [ 'a', 'b', 'c', 'd', 'e', 'h' ]
  ```

  

- `slice` extracts and returns a portion of the array

  - two arguments: index at which extraction begins and an index where extraction ends
  - omit second arguemtns, slice returns rest of array
  - no arguments will duplicate the entire array

  ```js
  > let fruits = ['mango', 'orange', 'banana', 'pear', 'apple']
  > fruits.slice(1, 3)
  = [ 'orange', 'banana' ]
  
  > fruits.slice(2) // second argument defaults to rest of array
  = [ 'banana', 'pear', 'apple' ]
  
  > fruits.slice() // no arguments duplicates the array
  = [ 'mango', 'orange', 'banana', 'pear', 'apple' ]
  ```

  

- `reverse` reverses the order of the array- mutates the original array

  - can use `slice` to create a copy of array before using this method if you don't want to mutate the original array 

  ```js
  > let numbers = [1, 2, 3, 4]
  > numbers.reverse()
  = [ 4, 3, 2, 1 ]
  
  > numbers
  = [ 4, 3, 2, 1 ]
  ```

  
