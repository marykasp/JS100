// use map function to create a new array that contains one element for each element in the original array

// if the element is an even value, the the corresponding element in new array should contain the string 'even'

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = myArray.map(function(num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(newArray);
