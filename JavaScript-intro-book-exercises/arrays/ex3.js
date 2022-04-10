// nested arrays

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// nested array iteration using forEach
myArray.forEach(function(array) {
  // console.log(array)
  array.forEach(function(num) {
    if (num % 2 === 0) {
      console.log(num)
    }
  })
})

// for loop with nested arrays
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray[i].length; j++) {
    let value = myArray[i][j]
    if (value % 2 === 0) {
      console.log(value);
    }
  }
}
