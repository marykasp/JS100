# Objects

**Object Oriented Programming** is a paradigm that centers around modeling problems as **objects** that have behavior (perform actions) and **state** (they have properties & characteristics)

## What are Objects?

- **objects** are complex data structures that are a collection of **key-value pairs** 

  - **keys** are strings
  - values can be of any data type 

- **Object literal** `{}`

  ```js
  let person = {
    name: 'Jane',
    age: 37,
    hobbies: ['photography', 'genealogy'],
  };
  
  person.name
  person['age']
  ```

  

- access values in an object: **dot notation** or **bracket notation** 
- variable that stores a key name, use bracket notation to retrieve value
- `delete` to remove a property from an object
- `const` declared objects: can't change the object the variable refers to (pass by reference, points to same location in memory), but can modify the object's properties

## Objects vs. Primitives

- Objects: simple objects, arrays, functions, dates
- Objects are composed of primitive values
- objects are mutable: can add, remove, and modify their component values
- primitive values are **immutable** 

### Prototypes

- **inheritance** lets an object use properties defined on another 

- **prototypes** implement inheritance

- `Object.create` creates a new object that inherits from an existing object

  - argument passed in becomes the object that is the **prototype** (**parent object**)
  
  ```js
  let bob = { name: 'Bob', age: 22 };
  let studentBob = Object.create(bob);
  studentBob.year = 'Senior';
  
  console.log(studentBob.name); // => 'Bob'
  ```
  
  

## Iteration

#### `for/in` loop

- `for/in` iterates over all the keys in the object, each iteration it assigns the key to a variable which you can use to access the object's values

  ```js
  let person = {
    name: 'Bob',
    age: 30,
    height: '6 ft'
  };
  
  for (let prop in person) {
    console.log(person[prop]);
  }                             // => Bob
                                //    30
                                //    6 ft
  ```

  

- iterates over the properties of an object's prototypes as well, will first iterate over own properties before the prototypes

- `hasOwnProperty` takes names of a property and returns `true` if it is the name of one of the calling object's own properties 

  ```js
  let obj1 = {a: 1, b: 2}
  let obj2 = Object.create(obj1)
  obj2.c = 3
  obj2.d = 4
  
  for (let prop in obj2) {
    if (obj2.hasOwnProperty(prop)) {
      console.log(obj2[prop])
    }
  }
  ```

  

#### `Object.keys`

- `Object.keys` returns an object's keys as an array, can then iterate over the array (**own keys**)

  ```js
  let person = {
    name: 'Bob',
    age: 30,
    height: '6 ft'
  };
  
  // returns an array of the keys
  let personKeys = Object.keys(person);
          // => ['name', 'age', 'height']
  personKeys.forEach(key => {
    console.log(person[key])
  });                               // => Bob
                                    //    30
                                    //    6 ft
  ```

  

## Common Operations

- use methods that extract keys or values of an object then iterate over the resulting array

#### `Object.values` 

- extracts the values from every own property in an object to an array

  ```js
  let person = { name: 'Bob', age: 30, height: '6ft' };
  let personValues = Object.values(person);
  console.log(personValues); // => [ 'Bob', 30, '6ft' ]
  ```

  

#### `Object.entries`

- returns an array of nested array - each has two elements one of the object's keys and its value

  ```js
  let person = { name: 'Bob', age: 30, height: '6ft' };
  console.log(Object.entries(person)); // => [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]
  ```

  

#### `Object.assign`

- merges two objects into a single object - mutates the first object

  ```js
  > let objA = { a: 'foo' }
  = undefined
  
  > let objB = { b: 'bar' }
  = undefined
  
  > Object.assign(objA, objB)
  = { a: 'foo', b: 'bar' }
  > Object.assign({}, objA, objB)
  = { a: 'foo', b: 'bar' }
  ```

  