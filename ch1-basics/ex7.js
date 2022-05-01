// what will occur if you access an array element with an index that is greater than the length of the array

let foo = ['a', 'b', 'c'];
console.log(foo.length) // 3
console.log(foo[3]) // undefined

// when you use an index value with Array[index] that has no corresponding element, JS returns undefined
